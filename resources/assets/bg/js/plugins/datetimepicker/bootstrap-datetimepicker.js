/*
Version 3.0.0
=========================================================
bootstrap-datetimepicker.js
https://github.com/Eonasdan/bootstrap-datetimepicker
=========================================================
The MIT License (MIT)

Copyright (c) 2014 Jonathan Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(n) {
	if (typeof define == "function" && define.amd) define(["jquery", "moment"], n);
	else if (jQuery) if (moment) n(jQuery, moment);
	else throw "bootstrap-datetimepicker requires moment.js to be loaded first";
	else throw "bootstrap-datetimepicker requires jQuery to be loaded first";
})(function(n, t) {
	if (typeof t == "undefined") {
		alert("momentjs is requried");
		throw new Error("momentjs is required");
	}
	var u = 0,
	r = t,
	f = function(t, f) {
		var st = {
			pickDate: !0,
			pickTime: !0,
			useMinutes: !0,
			useSeconds: !1,
			useCurrent: !0,
			minuteStepping: 1,
			minDate: new r({
				y: 1900
			}),
			maxDate: (new r).add(100, "y"),
			showToday: !0,
			collapse: !0,
			language: "en",
			defaultDate: "",
			disabledDates: !1,
			enabledDates: !1,
			icons: {},
			useStrict: !1,
			direction: "auto",
			sideBySide: !1,
			daysOfWeekDisabled: !1
		},
		ht = {
			time: "glyphicon glyphicon-time",
			date: "glyphicon glyphicon-calendar",
			up: "glyphicon glyphicon-chevron-up",
			down: "glyphicon glyphicon-chevron-down"
		},
		e = this,
		ct = function() {
			var i = !1,
			o, h, s;
			if (e.options = n.extend({},
			st, f), e.options.icons = n.extend({},
			ht, e.options.icons), e.element = n(t), lt(), !(e.options.pickTime || e.options.pickDate)) throw new Error("Must choose at least one picker");
			if (e.id = u++, r.lang(e.options.language), e.date = r(), e.unset = !1, e.isInput = e.element.is("input"), e.component = !1, e.element.hasClass("input-group") && (e.component = e.element.find(".datepickerbutton").size() == 0 ? e.element.find("[class^='input-group-']") : e.element.find(".datepickerbutton")), e.format = e.options.format, o = r()._lang._longDateFormat, e.format || (e.format = e.options.pickDate ? o.L: "", e.options.pickDate && e.options.pickTime && (e.format += " "), e.format += e.options.pickTime ? o.LT: "", e.options.useSeconds && (~o.LT.indexOf(" A") ? e.format = e.format.split(" A")[0] + ":ss A": e.format += ":ss")), e.use24hours = e.format.toLowerCase().indexOf("a") < 1, e.component && (i = e.component.find("span")), e.options.pickTime && i && i.addClass(e.options.icons.time), e.options.pickDate && i && (i.removeClass(e.options.icons.time), i.addClass(e.options.icons.date)), e.widget = n(ni()).appendTo("body"), e.options.useSeconds && !e.use24hours && e.widget.width(300), e.minViewMode = e.options.minViewMode || 0, typeof e.minViewMode == "string") switch (e.minViewMode) {
			case "months":
				e.minViewMode = 1;
				break;
			case "years":
				e.minViewMode = 2;
				break;
			default:
				e.minViewMode = 0
			}
			if (e.viewMode = e.options.viewMode || 0, typeof e.viewMode == "string") switch (e.viewMode) {
			case "months":
				e.viewMode = 1;
				break;
			case "years":
				e.viewMode = 2;
				break;
			default:
				e.viewMode = 0
			}
			e.options.disabledDates = d(e.options.disabledDates);
			e.options.enabledDates = d(e.options.enabledDates);
			e.startViewMode = e.viewMode;
			e.setMinDate(e.options.minDate);
			e.setMaxDate(e.options.maxDate);
			at();
			vt();
			yt();
			pt();
			wt();
			l();
			b();
			ut();
			e.options.defaultDate !== "" && p().val() == "" && e.setValue(e.options.defaultDate);
			e.options.minuteStepping !== 1 && (h = e.date.minutes(), s = e.options.minuteStepping, e.date.minutes(Math.round(h / s) * s % 60).seconds(0))
		},
		p = function() {
			return e.isInput ? e.element: dateStr = e.element.find("input")
		},
		lt = function() {
			var n;
			n = e.element.is("input") ? e.element.data() : e.element.data();
			n.dateFormat !== undefined && (e.options.format = n.dateFormat);
			n.datePickdate !== undefined && (e.options.pickDate = n.datePickdate);
			n.datePicktime !== undefined && (e.options.pickTime = n.datePicktime);
			n.dateUseminutes !== undefined && (e.options.useMinutes = n.dateUseminutes);
			n.dateUseseconds !== undefined && (e.options.useSeconds = n.dateUseseconds);
			n.dateUsecurrent !== undefined && (e.options.useCurrent = n.dateUsecurrent);
			n.dateMinutestepping !== undefined && (e.options.minuteStepping = n.dateMinutestepping);
			n.dateMindate !== undefined && (e.options.minDate = n.dateMindate);
			n.dateMaxdate !== undefined && (e.options.maxDate = n.dateMaxdate);
			n.dateShowtoday !== undefined && (e.options.showToday = n.dateShowtoday);
			n.dateCollapse !== undefined && (e.options.collapse = n.dateCollapse);
			n.dateLanguage !== undefined && (e.options.language = n.dateLanguage);
			n.dateDefaultdate !== undefined && (e.options.defaultDate = n.dateDefaultdate);
			n.dateDisableddates !== undefined && (e.options.disabledDates = n.dateDisableddates);
			n.dateEnableddates !== undefined && (e.options.enabledDates = n.dateEnableddates);
			n.dateIcons !== undefined && (e.options.icons = n.dateIcons);
			n.dateUsestrict !== undefined && (e.options.useStrict = n.dateUsestrict);
			n.dateDirection !== undefined && (e.options.direction = n.dateDirection);
			n.dateSidebyside !== undefined && (e.options.sideBySide = n.dateSidebyside)
		},
		it = function() {
			var u = "absolute",
			t = e.component ? e.component.offset() : e.element.offset(),
			i = n(window),
			r;
			e.width = e.component ? e.component.outerWidth() : e.element.outerWidth();
			t.top = t.top + e.element.outerHeight();
			e.options.direction === "up" ? r = "top": e.options.direction === "bottom" ? r = "bottom": e.options.direction === "auto" && (r = t.top + e.widget.height() > i.height() + i.scrollTop() && e.widget.height() + e.element.outerHeight() < t.top ? "top": "bottom");
			r === "top" ? (t.top -= e.widget.height() + e.element.outerHeight() + 15, e.widget.addClass("top").removeClass("bottom")) : (t.top += 1, e.widget.addClass("bottom").removeClass("top"));
			e.options.width !== undefined && e.widget.width(e.options.width);
			e.options.orientation === "left" && (e.widget.addClass("left-oriented"), t.left = t.left - e.widget.width() + 20);
			gt() && (u = "fixed", t.top -= i.scrollTop(), t.left -= i.scrollLeft());
			i.width() < t.left + e.widget.outerWidth() ? (t.right = i.width() - t.left - e.width, t.left = "auto", e.widget.addClass("pull-right")) : (t.right = "auto", e.widget.removeClass("pull-right"));
			e.widget.css({
				position: u,
				top: t.top,
				left: t.left,
				right: t.right
			})
		},
		c = function(n, t) {
			r(e.date).isSame(r(n)) || (e.element.trigger({
				type: "dp.change",
				date: r(e.date),
				oldDate: r(n)
			}), t !== "change" && e.element.change())
		},
		g = function(n) {
			e.element.trigger({
				type: "dp.error",
				date: r(n)
			})
		},
		l = function(n) {
			r.lang(e.options.language);
			var t = n;
			t || (t = p().val(), t && (e.date = r(t, e.format, e.options.useStrict)), e.date || (e.date = r()));
			e.viewDate = r(e.date).startOf("month");
			y();
			nt()
		},
		at = function() {
			r.lang(e.options.language);
			var i = n("<tr>"),
			u = r.weekdaysMin(),
			t;
			if (r()._lang._week.dow == 0) for (t = 0; t < 7; t++) i.append('<th class="dow">' + u[t] + "<\/th>");
			else for (t = 1; t < 8; t++) t == 7 ? i.append('<th class="dow">' + u[0] + "<\/th>") : i.append('<th class="dow">' + u[t] + "<\/th>");
			e.widget.find(".datepicker-days thead").append(i)
		},
		vt = function() {
			r.lang(e.options.language);
			for (var n = "",
			t = 0,
			i = r.monthsShort(); t < 12;) n += '<span class="month">' + i[t++] + "<\/span>";
			e.widget.find(".datepicker-months td").append(n)
		},
		y = function() {
			r.lang(e.options.language);
			var t = e.viewDate.year(),
			h = e.viewDate.month(),
			o = e.options.minDate.year(),
			y = e.options.minDate.month(),
			s = e.options.maxDate.year(),
			p = e.options.maxDate.month(),
			i,
			w,
			c = [],
			v,
			f,
			u,
			b,
			d,
			l,
			a = r.months();
			for (e.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"), e.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"), e.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"), e.widget.find(".datepicker-days th:eq(1)").text(a[h] + " " + t), i = r(e.viewDate).subtract("months", 1), b = i.daysInMonth(), i.date(b).startOf("week"), (t == o && h <= y || t < o) && e.widget.find(".datepicker-days th:eq(0)").addClass("disabled"), (t == s && h >= p || t > s) && e.widget.find(".datepicker-days th:eq(2)").addClass("disabled"), w = r(i).add(42, "d"); i.isBefore(w);) {
				if (i.weekday() === r().startOf("week").weekday() && (v = n("<tr>"), c.push(v)), f = "", i.year() < t || i.year() == t && i.month() < h ? f += " old": (i.year() > t || i.year() == t && i.month() > h) && (f += " new"), i.isSame(r({
					y: e.date.year(),
					M: e.date.month(),
					d: e.date.date()
				})) && (f += " active"), (k(i) || !ot(i)) && (f += " disabled"), e.options.showToday === !0 && i.isSame(r(), "day") && (f += " today"), e.options.daysOfWeekDisabled) for (u in e.options.daysOfWeekDisabled) if (i.day() == e.options.daysOfWeekDisabled[u]) {
					f += " disabled";
					break
				}
				v.append('<td class="day' + f + '">' + i.date() + "<\/td>");
				i.add(1, "d")
			}
			for (e.widget.find(".datepicker-days tbody").empty().append(c), l = e.date.year(), a = e.widget.find(".datepicker-months").find("th:eq(1)").text(t).end().find("span").removeClass("active"), l === t && a.eq(e.date.month()).addClass("active"), l - 1 < o && e.widget.find(".datepicker-months th:eq(0)").addClass("disabled"), l + 1 > s && e.widget.find(".datepicker-months th:eq(2)").addClass("disabled"), u = 0; u < 12; u++) t == o && y > u || t < o ? n(a[u]).addClass("disabled") : (t == s && p < u || t > s) && n(a[u]).addClass("disabled");
			for (c = "", t = parseInt(t / 10, 10) * 10, d = e.widget.find(".datepicker-years").find("th:eq(1)").text(t + "-" + (t + 9)).end().find("td"), e.widget.find(".datepicker-years").find("th").removeClass("disabled"), o > t && e.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"), s < t + 9 && e.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"), t -= 1, u = -1; u < 11; u++) c += '<span class="year' + (u === -1 || u === 10 ? " old": "") + (l === t ? " active": "") + (t < o || t > s ? " disabled": "") + '">' + t + "<\/span>",
			t += 1;
			d.html(c)
		},
		yt = function() {
			r.lang(e.options.language);
			var f = e.widget.find(".timepicker .timepicker-hours table"),
			n = "",
			t,
			i,
			u;
			if (f.parent().hide(), e.use24hours) for (t = 0, i = 0; i < 6; i += 1) {
				for (n += "<tr>", u = 0; u < 4; u += 1) n += '<td class="hour">' + s(t.toString()) + "<\/td>",
				t++;
				n += "<\/tr>"
			} else for (t = 1, i = 0; i < 3; i += 1) {
				for (n += "<tr>", u = 0; u < 4; u += 1) n += '<td class="hour">' + s(t.toString()) + "<\/td>",
				t++;
				n += "<\/tr>"
			}
			f.html(n)
		},
		pt = function() {
			var f = e.widget.find(".timepicker .timepicker-minutes table"),
			n = "",
			i = 0,
			r,
			u,
			t = e.options.minuteStepping;
			for (f.parent().hide(), (t = 1) && (t = 5), r = 0; r < Math.ceil(15 / t); r++) {
				for (n += "<tr>", u = 0; u < 4; u += 1) i < 60 ? (n += '<td class="minute">' + s(i.toString()) + "<\/td>", i += t) : n += "<td><\/td>";
				n += "<\/tr>"
			}
			f.html(n)
		},
		wt = function() {
			var r = e.widget.find(".timepicker .timepicker-seconds table"),
			n = "",
			u = 0,
			t,
			i;
			for (r.parent().hide(), t = 0; t < 3; t++) {
				for (n += "<tr>", i = 0; i < 4; i += 1) n += '<td class="second">' + s(u.toString()) + "<\/td>",
				u += 5;
				n += "<\/tr>"
			}
			r.html(n)
		},
		nt = function() {
			if (e.date) {
				var t = e.widget.find(".timepicker span[data-time-component]"),
				n = e.date.hours(),
				i = "AM";
				e.use24hours || (n >= 12 && (i = "PM"), n === 0 ? n = 12 : n != 12 && (n = n % 12), e.widget.find(".timepicker [data-action=togglePeriod]").text(i));
				t.filter("[data-time-component=hours]").text(s(n));
				t.filter("[data-time-component=minutes]").text(s(e.date.minutes()));
				t.filter("[data-time-component=seconds]").text(s(e.date.second()))
			}
		},
		bt = function(t) {
			t.stopPropagation();
			t.preventDefault();
			e.unset = !1;
			var i = n(t.target).closest("span, td, th"),
			u,
			f,
			s,
			h,
			l = r(e.date);
			if (i.length === 1 && !i.is(".disabled")) switch (i[0].nodeName.toLowerCase()) {
			case "th":
				switch (i[0].className) {
				case "switch":
					b(1);
					break;
				case "prev":
				case "next":
					s = o.modes[e.viewMode].navStep;
					i[0].className === "prev" && (s = s * -1);
					e.viewDate.add(s, o.modes[e.viewMode].navFnc);
					y()
				}
				break;
			case "span":
				i.is(".month") ? (u = i.parent().find("span").index(i), e.viewDate.month(u)) : (f = parseInt(i.text(), 10) || 0, e.viewDate.year(f));
				e.viewMode === e.minViewMode && (e.date = r({
					y: e.viewDate.year(),
					M: e.viewDate.month(),
					d: e.viewDate.date(),
					h: e.date.hours(),
					m: e.date.minutes(),
					s: e.date.seconds()
				}), c(l, t.type), a());
				b( - 1);
				y();
				break;
			case "td":
				i.is(".day") && (h = parseInt(i.text(), 10) || 1, u = e.viewDate.month(), f = e.viewDate.year(), i.is(".old") ? u === 0 ? (u = 11, f -= 1) : u -= 1 : i.is(".new") && (u == 11 ? (u = 0, f += 1) : u += 1), e.date = r({
					y: f,
					M: u,
					d: h,
					h: e.date.hours(),
					m: e.date.minutes(),
					s: e.date.seconds()
				}), e.viewDate = r({
					y: f,
					M: u,
					d: Math.min(28, h)
				}), y(), a(), c(l, t.type))
			}
		},
		w = {
			incrementHours: function() {
				v("add", "hours", 1)
			},
			incrementMinutes: function() {
				v("add", "minutes", e.options.minuteStepping)
			},
			incrementSeconds: function() {
				v("add", "seconds", 1)
			},
			decrementHours: function() {
				v("subtract", "hours", 1)
			},
			decrementMinutes: function() {
				v("subtract", "minutes", e.options.minuteStepping)
			},
			decrementSeconds: function() {
				v("subtract", "seconds", 1)
			},
			togglePeriod: function() {
				var n = e.date.hours();
				n >= 12 ? n -= 12 : n += 12;
				e.date.hours(n)
			},
			showPicker: function() {
				e.widget.find(".timepicker > div:not(.timepicker-picker)").hide();
				e.widget.find(".timepicker .timepicker-picker").show()
			},
			showHours: function() {
				e.widget.find(".timepicker .timepicker-picker").hide();
				e.widget.find(".timepicker .timepicker-hours").show()
			},
			showMinutes: function() {
				e.widget.find(".timepicker .timepicker-picker").hide();
				e.widget.find(".timepicker .timepicker-minutes").show()
			},
			showSeconds: function() {
				e.widget.find(".timepicker .timepicker-picker").hide();
				e.widget.find(".timepicker .timepicker-seconds").show()
			},
			selectHour: function(t) {
				var r = e.widget.find(".timepicker [data-action=togglePeriod]").text(),
				i = parseInt(n(t.target).text(), 10);
				r == "PM" && (i += 12);
				e.date.hours(i);
				w.showPicker.call(e)
			},
			selectMinute: function(t) {
				e.date.minutes(parseInt(n(t.target).text(), 10));
				w.showPicker.call(e)
			},
			selectSecond: function(t) {
				e.date.seconds(parseInt(n(t.target).text(), 10));
				w.showPicker.call(e)
			}
		},
		kt = function(t) {
			var i = r(e.date),
			u = n(t.currentTarget).data("action"),
			f = w[u].apply(e, arguments);
			return tt(t),
			e.date || (e.date = r({
				y: 1970
			})),
			a(),
			nt(),
			c(i, t.type),
			f
		},
		tt = function(n) {
			n.stopPropagation();
			n.preventDefault()
		},
		rt = function(t) {
			r.lang(e.options.language);
			var f = n(t.target),
			u = r(e.date),
			i = r(f.val(), e.format, e.options.useStrict);
			i.isValid() && !k(i) && ot(i) ? (l(), e.setValue(i), c(u, t.type), a()) : (e.viewDate = u, c(u, t.type), g(i), e.unset = !0)
		},
		b = function(n) {
			n && (e.viewMode = Math.max(e.minViewMode, Math.min(2, e.viewMode + n)));
			var t = o.modes[e.viewMode].clsName;
			e.widget.find(".datepicker > div").hide().filter(".datepicker-" + o.modes[e.viewMode].clsName).show()
		},
		ut = function() {
			var i, r, t, f, u;
			e.widget.on("click", ".datepicker *", n.proxy(bt, this));
			e.widget.on("click", "[data-action]", n.proxy(kt, this));
			e.widget.on("mousedown", n.proxy(tt, this));
			if (e.options.pickDate && e.options.pickTime) e.widget.on("click.togglePicker", ".accordion-toggle",
			function(o) {
				if (o.stopPropagation(), i = n(this), r = i.closest("ul"), t = r.find(".in"), f = r.find(".collapse:not(.in)"), t && t.length) {
					if (u = t.data("collapse"), u && u.date - transitioning) return;
					t.collapse("hide");
					f.collapse("show");
					i.find("span").toggleClass(e.options.icons.time + " " + e.options.icons.date);
					e.element.find(".input-group-addon span").toggleClass(e.options.icons.time + " " + e.options.icons.date)
				}
			});
			if (e.isInput) e.element.on({
				focus: n.proxy(e.show, this),
				change: n.proxy(rt, this),
				blur: n.proxy(e.hide, this)
			});
			else {
				e.element.on({
					change: n.proxy(rt, this)
				},
				"input");
				if (e.component) e.component.on("click", n.proxy(e.show, this));
				else e.element.on("click", n.proxy(e.show, this))
			}
		},
		dt = function() {
			n(window).on("resize.datetimepicker" + e.id, n.proxy(it, this));
			if (!e.isInput) n(document).on("mousedown.datetimepicker" + e.id, n.proxy(e.hide, this))
		},
		ft = function() {
			e.widget.off("click", ".datepicker *", e.click);
			e.widget.off("click", "[data-action]");
			e.widget.off("mousedown", e.stopEvent);
			e.options.pickDate && e.options.pickTime && e.widget.off("click.togglePicker");
			e.isInput ? e.element.off({
				focus: e.show,
				change: e.change
			}) : (e.element.off({
				change: e.change
			},
			"input"), e.component ? e.component.off("click", e.show) : e.element.off("click", e.show))
		},
		et = function() {
			n(window).off("resize.datetimepicker" + e.id);
			e.isInput || n(document).off("mousedown.datetimepicker" + e.id)
		},
		gt = function() {
			if (e.element) {
				for (var i = e.element.parents(), r = !1, t = 0; t < i.length; t++) if (n(i[t]).css("position") == "fixed") {
					r = !0;
					break
				}
				return r
			}
			return ! 1
		},
		a = function() {
			r.lang(e.options.language);
			var n = "";
			e.unset || (n = r(e.date).format(e.format));
			p().val(n);
			e.element.data("date", n);
			e.options.pickTime || e.hide()
		},
		v = function(n, t, i) {
			r.lang(e.options.language);
			var u;
			if (n == "add" ? (u = r(e.date), u.hours() == 23 && u.add(i, t), u.add(i, t)) : u = r(e.date).subtract(i, t), k(r(u.subtract(i, t))) || k(u)) {
				g(u.format(e.format));
				return
			}
			n == "add" ? e.date.add(i, t) : e.date.subtract(i, t);
			e.unset = !1
		},
		k = function(n) {
			return (r.lang(e.options.language), n.isAfter(e.options.maxDate) || n.isBefore(e.options.minDate)) ? !0 : e.options.disabledDates === !1 ? !1 : e.options.disabledDates[r(n).format("YYYY-MM-DD")] === !0
		},
		ot = function(n) {
			return (r.lang(e.options.language), e.options.enabledDates === !1) ? !0 : e.options.enabledDates[r(n).format("YYYY-MM-DD")] === !0
		},
		d = function(n) {
			var t = {},
			u = 0;
			for (i = 0; i < n.length; i++) dDate = r(n[i]),
			dDate.isValid() && (t[dDate.format("YYYY-MM-DD")] = !0, u++);
			return u > 0 ? t: !1
		},
		s = function(n) {
			return n = n.toString(),
			n.length >= 2 ? n: "0" + n
		},
		ni = function() {
			if (e.options.pickDate && e.options.pickTime) {
				var n = "";
				return n = '<div class="bootstrap-datetimepicker-widget' + (e.options.sideBySide ? " timepicker-sbs": "") + ' dropdown-menu" style="z-index:9999 !important;">',
				n += e.options.sideBySide ? '<div class="row"><div class="col-sm-6 datepicker">' + o.template + '<\/div><div class="col-sm-6 timepicker">' + h.getTemplate() + "<\/div><\/div>": '<ul class="list-unstyled"><li' + (e.options.collapse ? ' class="collapse in"': "") + '><div class="datepicker">' + o.template + '<\/div><\/li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + e.options.icons.time + '"><\/span><\/a><\/li><li' + (e.options.collapse ? ' class="collapse"': "") + '><div class="timepicker">' + h.getTemplate() + "<\/div><\/li><\/ul>",
				n + "<\/div>"
			}
			return e.options.pickTime ? '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">' + h.getTemplate() + "<\/div><\/div>": '<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">' + o.template + "<\/div><\/div>"
		},
		o = {
			modes: [{
				clsName: "days",
				navFnc: "month",
				navStep: 1
			},
			{
				clsName: "months",
				navFnc: "year",
				navStep: 1
			},
			{
				clsName: "years",
				navFnc: "year",
				navStep: 10
			}],
			headTemplate: '<thead><tr><th class="prev">&lsaquo;<\/th><th colspan="5" class="switch"><\/th><th class="next">&rsaquo;<\/th><\/tr><\/thead>',
			contTemplate: '<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>'
		},
		h = {
			hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"><\/span>',
			minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"><\/span>',
			secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"><\/span>'
		};
		o.template = '<div class="datepicker-days"><table class="table-condensed">' + o.headTemplate + '<tbody><\/tbody><\/table><\/div><div class="datepicker-months"><table class="table-condensed">' + o.headTemplate + o.contTemplate + '<\/table><\/div><div class="datepicker-years"><table class="table-condensed">' + o.headTemplate + o.contTemplate + "<\/table><\/div>";
		h.getTemplate = function() {
			return '<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="' + e.options.icons.up + '"><\/span><\/a><\/td><td class="separator"><\/td><td>' + (e.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + e.options.icons.up + '"><\/span><\/a>': "") + "<\/td>" + (e.options.useSeconds ? '<td class="separator"><\/td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + e.options.icons.up + '"><\/span><\/a><\/td>': "") + (e.use24hours ? "": '<td class="separator"><\/td>') + "<\/tr><tr><td>" + h.hourTemplate + '<\/td> <td class="separator">:<\/td><td>' + (e.options.useMinutes ? h.minuteTemplate: '<span class="timepicker-minute">00<\/span>') + "<\/td> " + (e.options.useSeconds ? '<td class="separator">:<\/td><td>' + h.secondTemplate + "<\/td>": "") + (e.use24hours ? "": '<td class="separator"><\/td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"><\/button><\/td>') + '<\/tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="' + e.options.icons.down + '"><\/span><\/a><\/td><td class="separator"><\/td><td>' + (e.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + e.options.icons.down + '"><\/span><\/a>': "") + "<\/td>" + (e.options.useSeconds ? '<td class="separator"><\/td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + e.options.icons.down + '"><\/span><\/a><\/td>': "") + (e.use24hours ? "": '<td class="separator"><\/td>') + '<\/tr><\/table><\/div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"><\/table><\/div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"><\/table><\/div>' + (e.options.useSeconds ? '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"><\/table><\/div>': "")
		};
		e.destroy = function() {
			ft();
			et();
			e.widget.remove();
			e.element.removeData("DateTimePicker");
			e.component && e.component.removeData("DateTimePicker")
		};
		e.show = function(n) {
			e.options.useCurrent === !0 && p().val() == "" && e.setValue(r().format(e.format));
			e.widget.show();
			e.height = e.component ? e.component.outerHeight() : e.element.outerHeight();
			it();
			e.element.trigger({
				type: "dp.show",
				date: r(e.date)
			});
			dt();
			n && tt(n)
		};
		e.disable = function() {
			var n = e.element.find("input");
			n.prop("disabled") || (n.prop("disabled", !0), ft())
		};
		e.enable = function() {
			var n = e.element.find("input");
			n.prop("disabled") && (n.prop("disabled", !1), ut())
		};
		e.hide = function(t) {
			if (!t || !n(t.target).is(e.element.attr("id"))) {
				for (var f = e.widget.find(".collapse"), u, i = 0; i < f.length; i++) if (u = f.eq(i).data("collapse"), u && u.date - transitioning) return;
				e.widget.hide();
				e.viewMode = e.startViewMode;
				b();
				e.element.trigger({
					type: "dp.hide",
					date: r(e.date)
				});
				et()
			}
		};
		e.setValue = function(n) {
			r.lang(e.options.language);
			n ? e.unset = !1 : (e.unset = !0, a());
			r.isMoment(n) || (n = r(n));
			n.isValid() ? (e.date = n, a(), e.viewDate = r({
				y: e.date.year(),
				M: e.date.month()
			}), y(), nt()) : g(n)
		};
		e.getDate = function() {
			return e.unset ? null: e.date
		};
		e.setDate = function(n) {
			var t = r(e.date);
			n ? e.setValue(n) : e.setValue(null);
			c(t, "function")
		};
		e.setDisabledDates = function(n) {
			e.options.disabledDates = d(n);
			e.viewDate && l()
		};
		e.setEnabledDates = function(n) {
			e.options.enabledDates = d(n);
			e.viewDate && l()
		};
		e.setMaxDate = function(n) {
			n != undefined && (e.options.maxDate = r(n), e.viewDate && l())
		};
		e.setMinDate = function(n) {
			n != undefined && (e.options.minDate = r(n), e.viewDate && l())
		};
		ct()
	};
	n.fn.datetimepicker = function(t) {
		return this.each(function() {
			var i = n(this),
			r = i.data("DateTimePicker");
			r || i.data("DateTimePicker", new f(this, t))
		})
	}
});