package server

import (
	jet2 "github.com/CloudyKit/jet"
	"github.com/allegro/bigcache/v3"
	"github.com/xiusin/logger"
	"github.com/xiusin/pine"
	"github.com/xiusin/pine/cache"
	pineBigCache "github.com/xiusin/pine/cache/providers/bigcache"
	"github.com/xiusin/pine/di"
	"github.com/xiusin/pine/middlewares/cache304"
	"github.com/xiusin/pine/render"
	"github.com/xiusin/pine/render/engine/jet"
	"github.com/xiusin/pine/sessions"
	cacheProvider "github.com/xiusin/pine/sessions/providers/cache"
	"github.com/xiusin/pinecms/src/application/controllers"
	"github.com/xiusin/pinecms/src/application/controllers/taglibs"
	"github.com/xiusin/pinecms/src/application/controllers/tplfun"
	"github.com/xiusin/pinecms/src/common/helper"
	commonLogger "github.com/xiusin/pinecms/src/common/logger"
	"github.com/xiusin/pinecms/src/config"
	"io"
	"os"
	"time"
)

var (
	app          = pine.New()
	cacheHandler cache.AbstractCache
	conf         = config.App()
)

func InitApp() {
	InitDI()
	app.Use(cache304.Cache304(30000*time.Second, conf.StaticPrefixArr()...))
}

func InitCache() {
	cacheHandler = pineBigCache.New(bigcache.DefaultConfig(24 * time.Hour))
	theme, _ := cacheHandler.Get(controllers.CacheTheme)
	if len(theme) > 0 {
		conf.View.Theme = string(theme)
	}
	helper.Inject(controllers.ServiceICache, cacheHandler)
	helper.Inject(di.ServicePineSessions, func(builder di.AbstractBuilder) (i interface{}, err error) {
		sess := sessions.New(cacheProvider.NewStore(cacheHandler), &sessions.Config{CookieName: conf.Session.Name, Expires: conf.Session.Expires})
		return sess, nil
	})
}

func InitDI() {
	helper.Inject(controllers.ServiceApplication, app)
	helper.Inject(controllers.ServiceConfig, conf)
	helper.Inject(di.ServicePineLogger, initLoggerService())
	helper.Inject(controllers.ServiceJetEngine, initJetEngine())

	pine.RegisterViewEngine(di.MustGet(controllers.ServiceJetEngine).(render.AbstractRenderer))
}

func initLoggerService() di.BuildHandler {
	return func(builder di.AbstractBuilder) (i interface{}, e error) {
		loggers := logger.New()
		writer := commonLogger.NewPineCmsLogger(config.Orm(), 10)
		pine.RegisterOnInterrupt(func() { writer.Close() })
		loggers.SetOutput(io.MultiWriter(os.Stdout, writer))
		logger.SetDefault(loggers)
		loggers.SetReportCaller(true, 3)
		if config.IsDebug() {
			loggers.SetLogLevel(logger.DebugLevel)
		} else {
			loggers.SetLogLevel(logger.ErrorLevel)
		}
		return loggers, nil
	}
}

func initJetEngine() *jet.PineJet {
	jetEngine := jet.New(conf.View.FeDirname, ".jet", conf.View.Reload)
	jetEngine.AddPath("./resources/taglibs/")

	tags := map[string]jet2.Func{
		"flink":          taglibs.Flink,
		"type":           taglibs.Type,
		"adlist":         taglibs.AdList,
		"myad":           taglibs.MyAd,
		"channel":        taglibs.Channel,
		"channelartlist": taglibs.ChannelArtList,
		"artlist":        taglibs.ArcList,
		"pagelist":       taglibs.PageList,
		"list":           taglibs.List,
		"query":          taglibs.Query,
		"likearticle":    taglibs.LikeArticle,
		"hotwords":       taglibs.HotWords,
		"tags":           taglibs.Tags,
		"position":       taglibs.Position,
		"toptype":        taglibs.TopType,
		"format_time":    tplfun.FormatTime,
		"cn_substr":      tplfun.CnSubstr,
		"GetDateTimeMK":  tplfun.GetDateTimeMK,
		"MyDate":         tplfun.MyDate,
	}

	for name, fn := range tags {
		jetEngine.AddGlobalFunc(name, fn)
	}

	return jetEngine
}
