package cmd

import (
	"fmt"
	"github.com/rivo/tview"
	"github.com/spf13/cobra"
	"github.com/xiusin/pinecms/src/config"
	"time"
)

var initCmd = &cobra.Command{
	Use:   "init",
	Short: "初始化CMS配置",
	Run: func(cmd *cobra.Command, args []string) {
		app := tview.NewApplication()
		var db config.DbConfig
		db.Db.Conf.Port = "3306"
		db.Db.DbPrefix = "pinecms_"
		db.Db.DbDriver = "mysql"
		pages := tview.NewPages()
		form := tview.NewForm().
			AddInputField("服务器地址", db.Db.Conf.ServeIp, 20, nil, func(text string) {
				db.Db.Conf.ServeIp = text
			}).
			AddInputField("端口", db.Db.Conf.Port, 20, nil, func(text string) {
				db.Db.Conf.Port = text
			}).
			AddInputField("账号", db.Db.Conf.Username, 20, nil, func(text string) {
				db.Db.Conf.Username = text
			}).
			AddPasswordField("密码", db.Db.Conf.Password, 20, '*', func(text string) {
				db.Db.Conf.Password = text
			}).
			AddInputField("数据库", db.Db.Conf.Name, 20, nil, func(text string) {
				db.Db.Conf.Name = text
			}).
			AddInputField("表前缀", db.Db.DbPrefix, 20, nil, func(text string) {
				db.Db.DbPrefix = text
			}).
			AddButton("保存", func() {
				db.CreateYaml()
				if !db.Db.Conf.Check() {
					alert(pages, fmt.Sprintf("数据库配置信息必须填写"))
				} else {
					go func() {
						time.Sleep(time.Second * 3)
						app.Stop()
					}()
					alert(pages, fmt.Sprintf("保存成功, 3秒后关闭"))
				}
			}).
			AddButton("取消", func() {
				app.Stop()
			}).SetButtonsAlign(tview.AlignCenter)

		form.SetBorder(true).SetTitle("PineCms初始化安装").SetTitleAlign(tview.AlignCenter)

		flex := tview.NewFlex().AddItem(Center(38, 17, form), 0, 3, true)

		pages.AddPage("base", flex, true, true)

		if err := app.SetRoot(pages, true).EnableMouse(true).Run(); err != nil {
			panic(err)
		}
	},
}

func Center(width, height int, p tview.Primitive) tview.Primitive {
	return tview.NewFlex().
		AddItem(nil, 0, 1, false).
		AddItem(tview.NewFlex().
			SetDirection(tview.FlexRow).
			AddItem(nil, 0, 1, false).
			AddItem(p, height, 1, true).
			AddItem(nil, 0, 1, false), width, 1, true).
		AddItem(nil, 0, 1, false)
}

func init() {
	rootCmd.AddCommand(initCmd)
}

func alert(pages *tview.Pages, message string) *tview.Pages {
	id := "alert-dialog"
	return pages.AddPage(id, tview.NewModal().SetText(message).AddButtons([]string{"确定"}).
		SetDoneFunc(func(buttonIndex int, buttonLabel string) {
			pages.HidePage(id).RemovePage(id)
		}), false, true)
}
