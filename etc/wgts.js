var xa = apn.inheritWidget(apn.widgets["apn.wgt.rect"]);
xa.styleMap = {
    title: true,
    visibility: true,
    alpha: true,
    angle: true,
    dragX: true,
    dragY: true,
    dragInParent: true,
    dragContainParent: true,
    borderRadiusTopLeft: true,
    borderRadiusTopRight: true,
    borderRadiusBottomLeft: true,
    borderRadiusBottomRight: true
};
xa.properties = {
    attrs: {
        cfg: {
            imgLT: {
                mediaID: undefined
            },
            imgLB: {
                mediaID: undefined
            },
            imgRT: {
                mediaID: undefined
            },
            imgRB: {
                mediaID: undefined
            },
            imgL: {
                mediaID: undefined
            },
            imgR: {
                mediaID: undefined
            },
            imgT: {
                mediaID: undefined
            },
            imgB: {
                mediaID: undefined
            },
            imgC: {
                mediaID: undefined
            }
        }
    }
};
xa.createAsCanvasObject = function(b, a, c, d, e) {
    return apn.IWidget.createCanvasObject(b, this, "apn.CPatch9", bx.CCanvasWnd.SHAPE_RECT, a, c, d, e)
};
xa.exeOnLoad = function(c, e) {
    var a = c.wgtTag(e);
    delete a.textTag;
    var b = c.wgtGetProperty(e, "cfg");
    if (!b.imgLT.mediaID || !b.imgLB.mediaID || !b.imgRT.mediaID || !b.imgRB.mediaID || !b.imgL.mediaID || !b.imgR.mediaID || !b.imgT.mediaID || !b.imgB.mediaID || !b.imgC.mediaID) {
        c.log(e, "This widget requires 9 images to properly run.");
        return
    }
    var f = {};
    f.LT = {
        url: c.mediaURL(b.imgLT.mediaID)
    };
    f.LB = {
        url: c.mediaURL(b.imgLB.mediaID)
    };
    f.RT = {
        url: c.mediaURL(b.imgRT.mediaID)
    };
    f.RB = {
        url: c.mediaURL(b.imgRB.mediaID)
    };
    f.L = {
        url: c.mediaURL(b.imgL.mediaID)
    };
    f.R = {
        url: c.mediaURL(b.imgR.mediaID)
    };
    f.T = {
        url: c.mediaURL(b.imgT.mediaID)
    };
    f.B = {
        url: c.mediaURL(b.imgB.mediaID)
    };
    f.C = {
        url: c.mediaURL(b.imgC.mediaID)
    };

    function d(h, g, i) {
        if (h == g) {
            apn.widgets.utils.patch9(a, 1 / c.getZoomX(), 1 / c.getZoomY(), f.LT.image, f.L.image, f.LB.image, f.B.image, f.RB.image, f.R.image, f.RT.image, f.T.image, f.C.image);
            a.__ready = true
        } else {
            c.log(e, "Failed to load " + i + " images.")
        }
    }
    new apn.CRscLoader().load(c.project, f, d);
    a.tagOnPostResize = function() {
        if (a.__ready) {
            apn.widgets.utils.patch9(a, 1 / c.getZoomX(), 1 / c.getZoomY())
        }
    }
};
xa.edtOnPreloadAsset = function(f, c, b) {
    var a = f.wgtGetProperty(c, "cfg");
    if (f.getObjectByID(c) && f.getObjectByID(c).apdPreloaded) {
        var e = f.getObjectByID(c).apdPreloaded
    } else {
        var e = {}
    }
    e.LT = {
        url: f.mediaURL(a.imgLT.mediaID)
    };
    e.LB = {
        url: f.mediaURL(a.imgLB.mediaID)
    };
    e.RT = {
        url: f.mediaURL(a.imgRT.mediaID)
    };
    e.RB = {
        url: f.mediaURL(a.imgRB.mediaID)
    };
    e.L = {
        url: f.mediaURL(a.imgL.mediaID)
    };
    e.R = {
        url: f.mediaURL(a.imgR.mediaID)
    };
    e.T = {
        url: f.mediaURL(a.imgT.mediaID)
    };
    e.B = {
        url: f.mediaURL(a.imgB.mediaID)
    };
    e.C = {
        url: f.mediaURL(a.imgC.mediaID)
    };

    function d(h, g, i) {
        if (h == g) {
            if (f.getObjectByID(c)) {
                f.getObjectByID(c).apdPreloaded = e
            }
            b(true)
        } else {
            b(false)
        }
    }
    new apn.CRscLoader().load(f.getData(), e, d)
};
xa.edtOnConfig = function(g, d) {
    var a = g.wgtGetProperty(d, "cfg");
    var f;
    var e = this;

    function c(h) {
        if (h) {
            g.getObjectByID(d).refresh()
        }
    }

    function b() {
        eduLib.edtInputApplyAll(g, f);
        g.wgtSetProperty(d, "cfg", a);
        e.edtOnPreloadAsset(g, d, c)
    }
    if (f = g.dlgDoModal(600, 500, b)) {
        eduLib.edtInputAdd(g, f, {
            type: "title",
            title: "Images for corner"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Left-Top",
            value: a,
            key: "imgLT"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Left-Bottom",
            value: a,
            key: "imgLB"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Right-Top",
            value: a,
            key: "imgRT"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Right-Bottom",
            value: a,
            key: "imgRB"
        });
        eduLib.edtInputAdd(g, f, {
            type: "title",
            title: "Images for border pattern"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Left",
            value: a,
            key: "imgL"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Right",
            value: a,
            key: "imgR"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Top",
            value: a,
            key: "imgT"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Bottom",
            value: a,
            key: "imgB"
        });
        eduLib.edtInputAdd(g, f, {
            type: "title",
            title: "Image for center pattern"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Center",
            value: a,
            key: "imgC"
        })
    }
};
uxWgtPatch9 = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.rect"]);
xa.styleMap = {
    title: true,
    visibility: true,
    alpha: true,
    angle: true,
    dragX: true,
    dragY: true,
    dragInParent: true,
    dragContainParent: true,
    borderRadiusTopLeft: true,
    borderRadiusTopRight: true,
    borderRadiusBottomLeft: true,
    borderRadiusBottomRight: true
};
xa.properties = {
    attrs: {
        dir: "H",
        cfg: {
            imgL: {
                mediaID: undefined
            },
            imgM: {
                mediaID: undefined
            },
            imgR: {
                mediaID: undefined
            }
        }
    }
};
xa.createAsCanvasObject = function(b, a, c, d, e) {
    return apn.IWidget.createCanvasObject(b, this, "apn.CPatch3", bx.CCanvasWnd.SHAPE_RECT, a, c, d, e)
};
xa.exeOnLoad = function(c, e) {
    var a = c.wgtTag(e);
    delete a.textTag;
    var b = c.wgtGetProperty(e, "cfg");
    if (!b.imgL.mediaID || !b.imgM.mediaID || !b.imgR.mediaID) {
        c.log(e, "This widget requires 3 images to properly run.");
        return
    }
    var f = {};
    f.L = {
        url: c.mediaURL(b.imgL.mediaID)
    };
    f.M = {
        url: c.mediaURL(b.imgM.mediaID)
    };
    f.R = {
        url: c.mediaURL(b.imgR.mediaID)
    };

    function d(h, g, i) {
        if (h == g) {
            apn.widgets.utils.patch3(a, c.wgtGetProperty(e, "dir") == "V", f.L.image, f.M.image, f.R.image);
            a.__ready = true
        } else {
            c.log(e, "Failed to load " + i + " images.")
        }
    }
    new apn.CRscLoader().load(c.project, f, d);
    a.tagOnPostResize = function() {
        if (a.__ready) {
            apn.widgets.utils.patch3(a)
        }
    }
};
xa.edtOnPreloadAsset = function(f, c, b) {
    var a = f.wgtGetProperty(c, "cfg");
    if (f.getObjectByID(c) && f.getObjectByID(c).apdPreloaded) {
        var e = f.getObjectByID(c).apdPreloaded
    } else {
        var e = {}
    }
    e.L = {
        url: f.mediaURL(a.imgL.mediaID)
    };
    e.M = {
        url: f.mediaURL(a.imgM.mediaID)
    };
    e.R = {
        url: f.mediaURL(a.imgR.mediaID)
    };

    function d(h, g, i) {
        if (h == g) {
            if (f.getObjectByID(c)) {
                f.getObjectByID(c).apdPreloaded = e
            }
            b(true)
        } else {
            b(false)
        }
    }
    new apn.CRscLoader().load(f.getData(), e, d)
};
xa.edtOnConfig = function(g, d) {
    var a = g.wgtGetProperty(d, "cfg");
    var f;
    var e = this;

    function c(h) {
        if (h) {
            g.getObjectByID(d).refresh()
        }
    }

    function b() {
        eduLib.edtInputApplyAll(g, f);
        g.wgtSetProperty(d, "cfg", a);
        e.edtOnPreloadAsset(g, d, c)
    }
    if (f = g.dlgDoModal(600, 500, b)) {
        eduLib.edtInputAdd(g, f, {
            type: "title",
            title: "Images for 3-patch"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: (g.wgtGetProperty(d, "dir") == "V" ? "Top" : "Left"),
            value: a,
            key: "imgL"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: "Middle",
            value: a,
            key: "imgM"
        });
        eduLib.edtInputAdd(g, f, {
            type: "image",
            title: (g.wgtGetProperty(d, "dir") == "V" ? "Bottom" : "Right"),
            value: a,
            key: "imgR"
        })
    }
};
uxWgtPatch3 = xa;
var xa = apx.cloneContainerWidget();
xa.apxUI = [{
    apxType: "제목",
    wgtClass: ["apn.wgt.singleText"]
}, {
    apxType: "빠르기 문구",
    wgtClass: ["apn.wgt.singleText"]
}, {
    apxType: "작곡/작사자",
    wgtClass: ["apn.wgt.rect"]
}, {
    apxType: "악보",
    wgtClass: ["ms.wgt.note"]
}, {
    apxType: "발성연습/메뉴1",
    wgtClass: ["ux.wgt.btnImage"]
}];
xa.editor = xa.editor || {};
xa.editor.states = {
    ready: "기본상태",
    vocalKey1: "장조연습-1",
    vocalKey2: "장조연습-2",
    vocalKey3: "장조연습-3",
    vocalL: "하향",
    vocalH: "상향",
    vocalChrC: "2부합창-다",
    vocalChrF: "2부합창-바",
    vocalChrG: "2부합창-사",
    vocalS: "소프라노",
    vocalA: "알토",
    vocalC: "합창"
};
xa.properties.state = "ready";
xa.properties.attrs = {
    cfg: {
        sub1: {
            info: {
                title: "곡 제목",
                descL: "리듬타고 신나게",
                descR: "홍길동작사\n홍길동작곡",
                exeNoteIndex: "",
                exePlayIndex: ""
            },
            m1a: [{
                audio: {
                    mediaID: undefined
                },
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                },
                title: "",
                playLine: "1",
                playLayer: "1",
                altPlayIndex: "",
                altNoteIndex: ""
            }],
            m1b: [{
                audio: {
                    mediaID: undefined
                },
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                },
                title: "",
                playLine: "1",
                playLayer: "1",
                altPlayIndex: "",
                altNoteIndex: ""
            }],
            m2a: [{
                audio: {
                    mediaID: undefined
                },
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                },
                title: "",
                playLine: "1",
                playLayer: "1",
                altPlayIndex: "",
                altNoteIndex: ""
            }],
            m2b: [{
                audio: {
                    mediaID: undefined
                },
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                },
                title: "",
                playLine: "1",
                playLayer: "1",
                altPlayIndex: "",
                altNoteIndex: ""
            }],
            m2c: [{
                audio: {
                    mediaID: undefined
                },
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                },
                title: "",
                playLine: "1",
                playLayer: "1",
                altPlayIndex: "",
                altNoteIndex: ""
            }],
            m2d: [{
                audio: {
                    mediaID: undefined
                },
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                },
                title: "",
                playLine: "1",
                playLayer: "1",
                altPlayIndex: "",
                altNoteIndex: ""
            }],
            m3: [{
                audio: {
                    mediaID: undefined
                },
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                },
                title: "",
                playLine: "1",
                playLayer: "1",
                altPlayIndex: "",
                altNoteIndex: ""
            }],
            m4: [{
                audio: {
                    mediaID: undefined
                },
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                },
                title: "",
                playLine: "1",
                playLayer: "1",
                altPlayIndex: "",
                altNoteIndex: ""
            }]
        },
        sub2v: {
            key: [{
                noteIndex: "",
                playIndex: "",
                noteIndexL: "",
                playIndexL: "",
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                }
            }, {
                noteIndex: "",
                playIndex: "",
                noteIndexL: "",
                playIndexL: "",
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                }
            }, {
                noteIndex: "",
                playIndex: "",
                noteIndexL: "",
                playIndexL: "",
                audioH: {
                    mediaID: undefined
                },
                audioL: {
                    mediaID: undefined
                }
            }],
            chr: [{
                noteIndex: "",
                audioS: {
                    mediaID: undefined
                },
                audioA: {
                    mediaID: undefined
                },
                audioC: {
                    mediaID: undefined
                }
            }, {
                noteIndex: "",
                audioS: {
                    mediaID: undefined
                },
                audioA: {
                    mediaID: undefined
                },
                audioC: {
                    mediaID: undefined
                }
            }, {
                noteIndex: "",
                audioS: {
                    mediaID: undefined
                },
                audioA: {
                    mediaID: undefined
                },
                audioC: {
                    mediaID: undefined
                }
            }]
        },
        sub3: {
            pageID: "",
            sggID: ""
        },
        skin: "skin1"
    }
};
xa._MENU_H = 35;
xa._GUIDES_H = [58, 130, 193, 210, 726];
xa._GUIDES_V = [20, 55, 1116, 1151];
xa._skins = {
    skin1: {
        type: "svg",
        subFontStyle: "#fff3cd",
        subOnFontStyle: "#ee0949",
        btnW: {
            m1a: 104,
            m1b: 158,
            m2a: 119,
            m2b: 176,
            m2c: 104,
            m2d: 104,
            m3: 104,
            m4: 104,
            vocal: 104,
            note: 146
        },
        btnH: 27,
        menuH: 35,
        barH: 21,
        subH: 23,
        subBtnH: 19,
        subBtnFontH: 15
    },
    skin2: {
        type: "svg",
        subFontStyle: "#fff3cd",
        subOnFontStyle: "#ee0949",
        btnW: {
            m1a: 105,
            m1b: 160,
            m2a: 118,
            m2b: 179,
            m2c: 105,
            m2d: 105,
            m3: 105,
            m4: 105,
            vocal: 106,
            note: 136
        },
        btnH: 29,
        menuH: 34,
        barH: 15,
        subH: 23,
        subBtnH: 19,
        subBtnFontH: 15
    }
};
xa.exeAssetPreload = function(g, c, a) {
    var j = g.wgtTag(c);
    var h = g.wgtGetProperty(c, "cfg").skin || "skin1";
    var b = ["btn_m1a.svg", "btn_m1a_on.svg", "btn_m1b.svg", "btn_m1b_on.svg", "btn_m2a.svg", "btn_m2a_on.svg", "btn_m2b.svg", "btn_m2b_on.svg", "btn_m2c.svg", "btn_m2c_on.svg", "btn_m2d.svg", "btn_m2d_on.svg", "btn_m3.svg", "btn_m3_on.svg", "btn_m4.svg", "btn_m4_on.svg", "btn_note.svg", "btn_note_on.svg", "btn_vocal.svg", "btn_vocal_on.svg", "menu_bar.png", "menu_bg.png", "sub_holder_C.png", "sub_holder_L.png", "sub_holder_R.png", "sub_on_C.png", "sub_on_L.png", "sub_on_R.png"];
    var e = {};
    for (var d = 0; d < b.length; d++) {
        e[d] = {
            url: g.localMediaURL(c, h + "/" + b[d])
        }
    }
    j.__onPreloadEnd = a;

    function f(k, i, l) {
        j.__preloadCount = j.__preloadCount || 0;
        j.__preloadCount++;
        if (j.__preloadCount == 2) {
            a();
            delete j.__onPreloadEnd
        }
    }
    new apn.CRscLoader().load(g.project, e, f)
};
xa.exeOnLoad = function(h, c) {
    var d = h.screen.objects[c].layout.layers;
    if (!d || !d["1"] || !d["2"]) {
        h.log(c, "정상적인 구조를 가지지 않은 위젯입니다. 개발 지원에 문의하시기 바랍니다.");
        return
    }
    var i = h.wgtTag(c);
    var e = h.wgtGetProperty(c, "cfg");
    var b = d["1"].id;
    var a = d["2"].id;
    var f = false;
    if (!h.getWidgetsByType("악보", b)[0]) {
        h.log(c, '악보 위젯이 "노래듣기"에 존재하지 않습니다. 필수 위젯입니다.');
        f = true
    }
    if (!h.getWidgetsByType("제목", b)[0]) {
        h.log(c, '"제목"에 해당하는 위젯이 "노래듣기"에 존재하지 않습니다. 필수 위젯입니다.');
        f = true
    }
    if (!h.getWidgetsByType("빠르기 문구", b)[0]) {
        h.log(c, '"빠르기 문구"에 해당하는 위젯이 "노래듣기"에 존재하지 않습니다. 필수 위젯입니다.');
        f = true
    }
    if (!h.getWidgetsByType("작곡/작사자", b)[0]) {
        h.log(c, '"작곡/작사자"에 해당하는 위젯이 "노래듣기"에 존재하지 않습니다. 필수 위젯입니다.');
        f = true
    }
    if (!h.getWidgetsByType("악보", a)[0]) {
        h.log(c, '악보 위젯이 "발성연습"에 존재하지 않습니다. 필수 위젯입니다.');
        f = true
    }
    if (!h.getWidgetsByType("발성연습/메뉴1", a)[0]) {
        h.log(c, '"발성연습/메뉴1"이 "발성연습"에 존재하지 않습니다. 필수 위젯입니다.');
        f = true
    }
    if (f) {
        return
    }
    i.ctx = {};
    i.ctx.idLayerS = b;
    i.ctx.idLayerV = a;
    i.ctx.idNoteS = h.getWidgetsByType("악보", b)[0];
    i.ctx.idNoteV = h.getWidgetsByType("악보", a)[0];
    i.ctx.idVmenu1 = h.getWidgetsByType("발성연습/메뉴1", a)[0];
    i.ctx.noteCFG = h.wgtGetProperty(i.ctx.idNoteS, "cfg");
    i.ctx.noteCFGbk = bx.$cloneObject({}, i.ctx.noteCFG);
    if (i.ctx.noteCFG.idAudio && h.wgtTag(i.ctx.noteCFG.idAudio)) {
        i.ctx.uIdAudio = i.ctx.noteCFG.idAudio
    }
    i.ctx.noteCfgV = h.wgtGetProperty(i.ctx.idNoteV, "cfg");
    if (i.ctx.noteCfgV.idAudio && h.wgtTag(i.ctx.noteCfgV.idAudio)) {
        i.ctx.uIdAudioV = i.ctx.noteCfgV.idAudio
    }

    function g(j, k) {
        if (j == i.ctx.idNoteS) {
            i.ctx.uNoteCtl = msWgtNote.I_getController(h, i.ctx.idNoteS);
            sggWgtLsnSong.menuStart(h, c)
        } else {
            if (j == i.ctx.idNoteV) {
                i.ctx.uNoteCtlV = msWgtNote.I_getController(h, i.ctx.idNoteV);
                i.ctx.uNotePlayerV = msWgtNote.I_getPlayer(h, i.ctx.idNoteV);
                sggWgtLsnSong._vocalBuildScreen(h, i, "vocalKey1")
            }
        }
    }
    h.wgtListenProperty(c, "msWgtNote_notifyController", g);
    h.wgtTag(i.ctx.idNoteS).style.visibility = "hidden"
};
xa.exeSetState = function(b, a, c) {
    sggWgtLsnSong._vocalBuildScreen(b, a, c)
};
xa._vocalBuildScreen = function(j, k, a) {
    var c = j.wgtId(k);
    var e = j.wgtGetProperty(c, "cfg");
    var d, h, b = "playIndex",
        i = "noteIndex";
    if (a == "vocalKey1") {
        d = e.sub2v.key[0]
    } else {
        if (a == "vocalKey2") {
            d = e.sub2v.key[1]
        } else {
            if (a == "vocalKey3") {
                d = e.sub2v.key[2]
            } else {
                if (a == "vocalChrC") {
                    d = e.sub2v.chr[0]
                } else {
                    if (a == "vocalChrF") {
                        d = e.sub2v.chr[1]
                    } else {
                        if (a == "vocalChrG") {
                            d = e.sub2v.chr[2]
                        } else {
                            if (k.ctx._vPrvData) {
                                d = k.ctx._vPrvData
                            } else {
                                return
                            }
                        }
                    }
                }
            }
        }
    }
    k.ctx._vPrvData = d;
    if (a == "vocalKey1" || a == "vocalKey2" || a == "vocalKey3" || a == "vocalH") {
        h = "audioH"
    } else {
        if (a == "vocalChrC" || a == "vocalChrF" || a == "vocalChrG" || a == "vocalS") {
            h = "audioS"
        } else {
            if (a == "vocalA") {
                h = "audioA"
            } else {
                if (a == "vocalC") {
                    h = "audioC"
                } else {
                    if (a == "vocalL") {
                        h = "audioL";
                        b = "playIndexL";
                        i = "noteIndexL"
                    }
                }
            }
        }
    }

    function g() {
        if (k.ctx.uNoteCtlV && k.ctx.uIdAudioV) {
            if (d[h] && d[h].mediaID) {
                j.wgtSetProperty(k.ctx.uIdAudioV, "apxMediaID", d[h].mediaID)
            }
            if (d[b]) {
                if (k.ctx._vPrvPlayIndex === undefined || k.ctx._vPrvPlayIndex != d[b]) {
                    var l = sggWgtLsnSong._parsePlay(j, d[b]);
                    if (l) {
                        k.ctx.uNoteCtlV.setPlayer(k.ctx.uNotePlayerV, l);
                        k.ctx._vPrvPlayIndex = d[b]
                    }
                }
            }
        }
    }
    if (k.ctx.uNotePlayerV) {
        if (d[i]) {
            if (k.ctx._vPrvNoteIndex === undefined || k.ctx._vPrvNoteIndex != d[i]) {
                var f = sggWgtLsnSong._parseNote(j, d[i]);
                if (f) {
                    k.ctx.uNotePlayerV.setData(f);
                    k.ctx.uNotePlayerV.load(null, null, g);
                    k.ctx._vPrvNoteIndex = d[i]
                }
            } else {
                g()
            }
        }
    }
};
xa.menuStart = function(c, f) {
    var a = c.wgtTag(f);
    if (!a.ctx) {
        return
    }
    var b = c.wgtGetProperty(f, "cfg");
    var e = b.skin || "skin1";
    a.ctx.uNotePlayer = msWgtNote.I_getPlayer(c, a.ctx.idNoteS);
    a.ctx.imgs = {};
    a.ctx.imgs.L = {
        url: c.localMediaURL(f, e + "/sub_holder_L.png")
    };
    a.ctx.imgs.M = {
        url: c.localMediaURL(f, e + "/sub_holder_C.png")
    };
    a.ctx.imgs.R = {
        url: c.localMediaURL(f, e + "/sub_holder_R.png")
    };
    a.ctx.imgs.onL = {
        url: c.localMediaURL(f, e + "/sub_on_L.png")
    };
    a.ctx.imgs.onM = {
        url: c.localMediaURL(f, e + "/sub_on_C.png")
    };
    a.ctx.imgs.onR = {
        url: c.localMediaURL(f, e + "/sub_on_R.png")
    };

    function d(j, h, k) {
        if (j == h) {
            sggWgtLsnSong.menuBuild(c, a, f, b, e);
            var l = "m1a";
            for (var g in b.sub1) {
                if (g != "info" && b.sub1[g][0].audio.mediaID) {
                    l = g;
                    break
                }
            }
            if (c.wgtTag(a.ctx.idNoteS)) {
                c.wgtTag(a.ctx.idNoteS).style.visibility = "visible"
            }
            sggWgtLsnSong.menuSelect(c, a, f, b, e, l)
        } else {
            c.log(f, "Failed to load " + k + " images.")
        }
        a.__preloadCount = a.__preloadCount || 0;
        a.__preloadCount++;
        if (a.__preloadCount == 2 && a.__onPreloadEnd) {
            a.__onPreloadEnd();
            delete a.__onPreloadEnd
        }
    }
    new apn.CRscLoader().load(c.project, a.ctx.imgs, d)
};
xa.menuBuild = function(f, q, d, g, w) {
    var D = f.wgtTag(d);
    if (!D || !D.ctx) {
        return
    }
    var n = 1 / f.getZoomY();
    var s = Math.ceil(this._skins[w].menuH * n);
    var v = Math.ceil(this._skins[w].subH * n);
    var l = Math.ceil(this._skins[w].subBtnH * n);
    var a = Math.ceil(this._skins[w].subBtnFontH * n);
    var k = Math.round(3 * n);
    q._tagMenu = q.$TAG("DIV", {
        style: "position:absolute;left:0px;top:0px;width:100%;height:" + s + "px;"
    });
    q._tagMenu.style.background = "url(" + f.localMediaURL(d, w + "/menu_bg.png") + ") repeat-x";
    q._tagMenu.$CSS({
        backgroundSize: "auto 100%",
        boxShadow: "0px " + k + "px " + k + "px #777777"
    });
    q._tagMenu.style.zIndex = Math.max(q.childNodes[0].style.zIndex, q.childNodes[1].style.zIndex) + 1;
    var A, z, B = {};
    if (g.sub3.pageID) {
        B.note = {
            cnt: 1
        }
    }
    if (g.sub2v && g.sub2v.key[0].noteIndex) {
        B.vocal = {
            cnt: 1
        }
    }
    var b = {
        m1a: true,
        m1b: true,
        m2c: true,
        m2a: true,
        m2b: true,
        m2d: true,
        m3: true,
        m4: true
    };
    for (A in b) {
        if (g.sub1[A]) {
            for (z = 0; z < g.sub1[A].length; z++) {
                if (g.sub1[A][z].audio.mediaID) {
                    B[A] = B[A] || {
                        cnt: 0,
                        sub: {}
                    };
                    B[A].sub[z] = g.sub1[A][z];
                    B[A].cnt++
                }
            }
        }
    }
    var e = 0,
        h = 0;
    for (A in B) {
        e += Math.ceil(this._skins[w].btnW[A] * n);
        h++
    }
    if (h == 0) {
        return
    }
    var u = (parseInt(q.style.width) - e) / (h + (!B.note ? 1 : 0));
    var r = 0,
        C = 0;
    var p = (this._skins[w].menuH - this._skins[w].btnH) * 0.5 * n;
    q._tagMenu.btns = {};
    for (A in B) {
        if (r == 0 && A != "note") {
            r += u
        }
        q._tagMenu.btns[A] = q._tagMenu.$TAG("IMG", {
            style: "position:absolute;top:" + (A == "note" ? 0 : p) + "px;left:" + r + "px;width:" + (n * this._skins[w].btnW[A]) + "px;",
            src: f.localMediaURL(d, w + "/btn_" + A + "." + (this._skins[w].type || "png"))
        });
        q._tagMenu.btns[A]._src = f.localMediaURL(d, w + "/btn_" + A + "." + (this._skins[w].type || "png"));
        q._tagMenu.btns[A]._srcON = f.localMediaURL(d, w + "/btn_" + A + "_on." + (this._skins[w].type || "png"));
        q._tagMenu.btns[A]._id = A;
        q._tagMenu.btns[A].onmouseover = function(j) {
            for (var c in q._tagMenu.btns) {
                if (q._tagMenu.btns[c] != this) {
                    if (q._tagMenu.btns[c]._sub) {
                        q._tagMenu.btns[c]._sub.style.display = "none"
                    }
                    q._tagMenu.btns[c].src = q._tagMenu.btns[c]._src
                } else {
                    if (this._selected) {
                        if (this._sub) {
                            this._sub.style.display = "block"
                        }
                    }
                    this.src = this._srcON
                }
            }
        };
        q._tagMenu.btns[A].onmouseout = function(c) {
            if (!this._selected) {
                this.src = this._src;
                if (this._sub) {
                    this._sub.style.display = "none"
                }
            }
        };
        q._tagMenu.onmouseout = function(x) {
            var c;
            if (x.relatedTarget && bx.DOM.IsDescendantOf(x.relatedTarget, this)) {
                c = true
            }
            if (!c) {
                for (var j in q._tagMenu.btns) {
                    if (q._tagMenu.btns[j]._selected) {
                        q._tagMenu.btns[j].src = q._tagMenu.btns[j]._srcON;
                        if (q._tagMenu.btns[j]._sub) {
                            q._tagMenu.btns[j]._sub.style.display = "block"
                        }
                        break
                    }
                }
            }
        };
        q._tagMenu.btns[A].apxOnEvent = function(c, i, x, j) {
            if (i == "click") {
                sggWgtLsnSong.menuSelect(c, q, d, g, w, this._id)
            }
        };
        if (B[A].cnt > 1) {
            if ((v - l) % 2 != 0) {
                v += 1
            }
            var t = (v - l) / 2;
            q._tagMenu.btns[A]._sub = q._tagMenu.$TAG("DIV", {
                style: "position:absolute;box-sizing:border-box;padding:" + t + "px;top:" + (s) + "px;height:" + v + "px;width:auto;"
            });
            q._tagMenu.btns[A]._sub.btns = {};
            apn.widgets.utils.patch3(q._tagMenu.btns[A]._sub, false, D.ctx.imgs.L.image, D.ctx.imgs.M.image, D.ctx.imgs.R.image);
            for (z in B[A].sub) {
                q._tagMenu.btns[A]._sub.btns[z] = q._tagMenu.btns[A]._sub.$TAG("DIV", {
                    align: "center",
                    style: "position:relative;float:left;height:" + l + "px;"
                });
                q._tagMenu.btns[A]._sub.btns[z]._3patch = apn.widgets.utils.patch3(q._tagMenu.btns[A]._sub.btns[z], false, D.ctx.imgs.onL.image, D.ctx.imgs.onM.image, D.ctx.imgs.onR.image);
                q._tagMenu.btns[A]._sub.btns[z]._span = q._tagMenu.btns[A]._sub.btns[z].$TAG("DIV", {
                    align: "center",
                    style: "box-sizing:border-box;padding-left:" + l / 2 + "px;padding-right:" + l / 2 + "px;font-family:Nanum Gothic;font-weight:bold;font-size:" + a + "px;line-height:" + l + "px;color:" + this._skins[w].subFontStyle + ";position:relative;"
                });
                q._tagMenu.btns[A]._sub.btns[z]._span.innerHTML = B[A].sub[z].title;
                q._tagMenu.btns[A]._sub.btns[z]._id = z;
                q._tagMenu.btns[A]._sub.btns[z]._idMenu = A;
                q._tagMenu.btns[A]._sub.btns[z]._span.onmouseover = function(c) {
                    if (!this.parentNode._selected) {
                        sggWgtLsnSong.menuSubMenuOn(this.parentNode, w, true)
                    }
                };
                q._tagMenu.btns[A]._sub.btns[z]._span.onmouseout = function(c) {
                    if (!this.parentNode._selected) {
                        sggWgtLsnSong.menuSubMenuOn(this.parentNode, w, false)
                    }
                };
                q._tagMenu.btns[A]._sub.btns[z]._span.apxOnEvent = function(c, i, x, j) {
                    if (i == "click") {
                        sggWgtLsnSong.menuSelect(c, q, d, g, w, this.parentNode._idMenu, this.parentNode._id)
                    }
                };
                q._tagMenu.btns[A]._sub.btns[z].style.width = (q._tagMenu.btns[A]._sub.btns[z]._span.offsetWidth + 1) + "px";
                apn.widgets.utils.patch3(q._tagMenu.btns[A]._sub.btns[z], false, D.ctx.imgs.onL.image, D.ctx.imgs.onM.image, D.ctx.imgs.onR.image);
                q._tagMenu.btns[A]._sub.btns[z]._3patch.style.display = "none"
            }
            var o = q._tagMenu.btns[A]._sub.offsetWidth;
            var m = r - (o - q._tagMenu.btns[A].offsetWidth) / 2;
            if (m + o > parseInt(D.style.width)) {
                m = parseInt(D.style.width) - o - 1
            }
            if (m < 0) {
                m = 1
            }
            q._tagMenu.btns[A]._sub.style.left = m + "px";
            q._tagMenu.btns[A]._sub.style.width = q._tagMenu.btns[A]._sub.offsetWidth + "px";
            apn.widgets.utils.patch3(q._tagMenu.btns[A]._sub, false, D.ctx.imgs.L.image, D.ctx.imgs.M.image, D.ctx.imgs.R.image);
            q._tagMenu.btns[A]._sub.style.display = "none"
        }
        if (A != "note") {
            C++
        }
        r += this._skins[w].btnW[A] * n;
        if (A != "note" && C != (B.note ? h - 1 : h)) {
            q._tagMenu.$TAG("IMG", {
                style: "position:absolute;top:" + (this._skins[w].menuH - this._skins[w].barH) * 0.5 * n + "px;left:" + (r + u / 2) + "px;height:" + this._skins[w].barH * n + "px;",
                src: f.localMediaURL(d, w + "/menu_bar.png")
            })
        }
        r += u
    }
    D.ctx.btns = B
};
xa.menuSubMenuOn = function(b, c, a) {
    if (a) {
        b._3patch.style.display = "block";
        b._span.style.color = sggWgtLsnSong._skins[c].subOnFontStyle
    } else {
        b._3patch.style.display = "none";
        b._span.style.color = sggWgtLsnSong._skins[c].subFontStyle
    }
};
xa.menuSelect = function(q, p, e, g, r, b, a) {
    var s = q.wgtTag(e);
    if (!s || !s.ctx) {
        return
    }
    var l = p._tagMenu.btns[b];
    if (l) {
        if (!l._selected) {
            l._selected = true;
            l.src = l._srcON
        }
        if (l._sub) {
            l._sub.style.display = "block";
            for (var f in l._sub.btns) {
                if (!a || a == f) {
                    a = f;
                    l._sub.btns[f]._selected = true;
                    sggWgtLsnSong.menuSubMenuOn(l._sub.btns[f], r, true)
                } else {
                    l._sub.btns[f]._selected = false;
                    sggWgtLsnSong.menuSubMenuOn(l._sub.btns[f], r, false)
                }
            }
        }
        if (b == "vocal") {
            if (q.stateGetActive(e, true) != "2") {
                q.stateLayerActivate(e, "2");
                q.stateSetActive(e, "2")
            }
            if (s.ctx.uIdAudio) {
                q.wgtControlMedia(s.ctx.uIdAudio, "stop")
            }
            q.wgtSetProperty(s.ctx.idVmenu1, "apxState", "disabled")
        } else {
            if (b == "note") {
                var o;
                if (g.sub3.sggID) {
                    try {
                        if (window.parent && window.parent.requestByContentNo) {
                            window.parent.requestByContentNo(g.sub3.sggID, "MOD");
                            o = true
                        }
                    } catch (k) {
                        console.error("보안 사항 오류입니다. 이 기능은 i-Scream서버에서 정상적으로 호출을 해야 합니다." + k)
                    }
                }
                if (g.sub3.pageID) {
                    if (!o) {
                        q.pageRun(g.sub3.pageID)
                    }
                }
            } else {
                if (q.stateGetActive(e, true) != "1") {
                    q.stateLayerActivate(e, "1");
                    q.stateSetActive(e, "1")
                }
                if (s.ctx.uIdAudioV) {
                    q.wgtControlMedia(s.ctx.uIdAudioV, "stop")
                }
                var h = g.sub1[b][a || 0];
                var n = h.altNoteIndex || g.sub1.info.exeNoteIndex;
                var d;
                if (h.altPlayIndex) {
                    d = sggWgtLsnSong._parsePlay(q, h.altPlayIndex)
                } else {
                    d = sggWgtLsnSong._parsePlay(q, g.sub1.info.exePlayIndex)
                }
                if (s.ctx.uNotePlayer) {
                    var m = sggWgtLsnSong._parseNote(q, n);
                    if (m) {
                        if (h.lineH) {
                            s.ctx.uNotePlayer.setLineHeight(parseInt(h.lineH))
                        } else {
                            s.ctx.uNotePlayer.setLineHeight(parseInt(s.ctx.noteCFGbk.noteStyle.lineH))
                        }
                        if (h.lineW) {
                            s.ctx.uNotePlayer.setLineWeight(parseInt(h.lineW))
                        } else {
                            s.ctx.uNotePlayer.setLineWeight(parseInt(s.ctx.noteCFGbk.noteStyle.lineWgt))
                        }
                        if (h.lyricH) {
                            s.ctx.uNotePlayer.setLyricHeight(h.lyricH)
                        } else {
                            s.ctx.uNotePlayer.setLyricHeight(s.ctx.noteCFGbk.lyricsFontSize || 47)
                        }
                        if (h.lineOffsetTop !== "") {
                            s.ctx.uNotePlayer.addLineMargin(parseInt(h.lineOffsetTop))
                        } else {
                            s.ctx.uNotePlayer.addLineMargin(s.ctx.noteCFGbk.noteStyle.lineMarginLyT)
                        }
                        if (h.lineOffsetBtm !== "") {
                            s.ctx.uNotePlayer.addLineMargin(parseInt(h.lineOffsetBtm), true)
                        } else {
                            s.ctx.uNotePlayer.addLineMargin(s.ctx.noteCFGbk.noteStyle.lineMarginLyB, true)
                        }
                        s.ctx.uNotePlayer.playControl("playLine", h.playLine);
                        s.ctx.uNotePlayer.playControl("playLayer", h.playLayer);
                        s.ctx.uNotePlayer.playControl("autoShow", h.autoShow || "1");
                        s.ctx.uNotePlayer.applySolfege(b == "m2a" || b == "m2b" || b == "m2c" || b == "m2d", Math.max(bx.$checkNaN(parseInt(h.solfegeLayer)) - 1, 0));
                        if (d) {
                            s.ctx.uNotePlayer.setPlayMode(true)
                        } else {
                            s.ctx.uNotePlayer.setPlayMode(false)
                        }
                        s.ctx.uNotePlayer.setData(m);
                        s.ctx.uNotePlayer.load();
                        s.ctx.uNotePlayer.draw()
                    }
                }
                if (s.ctx.uNoteCtl) {
                    s.ctx.uNoteCtl.mediaLoad(q.mediaURL(h.audio.mediaID));
                    if (d) {
                        s.ctx.uNoteCtl.setPlayer(s.ctx.uNotePlayer, d)
                    }
                    if (!s.ctx.uNoteCtl.getControlState("showLyrics")) {
                        s.ctx.uNotePlayer.hideLyricsTemp(true)
                    }
                } else {
                    if (s.ctx.uIdAudio) {
                        q.wgtSetProperty(s.ctx.uIdAudio, "apxMediaID", h.audio.mediaID)
                    }
                }
                q.fireEvent("wgtEvent", "sub1_" + b, e)
            }
        }
        q.wgtSetProperty(e, "sggWgtLsnSong_menuSelected", {
            main: b,
            sub: a || 0
        });
        for (var f in s.ctx.btns) {
            if (f != b) {
                p._tagMenu.btns[f]._selected = false;
                p._tagMenu.btns[f].src = p._tagMenu.btns[f]._src;
                if (p._tagMenu.btns[f]._sub) {
                    p._tagMenu.btns[f]._sub.style.display = "none";
                    for (var c in p._tagMenu.btns[f]._sub.btns) {
                        p._tagMenu.btns[f]._sub.btns[c]._selected = false;
                        sggWgtLsnSong.menuSubMenuOn(p._tagMenu.btns[f]._sub.btns[c], r, false)
                    }
                }
            }
        }
    }
};
xa._parsePlay = function(a, c) {
    var e = apn.Project.getExeModule(a.project);
    var d;
    if (e.IStub_property) {
        var f = e.IStub_property(a.project, "play", c);
        try {
            d = JSON.parse(f)
        } catch (b) {}
    }
    return d
};
xa._parseNote = function(a, b) {
    var e = apn.Project.getExeModule(a.project);
    var d;
    if (e.IStub_property) {
        var f = e.IStub_property(a.project, "note", b);
        try {
            d = JSON.parse(f)
        } catch (c) {}
    }
    return d
};
xa._sub1T = {
    m1a: "노래듣기",
    m1b: "노래따라부르기",
    m2a: "계명창",
    m2b: "계명창따라부르기",
    m2c: "계이름",
    m2d: "율명창",
    m3: "반주듣기",
    m4: "연주듣기"
};
xa.edtOnConfig = function(o, c) {
    var g = o.getScreenData().objects[c].layout.layers;
    if (!g || !g["1"] || !g["2"]) {
        return
    }
    var k = g["1"].id;
    var i = g["2"].id;
    var v, a;
    var r = apn.Project.getExeModule(o.getData());
    if (r.IStub_property) {
        v = r.IStub_property(o.getData(), "noteList");
        a = r.IStub_property(o.getData(), "playList")
    }
    if (r.IStub_pageSelectionList) {
        var m = r.IStub_pageSelectionList(o.getData(), o.getPageID())
    } else {
        var m = []
    }
    m.unshift({
        title: "",
        value: ""
    });
    var f = o.wgtGetProperty(c, "cfg");
    f.sub2v = f.sub2v || {
        key: [{
            noteIndex: "",
            playIndex: "",
            audioH: {
                mediaID: undefined
            },
            audioL: {
                mediaID: undefined
            }
        }, {
            noteIndex: "",
            playIndex: "",
            audioH: {
                mediaID: undefined
            },
            audioL: {
                mediaID: undefined
            }
        }, {
            noteIndex: "",
            playIndex: "",
            audioH: {
                mediaID: undefined
            },
            audioL: {
                mediaID: undefined
            }
        }],
        chr: [{
            noteIndex: "",
            audioS: {
                mediaID: undefined
            },
            audioA: {
                mediaID: undefined
            },
            audioC: {
                mediaID: undefined
            }
        }, {
            noteIndex: "",
            audioS: {
                mediaID: undefined
            },
            audioA: {
                mediaID: undefined
            },
            audioC: {
                mediaID: undefined
            }
        }, {
            noteIndex: "",
            audioS: {
                mediaID: undefined
            },
            audioA: {
                mediaID: undefined
            },
            audioC: {
                mediaID: undefined
            }
        }]
    };
    f.sub1.m2c = f.sub1.m2c || [{
        audio: {
            mediaID: undefined
        },
        audioH: {
            mediaID: undefined
        },
        audioL: {
            mediaID: undefined
        },
        title: "",
        playLine: "1",
        playLayer: "1",
        altPlayIndex: "",
        altNoteIndex: ""
    }];
    f.sub1.m2d = f.sub1.m2d || [{
        audio: {
            mediaID: undefined
        },
        audioH: {
            mediaID: undefined
        },
        audioL: {
            mediaID: undefined
        },
        title: "",
        playLine: "1",
        playLayer: "1",
        altPlayIndex: "",
        altNoteIndex: ""
    }];
    var n;

    function j() {
        eduLib.edtInputDestroy(o, n.tagSub1);
        eduLib.edtInputDestroy(o, n.tagSub2);
        eduLib.edtInputDestroy(o, n.tagSub3);
        eduLib.edtInputDestroy(o, n.tagSub4)
    }

    function p() {
        eduLib.edtInputApplyAll(o, n.tagSub1);
        eduLib.edtInputApplyAll(o, n.tagSub2);
        eduLib.edtInputApplyAll(o, n.tagSub3);
        eduLib.edtInputApplyAll(o, n.tagSub4);
        if (f.sub1.info.title && o.wgtByType(k, "제목")[0]) {
            o.wgtSetProperty(o.wgtByType(k, "제목")[0], "apxText", f.sub1.info.title)
        }
        if (f.sub1.info.descL && o.wgtByType(k, "빠르기 문구")[0]) {
            o.wgtSetProperty(o.wgtByType(k, "빠르기 문구")[0], "apxText", f.sub1.info.descL)
        }
        if (f.sub1.info.descR && o.wgtByType(k, "작곡/작사자")[0]) {
            o.wgtSetProperty(o.wgtByType(k, "작곡/작사자")[0], "apxText", f.sub1.info.descR)
        }
        if (f.sub1.info.exeNoteIndex && o.wgtByType(k, "악보")[0]) {
            var w = o.wgtByType(k, "악보")[0];
            var x = o.getScreenData().objects[w].create.data.properties.attrs.cfg;
            x.exeNoteIndex = f.sub1.info.exeNoteIndex;
            if (f.sub1.info.exePlayIndex) {
                x.exePlayIndex = f.sub1.info.exePlayIndex
            }
            msWgtNote.edtApply(o, w, x)
        }
        o.wgtSetProperty(c, "cfg", f);
        j()
    }
    var s = ["tagSub1", "tagSub2", "tagSub3", "tagSub4"];

    function e() {
        for (var w = 0; w < s.length; w++) {
            if (this.id == s[w]) {
                n[s[w]].style.display = "block";
                n.tagTab.$$(s[w]).style.borderStyle = "solid solid none solid"
            } else {
                n[s[w]].style.display = "none";
                n.tagTab.$$(s[w]).style.borderStyle = "none none solid none"
            }
        }
    }
    if (n = o.dlgDoModal(Math.floor(bx.UX.width * 0.96), Math.floor(bx.UX.height * 0.96), p, j)) {
        var q = 40;
        n.tagTab = n.$TAG("DIV", {
            style: "position:relative;width:100%;height:26px;padding-bottom:" + (q - 26) + "px;"
        });
        n.tagTab.innerHTML = '<span id="tagSub1" style="padding:2px 12px 2px 12px;border:solid 1px #a8a8a8;color:#6f6f6f;">노래듣기 화면</span><span id="tagSub2" style="padding:2px 12px 2px 12px;border:solid 1px #a8a8a8;color:#6f6f6f;">발성연습</span><span id="tagSub3" style="padding:2px 12px 2px 12px;border:solid 1px #a8a8a8;color:#6f6f6f;">악보보기</span><span id="tagSub4" style="padding:2px 12px 2px 12px;border:solid 1px #a8a8a8;color:#6f6f6f;">스타일</span><span id="tagBlank" style="border-bottom:solid 1px #a8a8a8;width:500px;">&nbsp;</span>';
        n.tagTab.$$("tagSub1").onclick = n.tagTab.$$("tagSub2").onclick = n.tagTab.$$("tagSub3").onclick = n.tagTab.$$("tagSub4").onclick = e;
        n.tagSub1 = n.$TAG("DIV", {
            style: "width:100%;height:" + (n.contentHeight - q) + "px"
        });
        n.tagSub2 = n.$TAG("DIV", {
            style: "width:100%;height:" + (n.contentHeight - q) + "px"
        });
        n.tagSub3 = n.$TAG("DIV", {
            style: "width:100%;height:" + (n.contentHeight - q) + "px"
        });
        n.tagSub4 = n.$TAG("DIV", {
            style: "width:100%;height:" + (n.contentHeight - q) + "px"
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "title",
            title: "곡 정보"
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "text",
            title: "제목",
            value: f.sub1.info,
            key: "title"
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "text",
            title: "빠르기",
            value: f.sub1.info,
            key: "descL"
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "text",
            title: "작곡/작사자",
            multiline: true,
            value: f.sub1.info,
            key: "descR"
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "space"
        });
        if (v) {
            eduLib.edtInputAdd(o, n.tagSub1, {
                type: "select",
                title: "악보 데이터 (m)",
                comment: "(실행기에 저장된 악보 데이터를 선택합니다.)",
                options: v,
                key: "exeNoteIndex",
                value: f.sub1.info
            })
        } else {
            eduLib.edtInputAdd(o, n.tagSub1, {
                type: "message",
                value: "악보 데이터 : 실행기 정보에 악보 데이터를 등록해야 선택할 수 있습니다."
            })
        }
        if (a) {
            eduLib.edtInputAdd(o, n.tagSub1, {
                type: "select",
                title: "연주 데이터 (m)",
                comment: "(실행기에 저장된 연주 데이터를 선택합니다.)",
                options: a,
                key: "exePlayIndex",
                value: f.sub1.info
            })
        } else {
            eduLib.edtInputAdd(o, n.tagSub1, {
                type: "message",
                value: "연주 데이터 : 실행기 정보에 연주 데이터를 등록해야 선택할 수 있습니다."
            })
        }
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "space"
        });
        var d, b;
        if (a) {
            d = a.concat();
            d.push({
                title: "사용안함",
                value: ""
            })
        } else {
            d = [{
                title: "사용안함",
                value: ""
            }]
        }
        if (v) {
            b = v.concat();
            b.push({
                title: "사용안함",
                value: ""
            })
        } else {
            b = [{
                title: "사용안함",
                value: ""
            }]
        }
        var l = [{
            title: "서브메뉴제목[?]",
            comment: "서브메뉴가 1개일 경우에는 입력하지 않아도 됩니다"
        }, {
            title: "기본음[?]",
            comment: "이 파일이 없으면 사용되지 않는 메뉴로 간주됩니다"
        }, "상향음", "하향음", {
            title: "연주부[?]",
            comment: "(연주 상태를 표시할 부(복수 지정 가능), '1', '1;2;4', '99'=전부)"
        }, {
            title: "연주줄[?]",
            comment: "(연주 상태를 표시할 줄(복수 지정 가능), '1', '1;2;4', '99'=전부)"
        }, {
            title: "악보[?]",
            comment: "필요한 경우, 대신하여 사용할 악보 데이터"
        }, {
            title: "연주데이터[?]",
            comment: "필요한 경우, 대신하여 사용할 연주 데이터"
        }, "연주표시롤링", "오선한칸높이", "오선굵기", "가사크기", {
            title: "줄간격상단[?]",
            comment: "(오선줄과 가사 상단의 간격 조정, Pixel단위)"
        }, {
            title: "줄간격하단[?]",
            comment: "(가사 하단과 다음 오선줄과의 간격 조정, Pixel단위)"
        }];
        var h = [{
            type: "text",
            key: "title"
        }, {
            type: "audio",
            key: "audio"
        }, {
            type: "audio",
            key: "audioH"
        }, {
            type: "audio",
            key: "audioL"
        }, {
            type: "text",
            key: "playLayer",
            width: "60px"
        }, {
            type: "text",
            key: "playLine",
            width: "60px"
        }, {
            type: "select",
            options: b,
            key: "altNoteIndex",
            width: "100px"
        }, {
            type: "select",
            options: d,
            key: "altPlayIndex",
            width: "100px"
        }, {
            type: "select",
            key: "autoShow",
            options: [{
                title: "예",
                value: "2"
            }, {
                title: "아니오",
                value: "1"
            }],
            width: "80px"
        }, {
            type: "select",
            key: "lineH",
            options: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, {
                title: "기본값",
                value: ""
            }],
            width: "80px"
        }, {
            type: "select",
            key: "lineW",
            options: [1, 2, 3, {
                title: "기본값",
                value: ""
            }],
            width: "80px"
        }, {
            type: "select",
            key: "lyricH",
            options: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, {
                title: "기본값",
                value: ""
            }],
            width: "80px"
        }, {
            type: "select",
            key: "lineOffsetTop",
            options: [-25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, {
                title: "기본값",
                value: ""
            }],
            width: "80px"
        }, {
            type: "select",
            key: "lineOffsetBtm",
            options: [-25, -24, -23, -22, -21, -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, {
                title: "기본값",
                value: ""
            }],
            width: "80px"
        }];
        var u = l.concat();
        var t = h.concat();
        u.push("계명표시부");
        t.push({
            type: "select",
            options: ["1", "2", "3", {
                title: "",
                value: "1"
            }],
            key: "solfegeLayer",
            width: "70px"
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "table",
            title: this._sub1T.m1a,
            value: f.sub1.m1a,
            options: {
                th: bx.$cloneObject([], l),
                add: true,
                remove: true
            },
            td: bx.$cloneObject([], h)
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "table",
            title: this._sub1T.m1b,
            value: f.sub1.m1b,
            options: {
                th: bx.$cloneObject([], l),
                add: true,
                remove: true
            },
            td: bx.$cloneObject([], h)
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "table",
            title: this._sub1T.m2c,
            value: f.sub1.m2c,
            options: {
                th: bx.$cloneObject([], u),
                add: true,
                remove: true
            },
            td: bx.$cloneObject([], t)
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "table",
            title: this._sub1T.m2a,
            value: f.sub1.m2a,
            options: {
                th: bx.$cloneObject([], u),
                add: true,
                remove: true
            },
            td: bx.$cloneObject([], t)
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "table",
            title: this._sub1T.m2b,
            value: f.sub1.m2b,
            options: {
                th: bx.$cloneObject([], u),
                add: true,
                remove: true
            },
            td: bx.$cloneObject([], t)
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "table",
            title: this._sub1T.m2d,
            value: f.sub1.m2d,
            options: {
                th: bx.$cloneObject([], u),
                add: true,
                remove: true
            },
            td: bx.$cloneObject([], t)
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "table",
            title: this._sub1T.m3,
            value: f.sub1.m3,
            options: {
                th: bx.$cloneObject([], l),
                add: true,
                remove: true
            },
            td: bx.$cloneObject([], h)
        });
        eduLib.edtInputAdd(o, n.tagSub1, {
            type: "table",
            title: this._sub1T.m4,
            value: f.sub1.m4,
            options: {
                th: bx.$cloneObject([], l),
                add: true,
                remove: true
            },
            td: bx.$cloneObject([], h)
        });
        if (v && a) {
            eduLib.edtInputAdd(o, n.tagSub2, {
                type: "table",
                title: "장조 연습 (m)",
                value: f.sub2v.key,
                options: {
                    th: ["상향음 악보", "상향음 연주", "상향음 파일", "하향음 악보", "하향음 연주", "하향음 파일"]
                },
                td: [{
                    type: "select",
                    options: v,
                    key: "noteIndex"
                }, {
                    type: "select",
                    options: a,
                    key: "playIndex"
                }, {
                    type: "audio",
                    key: "audioH"
                }, {
                    type: "select",
                    options: v,
                    key: "noteIndexL"
                }, {
                    type: "select",
                    options: a,
                    key: "playIndexL"
                }, {
                    type: "audio",
                    key: "audioL"
                }]
            });
            eduLib.edtInputAdd(o, n.tagSub2, {
                type: "space"
            });
            eduLib.edtInputAdd(o, n.tagSub2, {
                type: "table",
                title: "2부 합창 연습 (m)",
                value: f.sub2v.chr,
                options: {
                    th: ["악보 데이터", "소프라노 파일", "알토 파일", "합창 파일"]
                },
                td: [{
                    type: "select",
                    options: v,
                    key: "noteIndex"
                }, {
                    type: "audio",
                    key: "audioS"
                }, {
                    type: "audio",
                    key: "audioA"
                }, {
                    type: "audio",
                    key: "audioC"
                }]
            })
        }
        eduLib.edtInputAdd(o, n.tagSub3, {
            type: "select",
            title: "악보보기 페이지",
            comment: "(악보보기 페이지를 선택합니다)",
            options: m,
            key: "pageID",
            value: f.sub3
        });
        eduLib.edtInputAdd(o, n.tagSub3, {
            type: "text",
            title: "i-Scream 컨텐츠번호",
            comment: "(i-Scream 서버에서 할당한 컨텐츠번호)",
            key: "sggID",
            value: f.sub3
        });
        eduLib.edtInputAdd(o, n.tagSub4, {
            type: "select",
            title: "메뉴 스타일 (m)",
            options: [{
                title: "3/4학년",
                value: "skin1"
            }, {
                title: "5/6학년",
                value: "skin2"
            }],
            key: "skin",
            value: f
        });
        n.tagTab.$$("tagSub1").onclick();
        n.tagTab.$$("tagBlank").style.width = (n.clientWidth - n.tagTab.$$("tagBlank").offsetLeft) + "px"
    }
};
xa.createAsCanvasObject = function(b, a, c, d, e) {
    return apn.IWidget.createCanvasObject(b, this, "apn.CFixedLayerContainer", bx.CCanvasWnd.SHAPE_RECT, a, c, d, e, {
        CFixedLayerContainer: ["노래듣기", "발성연습"]
    })
};
xa.onEdit = function(e, c) {
    var f = {
        editLockRemove: true,
        editLockResize: true,
        editLockMove: true
    };
    var a = apn.Project.getWidgetModule(e.getObjectByID(c).data);
    if (a && a.apxUI) {
        var b, g = {};
        for (var d = 0; d < a.apxUI.length; d++) {
            if (a.apxUI[d]) {
                if (a.apxUI[d].apxWidget) {
                    g[a.apxUI[d].apxWidget] = true
                }
                if (a.apxUI[d].wgtClass && a.apxUI[d].wgtClass.length) {
                    for (b = 0; b < a.apxUI[d].wgtClass.length; b++) {
                        g[a.apxUI[d].wgtClass[b]] = true
                    }
                }
            }
        }
        var h = [];
        for (b in g) {
            h.push(b)
        }
        if (h.length) {
            f.wgtsFocus = h
        }
    }
    f.editNoLayerEdit = true;
    apn.widgets.utils.editWidget(e.getObjectByID(c), e, 2, true, f)
};
xa.edtOnPostDraw = function(g, d, e, i, f, k, c, a) {
    e.save();
    e.fillStyle = "rgba(0,0,128,0.7)";
    e.fillRect(i, f, k, sggWgtLsnSong._MENU_H);
    if (a) {
        e.beginPath();
        e.lineWidth = 1;
        bx.cCanvasObject.clearLineDash(e);
        e.strokeStyle = "rgba(255,0,0,0.4)";
        for (var b = 0; b < sggWgtLsnSong._GUIDES_H.length; b++) {
            e.moveTo(i, Math.round(f + sggWgtLsnSong._GUIDES_H[b]) - 0.5);
            e.lineTo(i + k, Math.round(f + sggWgtLsnSong._GUIDES_H[b]) - 0.5)
        }
        for (b = 0; b < sggWgtLsnSong._GUIDES_V.length; b++) {
            e.moveTo(Math.round(i + sggWgtLsnSong._GUIDES_V[b]) - 0.5, f);
            e.lineTo(Math.round(i + sggWgtLsnSong._GUIDES_V[b]) - 0.5, f + c)
        }
        e.stroke()
    }
    e.restore()
};
xa.edtOnBuildEvent = function(d, f, b, c) {
    var a = d.pages[b].objects[f].create.data.properties.attrs.cfg;
    for (var e in a.sub1) {
        if (e != "info" && a.sub1[e][0] && a.sub1[e][0].audio.mediaID) {
            c.wgtEvent = c.wgtEvent || {
                value: "wgtEvent",
                title: apn.P.eventTitle.wgtEvent,
                param: {}
            };
            c.wgtEvent.param["sub1_" + e] = "Menu " + this._sub1T[e]
        }
    }
};
sggWgtLsnSong = xa;
var xa = {
    APX_NO_POINTER_EV: true
};
xa.styleMap = {
    title: true
};
xa.properties = {
    attrs: {
        cfg: {
            skin: "skin1",
            idNote: ""
        }
    }
};
xa._skins = {
    skin1: {
        dropRadius: 3,
        chapBgColor: "#174E6D",
        chapBgColorOn: "#00CCCC"
    }
};
xa.exeAssetPreload = function(a, g, b) {
    var f = a.wgtGetProperty(g, "cfg").skin || "skin1";
    var e = ["bg.svg", "bg_chap.svg", "btn_loop_off.svg", "btn_loop_on.svg", "btn_lyrics_off.svg", "btn_lyrics_on.svg", "btn_mode_all.svg", "btn_mode_chap.svg", "btn_next.svg", "btn_next_on.svg", "btn_pause.svg", "btn_pitch.svg", "btn_pitch_disabled.svg", "btn_pitch_high.svg", "btn_pitch_low.svg", "btn_play.svg", "btn_play_on.svg", "btn_prev.svg", "btn_prev_on.svg", "btn_rate.svg", "btn_rate_fast.svg", "btn_rate_slow.svg", "btn_stop.svg", "btn_stop_on.svg", "btn_sync_off.svg", "btn_sync_on.svg", "drop_mode_all.svg", "drop_mode_all_on.svg", "drop_mode_chap.svg", "drop_mode_chap_on.svg", "drop_pitch.svg", "drop_pitch_high.svg", "drop_pitch_high_on.svg", "drop_pitch_low.svg", "drop_pitch_low_on.svg", "drop_pitch_on.svg", "drop_rate.svg", "drop_rate_fast.svg", "drop_rate_fast_on.svg", "drop_rate_on.svg", "drop_rate_slow.svg", "drop_rate_slow_on.svg", "tip_chap.svg", "tip_loop.svg", "tip_lyrics.svg", "tip_next.svg", "tip_pitch.svg", "tip_play.svg", "tip_prev.svg", "tip_rate.svg", "tip_stop.svg", "tip_sync.svg"];
    var h = {};
    for (var c = 0; c < e.length; c++) {
        h[c] = {
            url: a.localMediaURL(g, f + "/" + e[c])
        }
    }

    function d(j, i, k) {
        b()
    }
    new apn.CRscLoader().load(a.project, h, d)
};
xa.exeCreateTag = apn.widgets["apn.wgt.rect"].exeCreateTag;
xa.exeRenderTag = apn.widgets["apn.wgt.rect"].exeRenderTag;
xa.createAsCanvasObject = function(b, a, c, d, e) {
    return apn.IWidget.createCanvasObject(b, this, "apn.CImage", bx.CCanvasWnd.SHAPE_RECT, a, c, d, e, undefined, apn.CEditorS.NO_RESIZE)
};
xa.exeOnLoad = function(c, f) {
    var a = c.wgtTag(f);
    var b = c.wgtGetProperty(f, "cfg");
    if (!b.idNote || !c.wgtTag(b.idNote)) {
        c.log(f, '연동할 "악보 위젯"이 지정되어 있지 않습니다.');
        return
    }
    var g = c.widgetsByClass("sgg.wgt.lsnSong")[0];
    a.ctx = a.ctx || {};
    if (g) {
        a.ctx.uLsnCFG = c.wgtGetProperty(g, "cfg")
    }
    sggWgtLsnSongPlayer.build(c, a, b.skin, 1 / c.getZoomX(), 1 / c.getZoomY());

    function e(j, l) {
        if (j == b.idNote) {
            a.ctx.uNoteCtl = msWgtNote.I_getController(c, b.idNote);
            if (a.ctx.uNoteCtl) {
                function i() {
                    a.ctl.btnPlay._selected = true;
                    a.ctl.btnPlay.btnOnState(a.ctl.btnPlay)
                }

                function h() {
                    a.ctl.btnPlay._selected = false;
                    a.ctl.btnPlay.btnOnState(a.ctl.btnPlay)
                }
                a.ctx.uNoteCtl.control("onResume", i);
                a.ctx.uNoteCtl.control("onPause", h);

                function k(n, m) {
                    a.ctl.btnChaps._onSet(n, m)
                }
                a.ctx.uNoteCtl.control("onChangeChapter", k);
                a.ctl.btnLoop.$select(a.ctx.uNoteCtl.getControlState("loop"));
                a.ctl.btnNote.$select(a.ctx.uNoteCtl.getControlState("traceNote"));
                a.ctl.btnLyrc.$select(a.ctx.uNoteCtl.getControlState("showLyrics"))
            }
        }
    }
    c.wgtListenProperty(f, "msWgtNote_notifyController", e);

    function d(h, i) {
        a.ctx.uMenu = i;
        sggWgtLsnSongPlayer.reset(c, a, b)
    }
    c.wgtListenProperty(f, "sggWgtLsnSong_menuSelected", d)
};
xa._seekToChap = function(a, c) {
    if (a.ctx.uNoteCtl) {
        if (a.ctx.uNoteCtl.getControlState("mode") == "chapter") {
            a.ctx.uNoteCtl.chapter(c)
        }
        var b = a.ctx.uNoteCtl.getStartOfChapter(c);
        if (a.ctx.uNoteCtl.isPaused()) {
            a.ctx.uNoteCtl.mediaPlay(b)
        } else {
            a.ctx.uNoteCtl.mediaSeek(b)
        }
    }
};
xa._setChapList = function(b, a, d) {
    a.ctl.btnChaps.dropList.sel = [];
    a.ctl.btnChaps.dropList.innerHTML = "";
    var e = b.wgtGetProperty(a.apnOID, "cfg").skin;
    var g = this;
    var f;
    for (var c = 0; c < d; c++) {
        f = a.ctl.btnChaps.dropList.$TAG("DIV", {
            align: "center",
            style: "line-height:1.4em;width:100%;color:#ffffff;"
        });
        f.innerHTML = (c + 1) + " / " + d;
        f.onmouseover = function(h) {
            this.style.backgroundColor = g._skins[e].chapBgColorOn
        };
        f.onmouseout = function(h) {
            if (!this._on) {
                this.style.backgroundColor = "transparent"
            }
        };
        f.apxOnEvent = function(h, i, k, j) {
            if (i == "click") {
                g._seekToChap(a, parseInt(this.innerHTML));
                return true
            }
        };
        a.ctl.btnChaps.dropList.sel.push(f)
    }
};
xa._openChapList = function(b, a, e) {
    var d = b.wgtGetProperty(a.apnOID, "cfg").skin;
    var f = this;
    for (var c = 0; c < a.ctl.btnChaps.dropList.sel.length; c++) {
        if (e > 0 && c == e - 1) {
            a.ctl.btnChaps.dropList.sel[c]._on = true;
            a.ctl.btnChaps.dropList.sel[c].style.backgroundColor = f._skins[d].chapBgColorOn
        } else {
            a.ctl.btnChaps.dropList.sel[c]._on = false;
            a.ctl.btnChaps.dropList.sel[c].style.backgroundColor = "transparent"
        }
    }
};
xa.onSwitchFile = function(c, a, b) {
    a.ctl.btnRate.apnxBtnizeOpts.idle.normal = c.localMediaURL(a.apnOID, b.skin + "/btn_rate.svg");
    a.ctl.btnRate.src = a.ctl.btnRate.apnxBtnizeOpts.idle.normal;
    if (a.ctx.uNoteCtl) {
        a.ctx.uNoteCtl.playEnd()
    }
};
xa.reset = function(c, a, b) {
    if (a.ctx.uNoteCtl) {
        a.ctx.uNoteCtl.control("mode", "all");
        a.ctl.btnMode.src = c.localMediaURL(c.wgtId(a), b.skin + "/btn_mode_all.svg");
        this._setChapList(c, a, a.ctx.uNoteCtl.chapterCount());
        a.ctl.btnLoop.$select(false, true);
        a.ctl.btnNote.$select(true, true);
        a.ctl.btnLyrc.$select(true, true);
        a.ctl.btnPitch.$disable(true);
        if (a.ctx.uLsnCFG && a.ctx.uMenu && a.ctx.uMenu.main && a.ctx.uLsnCFG.sub1[a.ctx.uMenu.main]) {
            if (a.ctx.uLsnCFG.sub1[a.ctx.uMenu.main][a.ctx.uMenu.sub] && (a.ctx.uLsnCFG.sub1[a.ctx.uMenu.main][a.ctx.uMenu.sub].audioH.mediaID || a.ctx.uLsnCFG.sub1[a.ctx.uMenu.main][a.ctx.uMenu.sub].audioL.mediaID)) {
                a.ctl.btnPitch.$disable(false);
                a.ctl.btnPitch.apnxBtnizeOpts.idle.normal = c.localMediaURL(a.apnOID, b.skin + "/btn_pitch.svg");
                a.ctl.btnPitch.src = a.ctl.btnPitch.apnxBtnizeOpts.idle.normal
            }
        }
        a.ctl.btnRate.apnxBtnizeOpts.idle.normal = c.localMediaURL(a.apnOID, b.skin + "/btn_rate.svg");
        a.ctl.btnRate.src = a.ctl.btnRate.apnxBtnizeOpts.idle.normal;
        a.ctx.uNoteCtl.playEnd()
    }
};
xa.build = function(j, l, k, f, e) {
    var c = j.wgtId(l);
    var h = j.wgtGetProperty(c, "cfg");
    var i = 37,
        a = 24;
    var d = {
        mode: {
            x: 11,
            w: 85,
            selH: 30
        },
        play: {
            x: 123
        },
        stop: {
            x: 160
        },
        prev: {
            x: 200
        },
        chap: {
            x: 232,
            w: 78,
            fontH: 18
        },
        next: {
            x: 318
        },
        loop: {
            x: 366
        },
        sync: {
            x: 412
        },
        lyrc: {
            x: 460
        },
        pitch: {
            x: 506,
            selH: 37,
            dropX: 500
        },
        rate: {
            x: 556,
            selH: 37,
            dropX: 550
        }
    };
    l.style.overflow = "visible";
    l.style.background = "url(" + j.localMediaURL(c, k + "/bg.svg") + ") no-repeat";
    l.$CSS("backgroundSize", "100% 100%");
    l.ctl = {};
    var g = this;
    var b;
    l.ctl.toolTip = l.$TAG("IMG", {
        style: "position:absolute;display:none;z-index:1;height:" + 29 * e + "px;"
    });
    l.ctl.btnMode = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.mode.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;",
        src: j.localMediaURL(c, k + "/btn_mode_all.svg")
    });
    l.ctl.btnMode.dropList = l.$TAG("DIV", {
        style: "display:none;position:absolute;left:0px;top:" + l.style.height + ";"
    });
    l.ctl.btnMode.dropList.sel1 = l.ctl.btnMode.dropList.$TAG("IMG", {
        style: "display:block;height:" + d.mode.selH * e + "px;"
    });
    l.ctl.btnMode.dropList.sel2 = l.ctl.btnMode.dropList.$TAG("IMG", {
        style: "height:" + d.mode.selH * e + "px;"
    });
    l.ctl.btnMode.apxOnEvent = function(m, o, q, p) {
        if (this.$isDisabled && this.$isDisabled()) {
            return true
        }
        if (o == "click") {
            var r = this;

            function n(s) {
                setTimeout(function() {
                    if (r._dropOpen) {
                        r._dropOpen = false;
                        r.dropList.style.display = "none"
                    }
                    bx.Event.remove(document, "mouseup", n, false);
                    bx.Event.remove(document, "touchend", n, false);
                    bx.Event.remove(document, "touchcancel", n, false)
                }, 0)
            }
            if (!this._dropOpen) {
                this._dropOpen = true;
                this.dropList.style.display = "block";
                bx.Event.add(document, "mouseup", n, false);
                bx.Event.add(document, "touchend", n, false);
                bx.Event.add(document, "touchcancel", n, false)
            }
            if (this._toolTip) {
                this._toolTip.style.display = "none"
            }
            return true
        }
    };
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/drop_mode_all.svg"),
            hover: j.localMediaURL(c, k + "/drop_mode_all_on.svg")
        }
    };
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl) {
                l.ctx.uNoteCtl.control("mode", "all");
                l.ctx.uNoteCtl.playEnd();
                l.ctl.btnMode.src = m.localMediaURL(c, k + "/btn_mode_all.svg")
            }
            return true
        }
    };
    apnx.btnize(l.ctl.btnMode.dropList.sel1, b);
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/drop_mode_chap.svg"),
            hover: j.localMediaURL(c, k + "/drop_mode_chap_on.svg")
        }
    };
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl) {
                l.ctx.uNoteCtl.control("mode", "chapter");
                l.ctx.uNoteCtl.playEnd();
                l.ctl.btnMode.src = m.localMediaURL(c, k + "/btn_mode_chap.svg")
            }
            return true
        }
    };
    apnx.btnize(l.ctl.btnMode.dropList.sel2, b);
    l.ctl.btnPitch = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.pitch.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;"
    });
    l.ctl.btnPitch.dropList = l.$TAG("DIV", {
        style: "display:none;position:absolute;left:" + d.pitch.dropX * f + "px;top:" + l.style.height + ";"
    });
    l.ctl.btnPitch.dropList.sel1 = l.ctl.btnPitch.dropList.$TAG("IMG", {
        style: "display:block;height:" + d.pitch.selH * e + "px;"
    });
    l.ctl.btnPitch.dropList.sel2 = l.ctl.btnPitch.dropList.$TAG("IMG", {
        style: "display:block;height:" + d.pitch.selH * e + "px;"
    });
    l.ctl.btnPitch.dropList.sel3 = l.ctl.btnPitch.dropList.$TAG("IMG", {
        style: "height:" + d.pitch.selH * e + "px;"
    });
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/btn_pitch.svg")
        },
        disabled: j.localMediaURL(c, k + "/btn_pitch_disabled.svg")
    };
    b.apxOnEvent = l.ctl.btnMode.apxOnEvent;
    apnx.btnize(l.ctl.btnPitch, b, {
        tag: l.ctl.toolTip,
        idle: {
            url: j.localMediaURL(c, k + "/tip_pitch.svg"),
            dx: -225 * f,
            dy: 1
        }
    });
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/drop_pitch_high.svg"),
            hover: j.localMediaURL(c, k + "/drop_pitch_high_on.svg")
        }
    };
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl && l.ctx.uMenu && l.ctx.uLsnCFG) {
                if (l.ctx.uLsnCFG.sub1[l.ctx.uMenu.main][l.ctx.uMenu.sub].audioH.mediaID) {
                    l.ctx.uNoteCtl.mediaLoad(m.mediaURL(l.ctx.uLsnCFG.sub1[l.ctx.uMenu.main][l.ctx.uMenu.sub].audioH.mediaID));
                    l.ctl.btnPitch.apnxBtnizeOpts.idle.normal = m.localMediaURL(c, k + "/btn_pitch_high.svg");
                    l.ctl.btnPitch.src = l.ctl.btnPitch.apnxBtnizeOpts.idle.normal;
                    g.onSwitchFile(m, l, h)
                }
            }
            return true
        }
    };
    apnx.btnize(l.ctl.btnPitch.dropList.sel1, b);
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/drop_pitch.svg"),
            hover: j.localMediaURL(c, k + "/drop_pitch_on.svg")
        }
    };
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl) {
                if (l.ctx.uLsnCFG.sub1[l.ctx.uMenu.main][l.ctx.uMenu.sub].audio.mediaID) {
                    l.ctx.uNoteCtl.mediaLoad(m.mediaURL(l.ctx.uLsnCFG.sub1[l.ctx.uMenu.main][l.ctx.uMenu.sub].audio.mediaID));
                    l.ctl.btnPitch.apnxBtnizeOpts.idle.normal = m.localMediaURL(c, k + "/btn_pitch.svg");
                    l.ctl.btnPitch.src = l.ctl.btnPitch.apnxBtnizeOpts.idle.normal;
                    g.onSwitchFile(m, l, h)
                }
            }
            return true
        }
    };
    apnx.btnize(l.ctl.btnPitch.dropList.sel2, b);
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/drop_pitch_low.svg"),
            hover: j.localMediaURL(c, k + "/drop_pitch_low_on.svg")
        }
    };
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl) {
                if (l.ctx.uLsnCFG.sub1[l.ctx.uMenu.main][l.ctx.uMenu.sub].audioL.mediaID) {
                    l.ctx.uNoteCtl.mediaLoad(m.mediaURL(l.ctx.uLsnCFG.sub1[l.ctx.uMenu.main][l.ctx.uMenu.sub].audioL.mediaID));
                    l.ctl.btnPitch.apnxBtnizeOpts.idle.normal = m.localMediaURL(c, k + "/btn_pitch_low.svg");
                    l.ctl.btnPitch.src = l.ctl.btnPitch.apnxBtnizeOpts.idle.normal;
                    g.onSwitchFile(m, l, h)
                }
            }
            return true
        }
    };
    apnx.btnize(l.ctl.btnPitch.dropList.sel3, b);
    l.ctl.btnRate = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.rate.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;"
    });
    l.ctl.btnRate.dropList = l.$TAG("DIV", {
        style: "display:none;position:absolute;left:" + d.rate.dropX * f + "px;top:" + l.style.height + ";"
    });
    l.ctl.btnRate.dropList.sel1 = l.ctl.btnRate.dropList.$TAG("IMG", {
        style: "display:block;height:" + d.rate.selH * e + "px;"
    });
    l.ctl.btnRate.dropList.sel2 = l.ctl.btnRate.dropList.$TAG("IMG", {
        style: "display:block;height:" + d.rate.selH * e + "px;"
    });
    l.ctl.btnRate.dropList.sel3 = l.ctl.btnRate.dropList.$TAG("IMG", {
        style: "height:" + d.rate.selH * e + "px;"
    });
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/btn_rate.svg")
        }
    };
    b.apxOnEvent = l.ctl.btnMode.apxOnEvent;
    apnx.btnize(l.ctl.btnRate, b, {
        tag: l.ctl.toolTip,
        idle: {
            url: j.localMediaURL(c, k + "/tip_rate.svg"),
            dx: -213 * f,
            dy: 1
        }
    });
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/drop_rate_fast.svg"),
            hover: j.localMediaURL(c, k + "/drop_rate_fast_on.svg")
        }
    };
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl) {
                l.ctx.uNoteCtl.mediaPlaybackRate(1.25);
                l.ctl.btnRate.apnxBtnizeOpts.idle.normal = m.localMediaURL(c, k + "/btn_rate_fast.svg");
                l.ctl.btnRate.src = l.ctl.btnRate.apnxBtnizeOpts.idle.normal
            }
            return true
        }
    };
    apnx.btnize(l.ctl.btnRate.dropList.sel1, b);
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/drop_rate.svg"),
            hover: j.localMediaURL(c, k + "/drop_rate_on.svg")
        }
    };
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl) {
                l.ctx.uNoteCtl.mediaPlaybackRate(1);
                l.ctl.btnRate.apnxBtnizeOpts.idle.normal = m.localMediaURL(c, k + "/btn_rate.svg");
                l.ctl.btnRate.src = l.ctl.btnRate.apnxBtnizeOpts.idle.normal
            }
            return true
        }
    };
    apnx.btnize(l.ctl.btnRate.dropList.sel2, b);
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/drop_rate_slow.svg"),
            hover: j.localMediaURL(c, k + "/drop_rate_slow_on.svg")
        }
    };
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl) {
                l.ctx.uNoteCtl.mediaPlaybackRate(0.75);
                l.ctl.btnRate.apnxBtnizeOpts.idle.normal = m.localMediaURL(c, k + "/btn_rate_slow.svg");
                l.ctl.btnRate.src = l.ctl.btnRate.apnxBtnizeOpts.idle.normal
            }
            return true
        }
    };
    apnx.btnize(l.ctl.btnRate.dropList.sel3, b);
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/btn_play.svg"),
            hover: j.localMediaURL(c, k + "/btn_play_on.svg")
        },
        selected: {
            normal: j.localMediaURL(c, k + "/btn_pause.svg"),
            hover: j.localMediaURL(c, k + "/btn_pause_on.svg")
        }
    };
    l.ctl.btnPlay = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.play.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;"
    });
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl) {
                if (l.ctx.uNoteCtl.getControlState("mode") == "chapter" && l.ctl.btnChaps._cur == 0) {
                    l.ctx.uNoteCtl.chapter(0)
                }
                if (l.ctx.uNoteCtl.isPaused()) {
                    l.ctx.uNoteCtl.mediaPlay()
                } else {
                    l.ctx.uNoteCtl.mediaPause()
                }
            }
            if (this._toolTip) {
                this._toolTip.style.display = "none"
            }
            return true
        }
    };
    apnx.btnize(l.ctl.btnPlay, b, {
        tag: l.ctl.toolTip,
        idle: {
            url: j.localMediaURL(c, k + "/tip_play.svg"),
            dx: -18 * f,
            dy: 1
        }
    });
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/btn_stop.svg"),
            hover: j.localMediaURL(c, k + "/btn_stop_on.svg")
        }
    };
    l.ctl.btnStop = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.stop.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;"
    });
    b.apxOnEvent = function(m, n, p, o) {
        if (n == "click") {
            if (l.ctx.uNoteCtl) {
                if (l.ctx.uNoteCtl.getControlState("mode") == "chapter" && l.ctl.btnChaps._cur != 0) {
                    if (!l.ctx.uNoteCtl.isPaused()) {
                        l.ctx.uNoteCtl.mediaPause()
                    }
                    l.ctx.uNoteCtl.mediaSeek(0)
                } else {
                    if (!l.ctx.uNoteCtl.isPaused()) {
                        l.ctx.uNoteCtl.mediaPause()
                    }
                    l.ctx.uNoteCtl.mediaSeek(0)
                }
                l.ctx.uNoteCtl.playEnd()
            }
        }
    };
    apnx.btnize(l.ctl.btnStop, b, {
        tag: l.ctl.toolTip,
        idle: {
            url: j.localMediaURL(c, k + "/tip_stop.svg"),
            dx: -18 * f,
            dy: 1
        }
    });
    l.ctl.btnChaps = l.$TAG("DIV", {
        align: "center",
        style: "position:absolute;left:" + d.chap.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;width:" + d.chap.w * f + "px;line-height:" + a * e + "px;font-size:" + d.chap.fontH * e + "px;"
    });
    l.ctl.btnChaps.style.background = "url(" + j.localMediaURL(c, k + "/bg_chap.svg") + ") no-repeat";
    l.ctl.btnChaps.$CSS("backgroundSize", "100% 100%");
    l.ctl.btnChaps.dropList = l.$TAG("DIV", {
        style: "display:none;background-color:" + this._skins[k].chapBgColor + ";width:" + d.chap.w * f + "px;height:auto;font-size:" + d.chap.fontH * e + "px;position:absolute;left:" + d.chap.x * f + "px;top:" + (1 + parseInt(l.style.height) - (i - a) * f / 2) + "px;"
    });
    l.ctl.btnChaps.dropList.$CSS("borderRadius", Math.round(this._skins[k].dropRadius * f) + "px");
    l.ctl.btnChaps._toolTip = l.ctl.toolTip;
    l.ctl.btnChaps.apxOnEvent = function(m, n, p, o) {
        g._openChapList(m, l, this._cur);
        return l.ctl.btnMode.apxOnEvent.call(this, m, n, p, o)
    };
    l.ctl.btnChaps.onmouseover = function(m) {
        l.ctl.toolTip.src = j.localMediaURL(c, k + "/tip_chap.svg");
        l.ctl.toolTip.style.display = "block";
        l.ctl.toolTip.style.left = ((this.offsetLeft + this.offsetWidth / 2) - 48 * f) + "px";
        l.ctl.toolTip.style.top = ((this.offsetTop + this.offsetHeight) + 1) + "px"
    };
    l.ctl.btnChaps.onmouseout = function(m) {
        if (l.ctl.toolTip.style.display == "block") {
            l.ctl.toolTip.style.display = "none"
        }
    };
    l.ctl.btnChaps._onSet = function(n, m) {
        if (this._cur != n || this._count != m) {
            this._cur = n;
            this._count = m;
            this.innerHTML = n + " / " + m
        }
    };
    l.ctl.btnChaps._onSet(0, 1);
    this._setChapList(j, l, 1);
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/btn_next.svg"),
            hover: j.localMediaURL(c, k + "/btn_next_on.svg")
        }
    };
    l.ctl.btnChapNxt = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.next.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;"
    });
    b.apxOnEvent = function(m, o, q, p) {
        if (o == "click") {
            var n = (l.ctl.btnChaps._cur + 1) % (l.ctl.btnChaps._count + 1) || 1;
            g._seekToChap(l, n)
        }
    };
    apnx.btnize(l.ctl.btnChapNxt, b, {
        tag: l.ctl.toolTip,
        idle: {
            url: j.localMediaURL(c, k + "/tip_next.svg"),
            dx: -33 * f,
            dy: 1
        }
    });
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/btn_prev.svg"),
            hover: j.localMediaURL(c, k + "/btn_prev_on.svg")
        }
    };
    l.ctl.btnChapPrv = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.prev.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;"
    });
    b.apxOnEvent = function(m, o, q, p) {
        if (o == "click") {
            var n = (l.ctl.btnChaps._cur - 1 <= 0 ? l.ctl.btnChaps._count : l.ctl.btnChaps._cur - 1) % (l.ctl.btnChaps._count + 1) || 1;
            g._seekToChap(l, n)
        }
    };
    apnx.btnize(l.ctl.btnChapPrv, b, {
        tag: l.ctl.toolTip,
        idle: {
            url: j.localMediaURL(c, k + "/tip_prev.svg"),
            dx: -33 * f,
            dy: 1
        }
    });
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/btn_loop_off.svg")
        },
        selected: {
            normal: j.localMediaURL(c, k + "/btn_loop_on.svg")
        }
    };
    l.ctl.btnLoop = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.loop.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;"
    });
    b.onSelected = function(m, n) {
        if (n) {
            l.ctx.uNoteCtl.control("loop", true)
        } else {
            l.ctx.uNoteCtl.control("loop", false)
        }
    };
    apnx.btnize(l.ctl.btnLoop, b, {
        tag: l.ctl.toolTip,
        idle: {
            url: j.localMediaURL(c, k + "/tip_loop.svg"),
            dx: -149 * f,
            dy: 1
        }
    });
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/btn_sync_off.svg")
        },
        selected: {
            normal: j.localMediaURL(c, k + "/btn_sync_on.svg")
        }
    };
    l.ctl.btnNote = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.sync.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;"
    });
    b.onSelected = function(m, n) {
        if (n) {
            l.ctx.uNoteCtl.control("traceNote", true);
            j.fireEvent("wgtEvent", "sync_on", c)
        } else {
            l.ctx.uNoteCtl.control("traceNote", false);
            j.fireEvent("wgtEvent", "sync_off", c)
        }
    };
    apnx.btnize(l.ctl.btnNote, b, {
        tag: l.ctl.toolTip,
        selected: {
            url: j.localMediaURL(c, k + "/tip_sync.svg"),
            dx: -163 * f,
            dy: 1
        }
    });
    b = {
        idle: {
            normal: j.localMediaURL(c, k + "/btn_lyrics_off.svg")
        },
        selected: {
            normal: j.localMediaURL(c, k + "/btn_lyrics_on.svg")
        }
    };
    l.ctl.btnLyrc = l.$TAG("IMG", {
        style: "position:absolute;left:" + d.lyrc.x * f + "px;top:" + (i - a) * f / 2 + "px;height:" + a * e + "px;"
    });
    b.onSelected = function(m, n) {
        if (n) {
            if (!l.ctx.uNoteCtl.control("showLyrics", true)) {
                m.$select(false)
            } else {
                j.fireEvent("wgtEvent", "lyrics_on", c)
            }
        } else {
            l.ctx.uNoteCtl.control("showLyrics", false);
            j.fireEvent("wgtEvent", "lyrics_off", c)
        }
    };
    apnx.btnize(l.ctl.btnLyrc, b, {
        tag: l.ctl.toolTip,
        selected: {
            url: j.localMediaURL(c, k + "/tip_lyrics.svg"),
            dx: -148 * f,
            dy: 1
        }
    })
};
xa.edtOnConfig = function(h, d) {
    var f = [];
    var c = h.wgtByClass(null, "ms.wgt.note");
    for (var e = 0; e < c.length; e++) {
        f.push({
            value: c[e],
            title: h.itrGetObjectTitle(c[e])
        })
    }
    var a = h.wgtGetProperty(d, "cfg");
    var g;

    function b() {
        eduLib.edtInputApplyAll(h, g);
        h.wgtSetProperty(d, "cfg", a)
    }
    if (g = h.dlgDoModal(600, 600, b)) {
        if (f.length) {
            eduLib.edtInputAdd(h, g, {
                type: "select",
                options: f,
                title: "연동할 악보 위젯",
                comment: "(연동하여 제어할 악보 위젯을 선택)",
                key: "idNote",
                value: a
            })
        } else {
            eduLib.edtInputAdd(h, g, {
                type: "message",
                value: '연동할 악보 위젯 : 페이지에 "악보 위젯"이 존재해야 선택할 수 있습니다.'
            })
        }
    }
};
xa.edtOnRemapObjectID = function(d, b, c) {
    if (b && b.properties && b.properties.attrs && b.properties.attrs.cfg) {
        var a = b.properties.attrs.cfg;
        if (a.idNote) {
            if (c[a.idNote]) {
                a.idNote = c[a.idNote]
            } else {
                if (!d.getScreenData().objects[a.idNote]) {
                    a.idNote = ""
                }
            }
        }
    }
};
xa.edtOnBuildEvent = function(c, d, a, b) {
    b.wgtEvent = {
        value: "wgtEvent",
        title: apn.P.eventTitle.wgtEvent,
        param: {}
    };
    b.wgtEvent.param.sync_on = "음표싱크 표시";
    b.wgtEvent.param.sync_off = "음표싱크 숨김";
    b.wgtEvent.param.lyrics_on = "가사 표시";
    b.wgtEvent.param.lyrics_off = "가사 숨김"
};
sggWgtLsnSongPlayer = xa;
var xa = {};
xa.styleMap = {
    title: true,
    visibility: true,
    font: true
};
xa.exeItrNoResize = true;
xa.editor = {
    iconThumb: "DB/ms/imgs/wgts/thumbs/music.png"
};
xa.editor.states = {
    showLY: "가사표시",
    hideLY: "가사숨김",
    showKR: "국악기호표시",
    hideKR: "국악기호숨김"
};
xa.properties = {
    attrs: {
        cfg: {
            note: "",
            notePlay: "",
            idAudio: "",
            exeNoteIndex: "",
            exePlayIndex: "",
            noteStyle: {
                mode: 1,
                lineH: 17,
                lineWgt: 2,
                lyH: "100%",
                countDown: "No",
                lineMarginLyT: 0,
                lineMarginLyB: 0,
                hideLineBG: "No",
                startC: "No"
            },
            beatLen: "0",
            playLine: "1",
            playLayer: "1",
            offTrace: "No",
            fixTopLine: 0,
            fontExChars: ""
        },
        apxFont: "KoPub Batang"
    }
};
xa.properties.state = "showLY";
xa.LN = {
    measure: {
        en: "마디"
    },
    round: {
        en: "부"
    },
    chapter: {
        en: "절"
    }
};
xa.createAsCanvasObject = function(b, a, c, d, e) {
    return apn.IWidget.createCanvasObject(b, this, "apn.CMusicObj", bx.CCanvasWnd.SHAPE_RECT, a, c, d, e)
};
xa.exeCreateTag = function(e, b, h, d, c, f) {
    msWgtNote._instIndex = msWgtNote._instIndex || 1;
    var a = Math.max(0, (apn.widgets.utils.toScreenW(h.init.shape.w, d) + apn.IWidget.exeCalcLW(1, e.project, h, d))) + "px";
    var i = Math.max(0, (apn.widgets.utils.toScreenH(h.init.shape.h, c) + apn.IWidget.exeCalcLW(1, e.project, h, c))) + "px";
    var g = new apn.CMusicPlayer(null, "msWgtNote" + msWgtNote._instIndex++, new bx.CPosition({
        type: "overlap",
        noclip: true,
        coord: {
            left: "0px",
            top: "0px"
        },
        width: a,
        height: i
    }), new bx.CMode(), undefined, {
        CMusicPlayer: {
            pathImage: b.localMediaURL(f, "music/")
        }
    });
    g.onResize = function(m, l, k, n) {
        if (n) {
            bx.CCanvasWnd.prototype.onResize.call(this, m, l, k, n)
        }
    };
    g.create();
    g.init(true);
    var j = g.tag;
    j.apnCur = {};
    j._msPlayer = g;
    return j
};
xa.exeRenderTag = function(f, e, b, a, d, c) {
    apn.IWidget.exeRenderPosition(e, b, a, f.project, d, c);
    b._msPlayer.zoom(1 / d, 1 / c);
    return b
};
xa.exeOnLoad = function(n, b) {
    function l(p, q) {
        n.fireEvent("musicNote", q.noteIndex + "_" + q.measureIndex + "_" + q.track + (p ? "_on" : "_off"), b, false, true)
    }

    function j(p, q) {
        n.fireEvent("musicBeat", q.beatIndex + "_" + q.chapIndex + (p ? "_on" : "_off"), b, false, true)
    }
    var o = n.wgtTag(b);
    var e = n.wgtGetProperty(b, "cfg");
    var i, m, h;
    try {
        if (e.note) {
            i = JSON.parse(e.note)
        }
    } catch (f) {}
    if (!i) {
        if (bx.HCL.DV.getLanguage() == "ko") {
            n.log(b, '"악보 데이터"가 지정되어 있지 않습니다.')
        } else {
            n.log(b, '"Music note data" is not set.')
        }
        h = true
    }
    if (e.notePlay) {
        m = JSON.parse(e.notePlay)
    }
    if (h) {
        return
    }
    o.ctx = {};
    o.style.overflow = "visible";
    if (e.idAudio && n.wgtTag(e.idAudio)) {
        o.ctx.uTagAudio = n.wgtTag(e.idAudio)
    }
    o._msPlayer.onErrorForEditor = function(p) {
        n.log(b, p)
    };
    if (m) {
        o._msPlayer.setPlayMode(true)
    } else {
        o._msPlayer.setPlayMode(false)
    }
    if (o._msPlayer.setData(i)) {
        function a(p) {
            p += 1;
            if (p == 0 || p > 6) {
                o.ctx.uTagCount.style.display = "none"
            } else {
                if (p <= 6) {
                    o.ctx.uTagCount.style.display = "block";
                    o.ctx.uTagCount.src = n.localMediaURL(b, "countdown/" + p + ".png");
                    n.tagTransform(o.ctx.uTagCount, {
                        timing: "ease-in",
                        duration: Math.max(80, o._msPlayer.playBeat - 30),
                        style: {
                            resize: {
                                from: 0.75,
                                to: 1
                            },
                            opacity: {
                                from: 0.6,
                                to: 1
                            }
                        }
                    })
                }
            }
        }
        var d = this;

        function c(q, p) {
            var r = d._getLnsGeo(n, b);
            if (p) {
                n.wgtSetProperty(b, "lineSetPosition", r)
            }
            n.fireEvent("musicLine", (q + 1) + (p ? "_show" : "_hide"), b, false, true)
        }

        function k(p) {
            n.fireEvent("musicVerse", p + "_on", b, false, true)
        }
        var d = this;

        function g() {
            if (m) {
                o._msCtl = new apn.CMusicCtl();
                o._msCtl.setPlayer(o._msPlayer, m);
                if (o.ctx.uTagAudio) {
                    o._msCtl.setAudio(o.ctx.uTagAudio, n, b)
                }
                if (e.noteStyle.countDown == "Yes") {
                    var p = 156 * 0.6,
                        q = 196 * 0.6;
                    o.ctx.uTagCount = o.$TAG("IMG", {
                        style: "display:none;position:absolute;width:" + p + "px;height:" + q + "px;"
                    });
                    o.ctx.uTagCount.style.left = Math.max(-parseInt(o.style.left), o._msPlayer.getLineHeight() * 5 * (1 / n.getZoomX())) + "px";
                    o.ctx.uTagCount.style.top = Math.max(-parseInt(o.style.top), -q * (1 / n.getZoomY())) + "px";
                    o._msCtl.control("onCountdown", a)
                }
                o._msPlayer.playControl("autoShow", "1");
                if (e.offTrace == "Yes") {
                    o._msCtl.control("traceNote", false)
                }
            }
            setTimeout(function() {
                n.wgtSetProperty(b, "msWgtNote_notifyController", true)
            }, 0);
            o._msPlayer.playControl("onPlayNote", l);
            o._msPlayer.playControl("onPlayBeat", {
                on: j
            });
            o._msPlayer.playControl("onShowLineSet", c);
            o._msPlayer.playControl("onPlayVerse", k);
            o._msPlayer.draw()
        }
        this.I_edtSetupNote.call(this, o._msPlayer, e, n.project, n.screen.objects[b].create.data.styles);
        o._msPlayer.load(null, null, g)
    }
};
xa.exeOnScreenRefresh = function(b, c) {
    var a = b.wgtTag(c);
    if (a._msPlayer) {
        a._msPlayer.draw()
    }
};
xa._getLnsGeo = function(b, d) {
    var a = b.wgtTag(d);
    var e = a._msPlayer.getLineSetGeo();
    for (var c = 0; c < e.length; c++) {
        e[c].x += b.screen.objects[d].init.position.x;
        e[c].y += b.screen.objects[d].init.position.y
    }
    return e
};
xa.exeSetState = function(c, a, e, b, d) {
    if (e == b) {
        return
    }
    if (a._msPlayer) {
        if (e == "hideLY") {
            a._msPlayer.playControl("hideLyrics", true)
        } else {
            if (e == "showLY") {
                a._msPlayer.playControl("hideLyrics", false)
            } else {
                if (e == "hideKR") {
                    a._msPlayer.playControl("hideKrSymbol", true)
                } else {
                    if (e == "showKR") {
                        a._msPlayer.playControl("hideKrSymbol", false)
                    }
                }
            }
        }
    }
};
xa.I_getController = function(b, c) {
    var a = b.wgtTag(c);
    if (a && a.ctx && a._msCtl) {
        return a._msCtl
    }
    return null
};
xa.I_getPlayer = function(b, c) {
    var a = b.wgtTag(c);
    if (a && a.ctx && a._msPlayer) {
        return a._msPlayer
    }
    return null
};
xa.I_edtSetupNote = function(d, a, c, e) {
    if (e) {
        var b = apn.Project.resolveStyle(c, "font", e.font);
        d.setLyricFont(b)
    }
    if (!(a.beatLen == "0" || a.beatLen == "")) {
        d.playControl("playBeat", a.beatLen)
    }
    if (d.playData) {
        d.playControl("playLine", a.playLine);
        d.playControl("playLayer", a.playLayer)
    }
    if (bx.$checkNaN(parseInt(a.fixTopLine))) {
        d.playControl("fixLineTopOnPlay", bx.$checkNaN(parseInt(a.fixTopLine)))
    }
    d.setLineHeight(parseInt(a.noteStyle.lineH));
    d.setLineWeight(parseInt(a.noteStyle.lineWgt));
    d.setLyricHeight(a.lyricsFontSize || 47);
    d.addLineMargin(a.noteStyle.lineMarginLyT);
    d.addLineMargin(a.noteStyle.lineMarginLyB, true);
    d.hideLineBG(a.noteStyle.hideLineBG == "Yes");
    if (a.noteStyle.startC && parseInt(a.noteStyle.startC)) {
        d.showStartC(parseInt(a.noteStyle.startC) - 1)
    } else {
        d.showStartC()
    }
    if (a.fontExChars) {
        d.setFontException(a.fontExChars, {
            face: "KoPub Batang",
            bold: true
        })
    }
    if (a.noteStyle.mode == 3) {
        d.setMode(apn.CMusicPlayer.MODE_LYRICS)
    } else {
        d.setMode(apn.CMusicPlayer.MODE_NOTE)
    }
    if (a.noteStyle.mode == 2) {
        d.hideLyrics(true)
    } else {
        d.hideLyrics(false)
    }
    if (a.noteStyle.mode == 9) {
        d.hideAll(true)
    }
    if (a.noteStyle.mode == 4) {
        d.applySolfege(true);
        d.setData()
    } else {
        if (d.applySolfege(false)) {
            d.setData()
        }
    }
};
xa.edtOnConfig = function(m, f) {
    var g = m.wgtGetProperty(f, "cfg");
    g.lyricsFontSize = g.lyricsFontSize || 47;
    g.noteStyle.startC = g.noteStyle.startC || "No";
    g.offTrace = g.offTrace || "No";
    var o;
    var j = m.getScreenData();
    var k = [{
        title: "",
        value: ""
    }];
    for (var e in j.objects) {
        if (j.objects[e].create && j.objects[e].create.data && j.objects[e].create.data.properties && j.objects[e].create.data.properties.attrs && j.objects[e].create.data.properties.attrs.apxMediaControl) {
            k.push({
                value: e,
                title: m.itrGetObjectTitle(e)
            })
        }
    }
    var d, l;
    var c = apn.Project.getExeModule(m.getData());
    if (c.IStub_property) {
        d = c.IStub_property(m.getData(), "noteList");
        l = c.IStub_property(m.getData(), "playList");
        l.unshift({
            title: "",
            value: ""
        })
    }

    function b() {
        eduLib.edtInputApplyAll(m, o.tagMain);
        eduLib.edtInputApplyAll(m, o.tagSub1);
        msWgtNote.edtApply(m, f, g)
    }

    function n() {
        if (this.id == "tagMain") {
            o.tagMain.style.display = "block";
            o.tagSub1.style.display = "none";
            o.tagTab.$$("tagMain").style.borderStyle = "solid solid none solid";
            o.tagTab.$$("tagSub1").style.borderStyle = "none none solid none"
        } else {
            if (this.id == "tagSub1") {
                o.tagMain.style.display = "none";
                o.tagSub1.style.display = "block";
                o.tagTab.$$("tagMain").style.borderStyle = "none none solid none";
                o.tagTab.$$("tagSub1").style.borderStyle = "solid solid none solid"
            }
        }
    }

    function a() {
        if (this.value == "3" || this.value == "9") {
            eduLib.edtInputShow(m, o.tagMain, "lineH", false);
            eduLib.edtInputShow(m, o.tagMain, "lineWt", false);
            eduLib.edtInputShow(m, o.tagSub1, "grpSub1_2", false);
            if (this.value == "3") {
                eduLib.edtInputShow(m, o.tagSub1, "grpSub1_1", false);
                eduLib.edtInputShow(m, o.tagSub1, "grpSub1_2_a", true);
                eduLib.edtInputShow(m, o.tagMain, "lyH", true);
                eduLib.edtInputShow(m, o.tagSub1, "lyH", true)
            } else {
                if (this.value == "9") {
                    eduLib.edtInputShow(m, o.tagSub1, "grpSub1_2_a", false);
                    eduLib.edtInputShow(m, o.tagMain, "lyH", false);
                    eduLib.edtInputShow(m, o.tagSub1, "lyH", false)
                }
            }
        } else {
            eduLib.edtInputShow(m, o.tagMain, "lineH", true);
            eduLib.edtInputShow(m, o.tagMain, "lineWt", true);
            eduLib.edtInputShow(m, o.tagSub1, "grpSub1_1", true);
            eduLib.edtInputShow(m, o.tagSub1, "grpSub1_2", true);
            eduLib.edtInputShow(m, o.tagSub1, "grpSub1_2_a", true);
            if (this.value == "2") {
                eduLib.edtInputShow(m, o.tagMain, "lyH", false);
                eduLib.edtInputShow(m, o.tagSub1, "lyH", false)
            } else {
                eduLib.edtInputShow(m, o.tagMain, "lyH", true);
                eduLib.edtInputShow(m, o.tagSub1, "lyH", true)
            }
        }
    }
    if (o = m.dlgDoModal(940, 700, b)) {
        var h = 40;
        o.tagTab = o.$TAG("DIV", {
            style: "position:relative;width:100%;height:26px;padding-bottom:" + (h - 26) + "px;"
        });
        o.tagTab.innerHTML = '<span id="tagMain" style="padding:2px 12px 2px 12px;border:solid 1px #a8a8a8;color:#6f6f6f;">기본 설정</span><span id="tagSub1" style="padding:2px 12px 2px 12px;border:solid 1px #a8a8a8;color:#6f6f6f;">부가 설정</span><span id="tagBlank" style="border-bottom:solid 1px #a8a8a8;width:500px;">&nbsp;</span>';
        o.tagTab.$$("tagMain").onclick = o.tagTab.$$("tagSub1").onclick = n;
        o.tagMain = o.$TAG("DIV", {
            style: "width:100%;height:" + (o.contentHeight - h) + "px"
        });
        o.tagSub1 = o.$TAG("DIV", {
            style: "width:100%;height:" + (o.contentHeight - h) + "px"
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            type: "title",
            title: "악보 표시 정보"
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            type: "select",
            title: "동작 방식",
            options: [{
                title: "악보+가사",
                value: 1
            }, {
                title: "악보만",
                value: 2
            }, {
                title: "가사만",
                value: 3
            }, {
                title: "악보+계명",
                value: 4
            }, {
                title: "숨김",
                value: 9
            }],
            key: "mode",
            value: g.noteStyle,
            onchange: a
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            id: "lineH",
            type: "select",
            title: "오선 한칸 높이[px]",
            options: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
            comment: "(악보 크기의 기준값으로 사용됨)",
            key: "lineH",
            value: g.noteStyle
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            id: "lineWt",
            type: "select",
            title: "오선 줄 두께[px]",
            options: [1, 2, 3],
            key: "lineWgt",
            value: g.noteStyle
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            id: "lyH",
            type: "number",
            title: "가사 크기[px]",
            key: "lyricsFontSize",
            value: g
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            type: "space"
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            type: "title",
            title: "연주 정보"
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            type: "select",
            title: "연결 미디어 위젯",
            options: k,
            comment: "(음악을 출력할 미디어 위젯 선택)",
            key: "idAudio",
            value: g
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            type: "select",
            title: "비트 신호 길이",
            options: [{
                title: "기본 박자",
                value: "0"
            }, {
                title: "4분음표",
                value: "4"
            }, {
                title: "8분음표",
                value: "8"
            }, {
                title: "16분음표",
                value: "16"
            }],
            key: "beatLen",
            value: g
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            type: "select",
            title: "카운트다운 표시",
            options: [{
                title: "예",
                value: "Yes"
            }, {
                title: "아니오",
                value: "No"
            }],
            key: "countDown",
            value: g.noteStyle
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            type: "space"
        });
        eduLib.edtInputAdd(m, o.tagMain, {
            type: "title",
            title: "악보/연주 데이터"
        });
        if (d) {
            eduLib.edtInputAdd(m, o.tagMain, {
                type: "select",
                title: "악보 파일 (m)",
                comment: "(실행기에 저장된 악보 데이터를 선택합니다.)",
                options: d,
                key: "exeNoteIndex",
                value: g
            })
        } else {
            eduLib.edtInputAdd(m, o.tagMain, {
                type: "text",
                multiline: true,
                height: "200px",
                title: "악보 데이터 (m)",
                comment: "(악보 데이터 문자열)",
                key: "note",
                value: g
            })
        }
        if (l) {
            eduLib.edtInputAdd(m, o.tagMain, {
                type: "select",
                title: "연주 파일",
                comment: "(실행기에 저장된 연주 데이터를 선택합니다.)",
                options: l,
                key: "exePlayIndex",
                value: g
            })
        } else {
            eduLib.edtInputAdd(m, o.tagMain, {
                type: "text",
                multiline: true,
                height: "200px",
                title: "연주 데이터",
                comment: "(악보 연주 데이터 문자열)",
                key: "notePlay",
                value: g
            })
        }
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_1",
            type: "title",
            title: "연주 정보"
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_1",
            type: "text",
            title: "연주 부",
            comment: "(연주 상태를 표시할 부(복수 지정 가능), '1', '1;2;4', '99'=전부)",
            key: "playLayer",
            value: g
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_1",
            type: "text",
            title: "연주 줄",
            comment: "(연주 상태를 표시할 줄(복수 지정 가능), '1', '1;2;4', '99'=전부)",
            key: "playLine",
            value: g
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_1",
            type: "select",
            title: "음표 동기화 색상 숨김",
            options: [{
                title: "예",
                value: "Yes"
            }, {
                title: "아니오",
                value: "No"
            }],
            key: "offTrace",
            value: g
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_2_a",
            type: "space"
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_2_a",
            type: "title",
            title: "악보 배치 정보"
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_2",
            type: "number",
            title: "줄간 추가 간격 - 가사 상단[px]",
            key: "lineMarginLyT",
            value: g.noteStyle
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_2_a",
            type: "number",
            title: "줄간 추가 간격 - 가사 하단[px]",
            key: "lineMarginLyB",
            value: g.noteStyle
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_2",
            type: "number",
            title: "최상위 1번선 위치 고정[px]",
            comment: "(값 > 0인 경우 적용됨)",
            key: "fixTopLine",
            value: g
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_2",
            type: "space"
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_2",
            type: "title",
            title: "부가 표시 기능"
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_2",
            type: "select",
            title: "시작도 표시",
            comment: "(시작도를 표시할 경우, 표시할 줄을 선택함)",
            options: [{
                title: "아니오",
                value: "No"
            }, "1", "2", "3", "4", "5"],
            key: "startC",
            value: g.noteStyle
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "grpSub1_2",
            type: "select",
            title: "오선 배경색 숨김",
            comment: "(악보에 지정된 오선지의 배경색을 표시하지 않음)",
            options: [{
                title: "예",
                value: "Yes"
            }, {
                title: "아니오",
                value: "No"
            }],
            key: "hideLineBG",
            value: g.noteStyle
        });
        eduLib.edtInputAdd(m, o.tagSub1, {
            id: "lyH",
            type: "text",
            title: "글꼴 예외 적용 글자",
            comment: "(예외 글꼴로 표시함. ','로 구분하여 입력)",
            value: g,
            key: "fontExChars"
        });
        o.tagTab.$$("tagMain").onclick();
        o.tagTab.$$("tagBlank").style.width = (o.clientWidth - o.tagTab.$$("tagBlank").offsetLeft) + "px"
    }
};
xa.edtApply = function(i, d, e) {
    var c, j;
    var a = apn.Project.getExeModule(i.getData());
    if (a.IStub_property) {
        c = a.IStub_property(i.getData(), "noteList");
        j = a.IStub_property(i.getData(), "playList")
    }
    var h;
    if (c) {
        var g = a.IStub_property(i.getData(), "note", e.exeNoteIndex);
        if (g) {
            e.note = g
        }
    }
    if (j) {
        if (e.exePlayIndex !== "") {
            var b = a.IStub_property(i.getData(), "play", e.exePlayIndex);
            if (b) {
                e.notePlay = b
            }
        } else {
            e.notePlay = ""
        }
    }
    if (e.note) {
        try {
            h = JSON.parse(e.note)
        } catch (f) {
            console.error(f)
        }
        if (!h) {
            e.note = ""
        }
    }
    if (e.notePlay) {
        try {
            h = JSON.parse(e.notePlay)
        } catch (f) {}
        if (!h) {
            e.notePlay = ""
        }
    }
    i.wgtSetProperty(d, "cfg", e);
    i.getObjectByID(d).refresh();
    i.invalidateRect(i.getObjectByID(d));
    i.draw()
};
xa.edtOnBuildEvent = function(j, p, d, w, g) {
    function f(A, i, z) {
        return (parseInt(A) + 1) + "/" + (parseInt(i) + 1) + apn.CExe.GL(msWgtNote.LN, "measure") + (parseInt(z) > 1 ? " (" + parseInt(z) + apn.CExe.GL(msWgtNote.LN, "round") + ")" : "")
    }

    function o(i, z) {
        return (parseInt(i) + 1) + "/" + (parseInt(z) + 1) + apn.CExe.GL(msWgtNote.LN, "chapter")
    }
    var b, h, c, x, n;
    if (window.asui && asui.EDTIF && asui.EDTIF.scrExec) {
        n = asui.EDTIF.scrExec("get_editor")
    }
    var a;
    if (g) {
        var y = g.wgtTag(p);
        a = y._msPlayer
    } else {
        if (n && n.getObjectByID(p)) {
            a = n.getObjectByID(p).getPlayer()
        }
    }
    var e = j.pages[d].objects[p].create.data.properties.attrs.cfg;
    var m = Math.max(bx.$checkNaN(parseInt(j.pages[d].objects[p].create.data.properties.attrs.cfg.playLayer)) - 1, 0);
    if (m == 98) {
        m = 0
    }
    if (a) {
        var l = a.getSequence();
        for (var r = 0; r < l.length; r++) {
            if (l[r].layerIndex == m) {
                b = b || {
                    value: "musicNote",
                    title: apn.P.eventTitle.musicNote,
                    param: {}
                };
                b.param[l[r].noteIndex + "_" + l[r].measureIndex + "_" + l[r].track + "_on"] = f(l[r].noteIndex, l[r].measureIndex, l[r].track)
            }
        }
        for (r = 0; r < l.length; r++) {
            if (l[r].layerIndex == m) {
                b.param[l[r].noteIndex + "_" + l[r].measureIndex + "_" + l[r].track + "_off"] = f(l[r].noteIndex, l[r].measureIndex, l[r].track) + " Off"
            }
        }
        var q = a.getBeatSequence();
        if (q.length) {
            h = {
                value: "musicBeat",
                title: apn.P.eventTitle.musicBeat,
                param: {}
            };
            for (r = 0; r < q.length; r++) {
                h.param[q[r].beatIndex + "_" + q[r].chapIndex + "_on"] = o(q[r].beatIndex, q[r].chapIndex)
            }
            for (r = 0; r < q.length; r++) {
                h.param[q[r].beatIndex + "_" + q[r].chapIndex + "_off"] = o(q[r].beatIndex, q[r].chapIndex) + " Off"
            }
        }
        var k = a.getData();
        if (k && k.LineSets && k.LineSets.length) {
            c = {
                value: "musicLine",
                title: apn.P.eventTitle.musicLine,
                param: {}
            };
            for (r = 0; r < k.LineSets.length; r++) {
                c.param[(r + 1) + "_show"] = (r + 1) + " Show"
            }
            for (r = 0; r < k.LineSets.length; r++) {
                c.param[(r + 1) + "_hide"] = (r + 1) + " Hide"
            }
        }
        var s = a.getVerseCount();
        if (s > 1) {
            x = {
                value: "musicVerse",
                title: apn.P.eventTitle.musicVerse,
                param: {}
            };
            for (r = 0; r < s; r++) {
                x.param[(r + 1) + "_on"] = (r + 1)
            }
        }
    }
    var t = apn.Project.findITRs(j, d, p);
    if (t && t.length) {
        var v, u;
        for (r = 0; r < t.length; r++) {
            v = apn.P.resolveCompositeSysEV(t[r].event);
            if (v && v.param && v.ev == "musicNote" && (!b || !b.param[v.param])) {
                b = b || {
                    value: "musicNote",
                    title: apn.P.eventTitle.musicNote,
                    param: {}
                };
                u = v.param.split("_");
                if (u.length == 4) {
                    b.param[v.param] = f(u[0], u[1], u[2]) + (u[3] == "off" ? " Off " : "")
                }
            } else {
                if (v && v.param && v.ev == "musicBeat" && (!h || !h.param[v.param])) {
                    h = h || {
                        value: "musicBeat",
                        title: apn.P.eventTitle.musicBeat,
                        param: {}
                    };
                    u = v.param.split("_");
                    if (u.length == 3) {
                        h.param[v.param] = o(u[0], u[1]) + (u[2] == "off" ? " Off " : "")
                    }
                } else {
                    if (v && v.param && v.ev == "musicLine" && (!c || !c.param[v.param])) {
                        c = c || {
                            value: "musicLine",
                            title: apn.P.eventTitle.musicLine,
                            param: {}
                        };
                        u = v.param.split("_");
                        if (u.length == 2) {
                            c.param[v.param] = u[0] + (u[1] == "hide" ? " Hide " : " Show")
                        }
                    } else {
                        if (v && v.param && v.ev == "musicVerse" && (!x || !x.param[v.param])) {
                            x = x || {
                                value: "musicVerse",
                                title: apn.P.eventTitle.musicVerse,
                                param: {}
                            };
                            u = v.param.split("_");
                            if (u.length == 2) {
                                x.param[v.param] = u[0]
                            }
                        }
                    }
                }
            }
        }
    }
    if (b) {
        w.musicNote = b
    }
    if (h) {
        w.musicBeat = h
    }
    if (c) {
        w.musicLine = c
    }
    if (x) {
        w.musicVerse = x
    }
};
xa.edtOnExeDataChange = function(c, b) {
    var a = c.wgtGetProperty(b, "cfg");
    xa.edtApply(c, b, a)
};
xa.edtOnRemapObjectID = function(d, b, c) {
    if (b && b.properties && b.properties.attrs && b.properties.attrs.cfg) {
        var a = b.properties.attrs.cfg;
        if (a.idAudio) {
            if (c[a.idAudio]) {
                a.idAudio = c[a.idAudio]
            } else {
                if (!d.getScreenData().objects[a.idAudio]) {
                    a.idAudio = ""
                }
            }
        }
    }
};
msWgtNote = xa;
var xa = {
    APX_NO_POINTER_EV: true
};
xa.styleMap = {
    title: true
};
xa.properties = {};
xa.properties.state = "idle";
xa.properties.attrs = {
    cfg: {
        snd: [{
            title: "",
            file: {
                mediaID: undefined
            }
        }],
        cut: "N"
    }
};
xa.createAsCanvasObject = function(b, a, c, d, e) {
    return apn.IWidget.createCanvasObject(b, this, "apn.CImage", bx.CCanvasWnd.SHAPE_RECT, a, c, d, e, undefined, apn.CEditorS.NO_RESIZE)
};
xa.exeCreateTag = function(f, e, b, d, c) {
    var a = document.body.$TAG("DIV", {
        style: "position:absolute;overflow:hidden;diplay:none;"
    });
    a.apnCur = {};
    return a
};
xa.exeRenderTag = function(f, e, b, a, d, c) {
    return b
};
xa.exeSetState = function(d, a, e, c) {
    var f = d.wgtId(a);
    var b = d.wgtGetProperty(f, "cfg");
    if (e != "idle" && b.snd[bx.$checkNaN(parseInt(e))] && b.snd[bx.$checkNaN(parseInt(e))].file.mediaID) {
        d.playAudio(b.cut == "Y" ? f : undefined, b.snd[bx.$checkNaN(parseInt(e))].file.mediaID)
    }
};
xa.edtOnConfig = function(e, c) {
    var a = e.wgtGetProperty(c, "cfg");
    a.cut = a.cut || "N";
    var d;

    function b() {
        eduLib.edtInputApplyAll(e, d);
        e.wgtSetProperty(c, "cfg", a)
    }
    if (d = e.dlgDoModal(600, 600, b)) {
        eduLib.edtInputAdd(e, d, {
            type: "table",
            title: "사운드 파일들 (m)",
            value: a.snd,
            options: {
                th: ["제목", "사운드 파일"],
                add: true,
                remove: true
            },
            td: [{
                type: "text",
                key: "title"
            }, {
                type: "audio",
                key: "file"
            }]
        });
        eduLib.edtInputAdd(e, d, {
            type: "space"
        });
        eduLib.edtInputAdd(e, d, {
            type: "title",
            title: "선택 사항"
        });
        eduLib.edtInputAdd(e, d, {
            type: "select",
            title: "단일 채널 방식",
            options: [{
                title: "아니오",
                value: "N"
            }, {
                title: "예",
                value: "Y"
            }],
            value: a,
            key: "cut"
        })
    }
};
xa.edtOnBuildState = function(c, f, a, b) {
    b.idle = "Idle";
    var e = c.pages[a].objects[f].create.data;
    if (e && e.properties && e.properties.attrs && e.properties.attrs.cfg) {
        e = e.properties.attrs.cfg;
        for (var d = 0; d < e.snd.length; d++) {
            if (e.snd[d].file.mediaID) {
                b[d] = "Play " + (e.snd[d].title || ((d + 1) + "번"))
            }
        }
    }
};
msWgtSound = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.image2"]);
xa.exeFireStateEvent = true;
xa.styleMap = {
    title: true,
    visibility: true,
    strokeStyle: true,
    lineWidth: true,
    lineDash: true,
    font: true,
    fontSize: true,
    fontStyle: true,
    fontItalic: true,
    fontBold: true,
    textMultiLine: true,
    fontUnderlined: true,
    text: true,
    textAlign: true,
    textValign: true,
    textPadding: true,
    fontStrokeStyle: true,
    fontStrokeWidth: true,
    borderRadiusTopLeft: true,
    borderRadiusTopRight: true,
    borderRadiusBottomLeft: true,
    borderRadiusBottomRight: true,
    alpha: true,
    angle: true,
    mediaID: true,
    dragX: true,
    dragY: true,
    dragInParent: true,
    dragContainParent: true
};
xa.editor = {};
xa.editor.iconThumb = "DB/ux/imgs/wgts/thumbs/imageButton.png";
xa.properties.state = "normal";
xa.properties.attrs = xa.properties.attrs || {};
xa.properties.attrs.selectType = "";
xa.properties.attrs.autoKeepSize = false;
xa.properties.attrs.cfg = {
    images: {
        normal: {
            mediaID: undefined
        },
        down: {
            mediaID: undefined
        },
        hover: {
            mediaID: undefined
        },
        disabled: {
            mediaID: undefined
        },
        disabledDown: {
            mediaID: undefined
        },
        disabledHover: {
            mediaID: undefined
        }
    },
    clr: {
        disabled: null,
        down: null,
        hover: null
    }
};
xa.onEdit = apn.widgets["apn.wgt.rect"].onEdit;
xa.exeOnLoad = function(c, g) {
    var h = this;
    var a = c.wgtTag(g);
    var b = c.wgtGetProperty(g, "cfg");
    var d = c.wgtGetProperty(g, "selectType");
    var f = false;
    if (!b.images.disabledDown) {
        b.images.disabledDown = {
            mediaID: undefined
        }
    }
    if (!b.images.disabledHover) {
        b.images.disabledHover = {
            mediaID: undefined
        }
    }
    if (!b.clr) {
        b.clr = {
            disabled: null,
            down: null,
            hover: null
        }
    }
    if (this.I_exeOnLoad_check && !this.I_exeOnLoad_check(c, g)) {
        return
    }
    a._images = bx.$cloneObject({}, b.images);
    a._down = false;
    if (d == "tab" || d == "toggle") {
        if (d == "tab") {
            a._images.down = a._images.disabled;
            if (!a._images.hover.mediaID) {
                a._images.hover = a._images.disabled
            }
        }
        a.apxOnEvent = function(i, j, l, k) {
            if (j == "click") {
                if (d == "toggle") {
                    if (i.wgtGetProperty(g, "apxState") == "normal") {
                        i.wgtSetProperty(g, "apxState", "disabled")
                    } else {
                        i.wgtSetProperty(g, "apxState", "normal")
                    }
                } else {
                    if (i.wgtGetProperty(g, "apxState") == "normal") {
                        i.wgtSetProperty(g, "apxState", "disabled")
                    }
                }
                return true
            }
        }
    }
    if (a._images.down.mediaID || (b.clr && b.clr.down) || a._images.disabledDown.mediaID || (b.clr && b.clr.disabledDown)) {
        a.btnOnDown = function(i) {
            var j = "down";
            if (d == "toggle") {
                if (c.wgtGetProperty(g, "apxState") == "disabled") {
                    j = "disabledDown"
                }
            } else {
                if (c.wgtGetProperty(g, "apxState") == "disabled") {
                    return
                }
            }
            a._down = true;
            if (a._images[j].mediaID) {
                h.exeAssetLoad(c, i, a._images[j].mediaID)
            }
            uxWgtBtnImage.setTextColor(c, c.wgtId(a), j)
        };
        f = true
    }
    if (a._images.normal.mediaID || a._images.disabled.mediaID || (b.clr && b.clr.disabled)) {
        a.btnOnState = function(i) {
            var j = c.wgtGetProperty(g, "apxState");
            if (!a._images[j]) {
                j = "normal"
            }
            if (a._images[j].mediaID) {
                h.exeAssetLoad(c, i, a._images[j].mediaID)
            }
            uxWgtBtnImage.setTextColor(c, c.wgtId(a), j)
        };
        f = true
    }
    if (a._images.hover.mediaID || (b.clr && b.clr.hover) || a._images.disabledHover.mediaID || (b.clr && b.clr.disabledHover)) {
        a.onmousemove = function(i) {
            if (a._down) {
                return
            }
            var j = "hover";
            if (d == "toggle") {
                if (c.wgtGetProperty(g, "apxState") == "disabled") {
                    j = "disabledHover"
                }
            } else {
                if (c.wgtGetProperty(g, "apxState") == "disabled") {
                    return
                }
            }
            if (a._images[j].mediaID) {
                h.exeAssetLoad(c, a, a._images[j].mediaID)
            }
            uxWgtBtnImage.setTextColor(c, c.wgtId(a), j)
        };
        a.onmouseout = function(i) {
            if (a._down) {
                var j = "down"
            } else {
                var j = c.wgtGetProperty(g, "apxState")
            }
            if (a._images[j].mediaID) {
                h.exeAssetLoad(c, a, a._images[j].mediaID)
            }
            uxWgtBtnImage.setTextColor(c, c.wgtId(a), j)
        }
    }
    if (f) {
        function e(i, j) {
            if (j == bx.CGesture.POINTER_START) {
                if (i.btnOnDown) {
                    i.btnOnDown(i)
                }
            } else {
                if (j == bx.CGesture.POINTER_END) {
                    i._down = false;
                    if (i.btnOnState) {
                        i.btnOnState(i)
                    }
                }
            }
        }
        new bx.CGesture(a, e, {
            noDelayedEvent: true
        })
    }
    if (a.btnOnState) {
        a.btnOnState(a)
    }
    if (this.I_exeOnLoad_post) {
        this.I_exeOnLoad_post(c, g)
    }
};
xa.exeSetState = function(d, b, f, c) {
    if (c == f) {
        return
    }
    var e = d.wgtGetProperty(d.wgtId(b), "selectType");
    if (e == "toggle") {} else {
        setTimeout(function() {
            if (f == "normal") {
                d.tagBlockPointerEvent(b, false)
            } else {
                d.tagBlockPointerEvent(b, true)
            }
        }, 0)
    }
    if (b.btnOnState) {
        b.btnOnState(b)
    }
    var g = d.wgtId(b);
    if (d.wgtGetProperty(g, "uxToggleGroup")) {
        if (f == "disabled") {
            function a(h) {
                if (d.wgtGetProperty(h, "apxState") == "on") {
                    d.wgtSetProperty(h, "apxState", "off")
                } else {
                    if (d.wgtGetProperty(h, "apxState") == "disabled") {
                        d.wgtSetProperty(h, "apxState", "normal")
                    } else {
                        if (d.stateGetActive(h, true) == "2") {
                            d.stateLayerActivate(h, "1");
                            d.stateSetActive(h, "1")
                        }
                    }
                }
            }
            d.utlIterateInGroup(g, "uxToggleGroup", a)
        }
    }
};
xa.exeOnScreenRefresh = apn.widgets["apn.wgt.rect"].exeOnScreenRefresh;
xa.setTextColor = function(c, e, d) {
    var a = c.wgtTag(e);
    var b = c.wgtGetProperty(e, "cfg");
    if (a.textTag && b.clr) {
        if (d == "disabled" && b.clr.disabled) {
            a.textTag.style.color = b.clr[d]
        } else {
            if (d == "hover" && b.clr.hover) {
                a.textTag.style.color = b.clr[d]
            } else {
                if (d == "down" && b.clr.down) {
                    a.textTag.style.color = b.clr[d]
                } else {
                    if (d == "normal") {
                        a.textTag.style.color = "inherit"
                    }
                }
            }
        }
    }
};
xa.createAsCanvasObject = function(b, a, c, d, e) {
    return apn.IWidget.createCanvasObject(b, this, "apn.CImage", bx.CCanvasWnd.SHAPE_RECT, a, c, d, e)
};
xa.edtOnConfig = function(h, d) {
    var a = h.wgtGetProperty(d, "cfg");
    var e = h.wgtGetProperty(d, "local");
    var c = h.wgtGetProperty(d, "selectType");
    var g;
    if (!a.images.disabledDown) {
        a.images.disabledDown = {
            mediaID: undefined
        }
    }
    if (!a.images.disabledHover) {
        a.images.disabledHover = {
            mediaID: undefined
        }
    }
    if (!a.clr) {
        a.clr = {
            disabled: null,
            down: null,
            hover: null
        }
    }
    var f = this;

    function b() {
        eduLib.edtInputApplyAll(h, g.tagSub);
        eduLib.edtInputApplyAll(h, g.tagOrg);
        f.edtOnSetState(h, d, h.wgtGetProperty(d, "apxState"));
        h.wgtSetProperty(d, "cfg", a);
        if (e) {
            h.wgtSetProperty(d, "local", e)
        }
        if (g._tmpSelectType) {
            h.wgtSetProperty(d, "selectType", g._tmpSelectType)
        }
    }
    if (g = h.dlgDoModal(700, 600, b)) {
        g.tagSub = g.$TAG("DIV");
        g.tagOrg = g.$TAG("DIV");
        if (this.I_edtOnConfig) {
            this.I_edtOnConfig(h, d, e, g, g.tagSub, g.tagOrg)
        }
        uxWgtBtnImage.I_edtOnConfigBuild.call(this, h, d, g, g.tagOrg, c)
    }
};
xa.I_edtOnConfigBuild = function(h, d, c, g, b) {
    var a = h.wgtGetProperty(d, "cfg");
    c._tmpSelectType = b;
    var f = "Normal";
    var e = "Disabled";
    if (this.I_edtOnConfig_title && this.I_edtOnConfig_title(h, d, c, "normal")) {
        f = this.I_edtOnConfig_title(h, d, c, "normal")
    }
    if (this.I_edtOnConfig_title && this.I_edtOnConfig_title(h, d, c, "disabled")) {
        e = this.I_edtOnConfig_title(h, d, c, "disabled")
    }
    if (g.eduLib) {
        delete g.eduLib
    }
    g.innerHTML = "";
    if (b == "tab") {
        e = "Selected";
        eduLib.edtInputAdd(h, g, {
            type: "title",
            title: "Image for each states"
        });
        eduLib.edtInputAdd(h, g, {
            type: "image",
            title: f + " (m)",
            value: a.images,
            key: "normal"
        });
        eduLib.edtInputAdd(h, g, {
            type: "image",
            title: f + " Hover",
            value: a.images,
            key: "hover"
        });
        eduLib.edtInputAdd(h, g, {
            type: "image",
            title: e + " (m)",
            value: a.images,
            key: "disabled"
        });
        if (a.clr && h.wgtGetProperty(d, "apxText")) {
            if (a.clr.down) {
                a.clr.down = null
            }
            eduLib.edtInputAdd(h, g, {
                type: "space"
            });
            eduLib.edtInputAdd(h, g, {
                type: "title",
                title: "Text color for each states"
            });
            eduLib.edtInputAdd(h, g, {
                type: "color",
                askUse: true,
                title: e,
                value: a.clr,
                key: "disabled"
            });
            eduLib.edtInputAdd(h, g, {
                type: "color",
                askUse: true,
                title: f + " Hover",
                value: a.clr,
                key: "hover"
            })
        }
    } else {
        if (b == "toggle") {
            e = "Selected";
            eduLib.edtInputAdd(h, g, {
                type: "title",
                title: "Image for each states"
            });
            eduLib.edtInputAdd(h, g, {
                type: "image",
                title: e + " (m)",
                value: a.images,
                key: "disabled"
            });
            eduLib.edtInputAdd(h, g, {
                type: "image",
                title: e + " Hover",
                value: a.images,
                key: "disabledHover"
            });
            eduLib.edtInputAdd(h, g, {
                type: "image",
                title: e + " Pressed",
                value: a.images,
                key: "disabledDown"
            });
            eduLib.edtInputAdd(h, g, {
                type: "space"
            });
            eduLib.edtInputAdd(h, g, {
                type: "image",
                title: f + " (m)",
                value: a.images,
                key: "normal"
            });
            eduLib.edtInputAdd(h, g, {
                type: "image",
                title: f + " Hover",
                value: a.images,
                key: "hover"
            });
            eduLib.edtInputAdd(h, g, {
                type: "image",
                title: f + " Pressed",
                value: a.images,
                key: "down"
            });
            if (a.clr && h.wgtGetProperty(d, "apxText")) {
                eduLib.edtInputAdd(h, g, {
                    type: "space"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "title",
                    title: "Text color for each states"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "color",
                    askUse: true,
                    title: e,
                    value: a.clr,
                    key: "disabled"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "color",
                    askUse: true,
                    title: e + " Hover",
                    value: a.clr,
                    key: "disabledHover"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "color",
                    askUse: true,
                    title: e + " Pressed",
                    value: a.clr,
                    key: "disabledDown"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "space"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "color",
                    askUse: true,
                    title: f + " Hover",
                    value: a.clr,
                    key: "hover"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "color",
                    askUse: true,
                    title: f + " Pressed",
                    value: a.clr,
                    key: "down"
                })
            }
        } else {
            eduLib.edtInputAdd(h, g, {
                type: "title",
                title: "Image for each states"
            });
            eduLib.edtInputAdd(h, g, {
                type: "image",
                title: f + " (m)",
                value: a.images,
                key: "normal"
            });
            eduLib.edtInputAdd(h, g, {
                type: "image",
                title: f + " Hover",
                value: a.images,
                key: "hover"
            });
            eduLib.edtInputAdd(h, g, {
                type: "image",
                title: f + " Pressed",
                value: a.images,
                key: "down"
            });
            if (b != "simple") {
                eduLib.edtInputAdd(h, g, {
                    type: "space"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "image",
                    title: e,
                    value: a.images,
                    key: "disabled"
                })
            }
            if (a.clr && h.wgtGetProperty(d, "apxText")) {
                eduLib.edtInputAdd(h, g, {
                    type: "space"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "title",
                    title: "Text color for each states"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "color",
                    askUse: true,
                    title: f + " Hover",
                    value: a.clr,
                    key: "hover"
                });
                eduLib.edtInputAdd(h, g, {
                    type: "color",
                    askUse: true,
                    title: f + " Pressed",
                    value: a.clr,
                    key: "down"
                });
                if (b != "simple") {
                    eduLib.edtInputAdd(h, g, {
                        type: "color",
                        askUse: true,
                        title: e,
                        value: a.clr,
                        key: "disabled"
                    })
                }
            }
        }
    }
};
xa.edtOnSetState = function(d, b, c) {
    var a = d.wgtGetProperty(b, "cfg");
    if (a.images[c].mediaID) {
        d.wgtSetProperty(b, "apxMediaID", a.images[c].mediaID, d.wgtGetProperty(b, "autoKeepSize"))
    }
};
xa.edtOnBuildState = function(c, e, a, b) {
    var d = c.pages[a].objects[e].create.data;
    if (d && d.properties && d.properties.attrs && (d.properties.attrs.selectType == "tab" || d.properties.attrs.selectType == "toggle")) {
        b.disabled = "Selected";
        b.normal = "Unselected"
    } else {
        b.normal = "Normal";
        b.disabled = "Disabled"
    }
};
uxWgtBtnImage = xa;
var xa = apn.inheritWidget(uxWgtBtnImage);
xa.styleMap = {
    title: true,
    visibility: true,
    alpha: true,
    angle: true,
    mediaID: true
};
xa.editor = xa.editor || {};
xa.editor.iconThumb = "imgs/wgts/thumbs/video.png";
xa.properties = xa.properties || {};
xa.properties.attrs = xa.properties.attrs || {};
xa.properties.attrs.uxMediaPlayer = true;
xa.properties.attrs.local = xa.properties.attrs.local || {};
xa.properties.attrs.local.idAudio = "";
xa.properties.attrs.local.type = "pause";
xa.properties.attrs.selectType = "toggle";
xa.properties.state = "normal";
xa.onEdit = undefined;
xa.exeOnPagePreLoad = function(b, c) {
    var d = b.srcGetWidgetProperty(c, "local") || b.srcGetWidgetProperty(c, "cfg");
    if (d.idAudio) {
        function a(f) {
            var e = b.srcGetWidgetProperty(f, "local") || b.srcGetWidgetProperty(f, "cfg");
            if (!e.idAudio || !b.wgtTag(e.idAudio)) {
                e.idAudio = d.idAudio
            }
        }
        b.utlIterateInGroup(c, "uxMediaPlayer", a)
    }
};
xa.I_edtOnConfig = function(k, c, j, m, l, a, e) {
    var h = k.getScreenData();
    var g = [{
        title: "",
        value: ""
    }];
    for (var b in h.objects) {
        if (h.objects[b].create && h.objects[b].create.data && h.objects[b].create.data.properties && h.objects[b].create.data.properties.attrs && h.objects[b].create.data.properties.attrs.apxMediaControl) {
            g.push({
                value: b,
                title: k.itrGetObjectTitle(b)
            })
        }
    }
    var f = this;

    function d() {
        if (m._uxWgtBtnImage_tmpType == this.value) {
            return
        }
        m._uxWgtBtnImage_tmpType = this.value;
        switch (this.value) {
            case "_stop":
                uxWgtBtnImage.I_edtOnConfigBuild.call(f, k, c, m, a, "simple");
                break;
            default:
                uxWgtBtnImage.I_edtOnConfigBuild.call(f, k, c, m, a, "toggle");
                break
        }
    }
    m._uxWgtBtnImage_tmpType = j.type;
    eduLib.edtInputAdd(k, l, {
        type: "select",
        options: g,
        title: "Connected Media Widget (m)",
        comment: "(Media widget to play media for this)",
        key: "idAudio",
        value: j
    });
    eduLib.edtInputAdd(k, l, {
        type: "select",
        onchange: d,
        options: [{
            title: "Play(resume)/Pause",
            value: "pause"
        }, {
            title: "Play(resume)/Stop",
            value: "stop"
        }, {
            title: "Stop",
            value: "_stop"
        }, {
            title: "Loop",
            value: "loop"
        }, {
            title: "Mute",
            value: "mute"
        }],
        title: "Type",
        key: "type",
        value: j
    });
    eduLib.edtInputAdd(k, l, {
        type: "space"
    })
};
xa.I_edtOnConfig_title = function(d, a, c, b) {
    switch (c._uxWgtBtnImage_tmpType) {
        case "stop":
        case "pause":
            if (b == "normal") {
                return "Stopped/Paused"
            } else {
                if (b == "disabled") {
                    return "Playing"
                }
            }
            break;
        case "_stop":
            if (b == "normal") {
                return "Stopped"
            }
            break;
        case "_loop":
            if (b == "normal") {
                return "Off State"
            } else {
                if (b == "disabled") {
                    return "On State"
                }
            }
            break;
        case "_mute":
            if (b == "normal") {
                return "Off State"
            } else {
                if (b == "disabled") {
                    return "On State"
                }
            }
            break
    }
};
xa.I_exeOnLoad_check = function(c, d) {
    var a = c.wgtTag(d);
    var b = c.wgtGetProperty(d, "local");
    if (!b || !b.idAudio || !c.wgtTag(b.idAudio)) {
        if (bx.HCL.DV.getLanguage() == "ko") {
            c.log(d, '연주할 "미디어 위젯"이 설정되지 않았거나 존재하지 않습니다.')
        } else {
            c.log(d, '"Connected Media Widget" is not set or not exist.')
        }
        return false
    }
    return true
};
xa.I_exeOnLoad_post = function(c, e) {
    var a = c.wgtTag(e);
    var b = c.wgtGetProperty(e, "local");
    a.ctx = a.ctx || {};
    a.ctx.tagAudio = c.wgtTag(b.idAudio).mediaTag;
    a.ctx.moduleAudio = apn.Project.getWidgetModule(c.screen.objects[b.idAudio].create.data);
    a.apxOnEvent = function(f, g, i, h) {
        if (g == "click") {
            switch (b.type) {
                case "_stop":
                    f.wgtControlMedia(b.idAudio, "stop");
                    break;
                case "loop":
                case "mute":
                    if (a.ctx.moduleAudio.exeMediaControl && a.ctx.moduleAudio.exeMediaControl(f.wgtTag(b.idAudio), b.type, f.wgtGetProperty(e, "apxState") == "normal")) {
                        if (f.wgtGetProperty(e, "apxState") == "normal") {
                            f.wgtSetProperty(e, "apxState", "disabled")
                        } else {
                            f.wgtSetProperty(e, "apxState", "normal")
                        }
                    }
                    break;
                case "stop":
                    if (a.ctx.tagAudio.paused) {
                        f.wgtControlMedia(b.idAudio, "resume")
                    } else {
                        f.wgtControlMedia(b.idAudio, "stop")
                    }
                    break;
                case "pause":
                    if (a.ctx.tagAudio.paused) {
                        f.wgtControlMedia(b.idAudio, "resume")
                    } else {
                        f.wgtControlMedia(b.idAudio, "pause")
                    }
                    break
            }
            return true
        }
    };

    function d(f, h, g) {
        if (b.type == "stop" || b.type == "pause") {
            if (f == "trackStart" || f == "trackResume") {
                c.wgtSetProperty(e, "apxState", "disabled")
            } else {
                if (f == "trackEnd" || f == "trackPause") {
                    c.wgtSetProperty(e, "apxState", "normal")
                }
            }
        }
    }
    c.wgtListenMedia(e, b.idAudio, d)
};
xa.edtOnBuildState = function(c, d, a, b) {};
xa.edtOnRemapObjectID = function(d, b, c) {
    if (b && b.properties && b.properties.attrs && b.properties.attrs.local) {
        var a = b.properties.attrs.local;
        if (a.idAudio) {
            if (c[a.idAudio]) {
                a.idAudio = c[a.idAudio]
            } else {
                if (!d.getScreenData().objects[a.idAudio]) {
                    a.idAudio = ""
                }
            }
        }
    }
};
uxWgtPlayerBtn = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.rect"]);
xa.styleMap = {
    title: true,
    visibility: true,
    alpha: true,
    mediaID: true
};
xa.editor = xa.editor || {};
xa.editor = {};
xa.editor.states = {
    ready: "Ready",
    off: "Off"
};
xa.editor.iconThumb = "imgs/wgts/thumbs/video.png";
xa.properties = {
    attrs: {
        uxMediaPlayer: true,
        disableDrag: false,
        cfg: {
            idAudio: "",
            bar: {
                mediaID: undefined
            },
            barPlayed: {
                L: {
                    mediaID: undefined
                },
                C: {
                    mediaID: undefined
                },
                R: {
                    mediaID: undefined
                }
            },
            handle: {
                normal: {
                    mediaID: undefined
                },
                hover: {
                    mediaID: undefined
                },
                down: {
                    mediaID: undefined
                }
            }
        }
    }
};
xa.onEdit = undefined;
xa.createAsCanvasObject = function(b, a, c, d, e) {
    return apn.IWidget.createCanvasObject(b, this, "apn.CImage", bx.CCanvasWnd.SHAPE_RECT, a, c, d, e)
};
xa.edtOnConfig = function(h, d) {
    var b = h.wgtGetProperty(d, "cfg");
    var g;
    var f = h.getScreenData();
    var a = [{
        title: "",
        value: ""
    }];
    for (var e in f.objects) {
        if (f.objects[e].create && f.objects[e].create.data && f.objects[e].create.data.properties && f.objects[e].create.data.properties.attrs && f.objects[e].create.data.properties.attrs.apxMediaControl) {
            a.push({
                value: e,
                title: h.itrGetObjectTitle(e)
            })
        }
    }

    function c() {
        eduLib.edtInputApplyAll(h, g);
        if (b.bar.mediaID) {
            h.wgtSetProperty(d, "apxMediaID", b.bar.mediaID)
        }
        h.wgtSetProperty(d, "cfg", b)
    }
    if (g = h.dlgDoModal(600, 500, c)) {
        eduLib.edtInputAdd(h, g, {
            type: "select",
            options: a,
            title: "Connected Media Widget (m)",
            comment: "(Media widget to play media for this)",
            key: "idAudio",
            value: b
        });
        eduLib.edtInputAdd(h, g, {
            type: "space"
        });
        eduLib.edtInputAdd(h, g, {
            type: "image",
            title: "Bar (m)",
            value: b,
            key: "bar"
        });
        eduLib.edtInputAdd(h, g, {
            type: "image",
            title: "Handle (m)",
            value: b.handle,
            key: "normal"
        });
        eduLib.edtInputAdd(h, g, {
            type: "space"
        });
        eduLib.edtInputAdd(h, g, {
            type: "image",
            title: "Bar Played - Left",
            comment: "(To mark the played area from Bar)",
            value: b.barPlayed,
            key: "L"
        });
        eduLib.edtInputAdd(h, g, {
            type: "image",
            title: "Bar Played - Middle",
            value: b.barPlayed,
            key: "C"
        });
        eduLib.edtInputAdd(h, g, {
            type: "image",
            title: "Bar Played - Right",
            value: b.barPlayed,
            key: "R"
        })
    }
};
xa.exeOnTick = function(b, e, c) {
    var a = b.wgtTag(e);
    if (!(a.ctx && a.ctx.slide)) {
        return
    }
    if (a.ctx.slide.s >= a.ctx.slide.e) {
        return
    }
    if (a.ctx.slide.run == 1) {
        a.ctx.slide.run = 2;
        a.ctx.slide.tick = c;
        this._setHandle(b, a, a.ctx.slide.s, a.ctx._duration)
    } else {
        var d = Math.min(1, ((c - a.ctx.slide.tick) / 1000) / (a.ctx.slide.e - a.ctx.slide.s));
        a.ctx.slide.c = a.ctx.slide.s + d * (a.ctx.slide.e - a.ctx.slide.s);
        this._setHandle(b, a, a.ctx.slide.c, a.ctx._duration);
        if (d == 1) {
            delete a.ctx.slide
        }
    }
};
xa.exeSetState = function(b, a, c) {
    if (c == "off" && a.ctx) {
        if (a.ctx.slide) {
            delete a.ctx.slide
        }
        if (a.ctx._duration) {
            uxWgtPlayerSeek._setHandle(b, a, 0, a.ctx._duration)
        }
    }
};
xa.exeOnLoad = function(c, e) {
    var a = c.wgtTag(e);
    delete a.textTag;
    a.style.overflow = "visible";
    var b = c.wgtGetProperty(e, "cfg");
    if (!b.idAudio || !c.wgtTag(b.idAudio)) {
        if (bx.HCL.DV.getLanguage() == "ko") {
            c.log(e, '연주할 "미디어 위젯"이 설정되지 않았거나 존재하지 않습니다.')
        } else {
            c.log(e, '"Connected Media Widget" is not set or not exist.')
        }
        return
    }
    if (!b.bar.mediaID || !b.handle.normal.mediaID) {
        if (bx.HCL.DV.getLanguage() == "ko") {
            c.log(e, '"Bar" 또는 "Handle"을 위한 필수 이미지가 설정되지 않았거나 존재하지 않습니다.')
        } else {
            c.log(e, 'Madatory image for "Bar" or "Handle"is not set or not exist.')
        }
        return
    }
    a.ctx = {};
    a.ctx.tagAudio = c.wgtTag(b.idAudio);
    a.ctx.moduleAudio = apn.Project.getWidgetModule(c.screen.objects[b.idAudio].create.data);
    a.ctx.slide = undefined;
    a.style.background = "url(" + c.mediaURL(b.bar.mediaID) + ") no-repeat center center";
    a.$CSS("backgroundSize", "100% auto");
    a.ctx.tagHandle = a.$TAG("IMG", {
        style: "position:absolute;"
    });
    a.ctx.tagHandle.onload = function() {
        this._offX = -Math.round((1 / c.getZoomX()) * this.naturalWidth / 2 - parseInt(a.style.height) / 2);
        this._offY = -Math.round((1 / c.getZoomY()) * this.naturalHeight / 2 - parseInt(a.style.height) / 2);
        this.style.left = this._offX + "px";
        this.style.top = this._offY + "px";
        this.style.width = Math.round((1 / c.getZoomX()) * this.naturalWidth) + "px";
        this.style.height = Math.round((1 / c.getZoomY()) * this.naturalHeight) + "px"
    };
    a.ctx.tagHandle.src = c.mediaURL(b.handle.normal.mediaID);
    c.tagDraggable(a.ctx.tagHandle, true);
    a.ctx.tagHandle.apxOnDrag = function(f, h, g) {
        if (f.wgtGetProperty(e, "apxState") == "off") {
            return false
        }
        if (f.wgtGetProperty(e, "disableDrag")) {
            return false
        }
        if (h < this._offX) {
            return false
        }
        if (h > parseInt(a.style.width) + this._offX) {
            return false
        }
        uxWgtPlayerSeek._barPlayedRender(f, a, Math.max(1, h - this._offX));
        if (a.ctx.moduleAudio) {
            if (a.ctx.moduleAudio.exeMediaSeek) {
                a.ctx.moduleAudio.exeMediaSeek(a.ctx.tagAudio, ((parseInt(this.style.left) - this._offX) / parseInt(a.style.width)) * 100 + "%", false)
            }
        }
        return true
    };
    a.ctx.tagHandle.apxOnDragStart = function(f) {
        if (f.wgtGetProperty(e, "apxState") == "off") {
            return false
        }
        if (f.wgtGetProperty(e, "disableDrag")) {
            return false
        }
        this._inDrag = true;
        return true
    };
    a.ctx.tagHandle.apxOnDragEnd = function(f) {
        if (f.wgtGetProperty(e, "apxState") == "off") {
            return false
        }
        if (f.wgtGetProperty(e, "disableDrag")) {
            return false
        }
        if (a.ctx.moduleAudio) {
            if (a.ctx.moduleAudio.exeMediaSeek) {
                a.ctx.moduleAudio.exeMediaSeek(a.ctx.tagAudio, ((parseInt(this.style.left) - this._offX) / parseInt(a.style.width)) * 100 + "%", true, false)
            }
        }
        this._inDrag = false;
        return true
    };
    this._barPlayedLoad(c, e);

    function d(f, h, g) {
        if (c.wgtGetProperty(e, "apxState") == "off") {
            return
        }
        if (f == "infoPlayTime") {
            if (!a.ctx.tagHandle._inDrag) {
                if (h !== undefined && g) {
                    a.ctx._duration = g;
                    if (c.wgtGetProperty(e, "disableDrag")) {
                        if (a.ctx.slide && a.ctx.slide.run == 2 && a.ctx.slide.c >= h) {} else {
                            a.ctx.slide = {
                                s: h,
                                e: g,
                                c: h,
                                run: 1
                            }
                        }
                    } else {
                        uxWgtPlayerSeek._setHandle(c, a, h, g)
                    }
                }
            }
        } else {
            if (f == "infoDuration") {
                if (!a.ctx.tagHandle._inDrag) {
                    if (h !== undefined && g) {
                        a.ctx._duration = g;
                        uxWgtPlayerSeek._setHandle(c, a, h, g)
                    }
                }
            } else {
                if (f == "trackPause") {
                    if (a.ctx.slide) {
                        delete a.ctx.slide
                    }
                } else {
                    if (f == "trackEnd") {
                        if (a.ctx._duration) {
                            uxWgtPlayerSeek._setHandle(c, a, 0, a.ctx._duration);
                            a.ctx.slide = undefined
                        }
                    }
                }
            }
        }
    }
    c.wgtListenMedia(e, b.idAudio, d)
};
xa._setHandle = function(c, b, e, d) {
    var a = (e / d) * parseInt(b.style.width);
    b.ctx.tagHandle.style.left = (a + b.ctx.tagHandle._offX) + "px";
    uxWgtPlayerSeek._barPlayedRender(c, b, Math.max(1, a))
};
xa._barPlayedLoad = function(c, e) {
    var b = c.wgtGetProperty(e, "cfg");
    if (b.barPlayed.L.mediaID && b.barPlayed.C.mediaID && b.barPlayed.R.mediaID) {
        var a = c.wgtTag(e);
        a.ctx.uTagPlayed = a.$TAG("DIV", {
            style: "position:absolute;overflow:hidden;left:0px;height:0px;width:1px;height:" + a.style.height
        });
        c.tagPutUnder(a.ctx.uTagPlayed, a.ctx.tagHandle);
        a.ctx.uPlayedImgs = {};
        a.ctx.uPlayedImgs.L = {
            url: c.mediaURL(b.barPlayed.L.mediaID)
        };
        a.ctx.uPlayedImgs.M = {
            url: c.mediaURL(b.barPlayed.C.mediaID)
        };
        a.ctx.uPlayedImgs.R = {
            url: c.mediaURL(b.barPlayed.R.mediaID)
        };

        function d(g, f, h) {
            if (g == f) {
                a.ctx.uImgLoaded = true;
                uxWgtPlayerSeek._barPlayedRender(c, a, 1)
            } else {
                c.log(e, "Failed to load " + h + " images.")
            }
        }
        new apn.CRscLoader().load(c.project, a.ctx.uPlayedImgs, d)
    }
};
xa._barPlayedRender = function(c, a, b) {
    if (a.ctx.uTagPlayed && a.ctx.uImgLoaded) {
        a.ctx.uTagPlayed.style.width = b + "px";
        apn.widgets.utils.patch3(a.ctx.uTagPlayed, false, a.ctx.uPlayedImgs.L.image, a.ctx.uPlayedImgs.M.image, a.ctx.uPlayedImgs.R.image)
    }
};
xa.edtOnRemapObjectID = function(d, b, c) {
    if (b && b.properties && b.properties.attrs && b.properties.attrs.cfg) {
        var a = b.properties.attrs.cfg;
        if (a.idAudio) {
            if (c[a.idAudio]) {
                a.idAudio = c[a.idAudio]
            } else {
                if (!d.getScreenData().objects[a.idAudio]) {
                    a.idAudio = ""
                }
            }
        }
    }
};
uxWgtPlayerSeek = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.roundRect"]);
xa.properties = {
    attrs: {
        uxMediaPlayer: true,
        cfg: {
            idAudio: ""
        }
    }
};
xa.styles = xa.styles || {};
xa.styles.text = "00:00 / 00:00";
xa.edtOnConfig = function(h, d) {
    var b = h.wgtGetProperty(d, "cfg");
    var g;
    var f = h.getScreenData();
    var a = [{
        title: "",
        value: ""
    }];
    for (var e in f.objects) {
        if (f.objects[e].create && f.objects[e].create.data && f.objects[e].create.data.properties && f.objects[e].create.data.properties.attrs && f.objects[e].create.data.properties.attrs.apxMediaControl) {
            a.push({
                value: e,
                title: h.itrGetObjectTitle(e)
            })
        }
    }

    function c() {
        eduLib.edtInputApplyAll(h, g);
        h.wgtSetProperty(d, "cfg", b)
    }
    if (g = h.dlgDoModal(500, 200, c)) {
        eduLib.edtInputAdd(h, g, {
            type: "select",
            options: a,
            title: "Connected Media Widget (m)",
            comment: "(Media widget to play media for this)",
            key: "idAudio",
            value: b
        })
    }
};
xa.exeOnLoad = function(c, e) {
    var a = c.wgtTag(e);
    var b = c.wgtGetProperty(e, "cfg");
    if (!b.idAudio || !c.wgtTag(b.idAudio)) {
        if (bx.HCL.DV.getLanguage() == "ko") {
            c.log(e, '연주할 "미디어 위젯"이 설정되지 않았거나 존재하지 않습니다.')
        } else {
            c.log(e, '"Connected Media Widget" is not set or not exist.')
        }
        return
    }
    a.ctx = {};
    a.ctx.tagAudio = c.wgtTag(b.idAudio);

    function d(f, i, h) {
        function g(j) {
            j = Math.round(j);
            return (Math.floor(j / 60) < 10 ? "0" : "") + Math.floor(j / 60) + ":" + ((j % 60) < 10 ? "0" : "") + (j % 60)
        }
        if (f == "infoPlayTime" || f == "infoDuration") {
            if (i !== undefined && h) {
                a.ctx._duration = h;
                c.wgtSetProperty(e, "apxText", g(i) + " / " + g(h))
            }
        } else {
            if (f == "trackEnd") {
                if (a.ctx._duration) {
                    c.wgtSetProperty(e, "apxText", g(0) + " / " + g(a.ctx._duration))
                }
            }
        }
    }
    c.wgtListenMedia(e, b.idAudio, d)
};
xa.edtOnRemapObjectID = function(d, b, c) {
    if (b && b.properties && b.properties.attrs && b.properties.attrs.cfg) {
        var a = b.properties.attrs.cfg;
        if (a.idAudio) {
            if (c[a.idAudio]) {
                a.idAudio = c[a.idAudio]
            } else {
                if (!d.getScreenData().objects[a.idAudio]) {
                    a.idAudio = ""
                }
            }
        }
    }
};
uxWgtPlayerTime = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.roundRect"]);
xa.styleMap = {
    title: true,
    visibility: true,
    font: true,
    fontSize: true,
    fontStyle: true,
    fontItalic: true,
    fontBold: true,
    textMultiLine: true,
    fontUnderlined: true,
    text: true,
    textAlign: true,
    textValign: true,
    textPadding: true,
    textWordWrap: true,
    ltrSp: true,
    lnSp: true,
    fontStrokeStyle: true,
    fontStrokeWidth: true,
    alpha: true,
    angle: true
};
xa.styles = {
    textPadding: 0,
    textAlign: "left",
    textValign: "top",
    textMultiLine: true,
    textWordWrap: true
};
xa.properties = xa.properties || {};
xa.properties.state = "showAll";
xa.properties.attrs = {
    cfg: {
        wds: [{
            txt: "",
            toTxt: "",
            fontStyle: "#0000ff",
            underlined: "Yes",
            borderColor: null,
            bgColor: null,
            borderRadius: 0
        }],
        imgs: [{
            txt: "",
            img: {
                mediaID: undefined
            }
        }],
        opts: {},
        wdIndex: 1,
        imgIndex: 1
    }
};
xa.exeRenderTag = function(f, e, b, a, d, c) {
    b.apnOnSetText = function(p, l, j, g, k, o, h, i, n, m) {
        eduWgtKeyText.applyText(e, p, undefined, l, j, g, k, o, h, i, n, m)
    };
    this.parentClass.exeRenderTag.call(this, f, e, b, a, d, c);
    return b
};
xa.exeOnLoad = function(d, f) {
    var a = d.wgtTag(f);
    var c = d.wgtGetProperty(f, "cfg");
    a.ctx = {};

    function e(k, j) {
        if (k == f && j) {
            var l;
            for (var h = 0; h < c.wds.length; h++) {
                if (!c.wds[h].txt) {
                    c.wds[h].txt = j;
                    if (c.wds[h].apxIndex === undefined) {
                        c.wds[h].apxIndex = c.wdIndex++
                    }
                    l = true
                }
            }
            if (!l) {
                c.wds.push(bx.$cloneObject({}, c.wds[h - 1]));
                c.wds[h].txt = j;
                c.wds[h].apxIndex = c.wdIndex++
            }
            var g = d.wgtGetProperty(f, "apxText");
            d.wgtSetProperty(f, "apxText", "");
            d.wgtSetProperty(f, "apxText", g)
        }
    }
    d.wgtListenProperty(f, "addKeyword", e);

    function b(i, h) {
        if (i == f) {
            a.ctx.toPlainText = h;
            var g = d.wgtGetProperty(f, "apxText");
            d.wgtSetProperty(f, "apxText", "");
            d.wgtSetProperty(f, "apxText", g)
        }
    }
    d.wgtListenProperty(f, "toPlainText", b)
};
xa.exeSetState = function(c, a, f, b) {
    if (f == "showAll" && b === undefined) {
        return
    }
    var e;
    for (var d = 0; d < a.textTag.childNodes.length; d++) {
        e = a.textTag.childNodes[d];
        if (e.id && e.id.indexOf && e.id.indexOf(a.apnOID + ":") == 0) {
            if (e.id.indexOf(a.apnOID + ":K") == 0) {
                if (f == "hideAll") {
                    if (!e._bkColor) {
                        e._bkColor = e.style.color
                    }
                    e.style.color = "rgba(255,255,255,0)"
                } else {
                    if (f == "showAll") {
                        if (e._bkColor) {
                            e.style.color = e._bkColor
                        }
                    } else {
                        if (f == "showBdr") {
                            if (e._bkBorder) {
                                e.style.border = e._bkBorder
                            } else {
                                if (e._bkBorderBottom) {
                                    e.style.borderBottom = e._bkBorderBottom
                                }
                            }
                        } else {
                            if (f == "hideBdr") {
                                if (!e._bkBorder) {
                                    e._bkBorder = e.style.border
                                }
                                if (!e._bkBorderBottom) {
                                    e._bkBorderBottom = e.style.borderBottom
                                }
                                e.style.border = ""
                            }
                        }
                    }
                }
            }
        }
    }
};
xa.exeInputGet = function(b, a) {
    if (a.ctx && a.ctx.lastTapWord) {
        return a.ctx.lastTapWord
    }
};
xa.applyText = function(d, t, j, m, n, e, a, g, l, r, q, b) {
    function c(i) {
        return i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    if (t.ctx && t.ctx.toPlainText) {
        apn.widgets["apn.wgt.rect"].exeSetText(t, "[[HTML]]" + m, n, e, a, g, l, r, q, b);
        if (t.textTag) {
            t.textTag.style.color = t.ctx.toPlainText
        }
        return
    } else {
        if (t.textTag) {
            t.textTag.style.color = "inherit"
        }
    }
    if (m && m.replace) {
        var f = d.wgtGetProperty(t.apnOID, "cfg");
        var h = m.replace(/\n/g, "<br/>");
        for (var p = 0; p < f.wds.length; p++) {
            if (apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeTxtUnderlined == "border") {
                if (f.wds[p].txt) {
                    h = h.replace(new RegExp(c(f.wds[p].txt), "g"), '<span name="' + p + '" id="' + (t.apnOID + ":K" + f.wds[p].apxIndex) + '" style="box-sizing:border-box;font-family:inherit;color:' + (f.wds[p].fontStyle || f.opts.fontStyle) + ";" + ((f.wds[p].underlined || f.opts.underlined) == "Yes" ? "border-bottom:solid " + apn.widgets.utils.getBorderUnderlineWeight(t) + "px " + (f.wds[p].borderColor || f.wds[p].fontStyle || f.opts.fontStyle) + ";" : "") + '">' + (f.wds[p].toTxt || f.wds[p].txt) + "</span>")
                }
            } else {
                if (f.wds[p].txt) {
                    h = h.replace(new RegExp(c(f.wds[p].txt), "g"), '<span name="' + p + '" id="' + (t.apnOID + ":K" + f.wds[p].apxIndex) + '" style="box-sizing:border-box;font-family:inherit;color:' + f.opts.fontStyle + ";" + (f.opts.underlined == "Yes" ? "text-decoration:underline;" : "") + '">' + f.wds[p].txt + "</span>")
                }
            }
        }
        for (p = 0; p < f.imgs.length; p++) {
            if (f.imgs[p].txt && f.imgs[p].img.mediaID) {
                h = h.replace(new RegExp(c(f.imgs[p].txt), "g"), '<img id="' + (t.apnOID + ":I" + f.imgs[p].apxIndex) + '" src="' + d.mediaURL(f.imgs[p].img.mediaID) + '" style="height:1em;vertical-align:text-top;"/>')
            }
        }
        apn.widgets["apn.wgt.rect"].exeSetText(t, "[[HTML]]" + h, n, e, a, g, l, r, q, b);
        var s, k;
        j = j || {};
        for (p = 0; p < t.textTag.childNodes.length; p++) {
            s = t.textTag.childNodes[p];
            if (s.id && s.id.indexOf && s.id.indexOf(t.apnOID + ":") == 0) {
                if (s.id.indexOf(t.apnOID + ":K") == 0) {
                    k = parseInt(s.getAttribute("name"), s.id);
                    if (f.wds[k].underlined == "No" && (f.wds[k].borderColor || f.kwBorderColor)) {
                        s.style.border = "solid 1px " + (f.wds[k].borderColor || f.kwBorderColor)
                    }
                    if (f.wds[k].bgColor || f.kwBgColor) {
                        s.style.backgroundColor = (f.wds[k].bgColor || f.kwBgColor)
                    }
                    if (f.wds[k].borderRadius || f.kwBorderRadius) {
                        s.$CSS("borderRadius", (f.wds[k].borderRadius || f.kwBorderRadius) + "px")
                    }
                }
                s.apxOnEvent = j.onTap || function(i, u, w, v) {
                    if (u == "click") {
                        i.fireEvent("wgtEvent", this.id.split(":")[1], this.parentNode.parentNode.apnOID);
                        i.fireEvent("wgtEvent", "tap|$ANY", this.parentNode.parentNode.apnOID);
                        if (this.id.indexOf(t.apnOID + ":K") == 0) {
                            t.ctx.lastTapWord = f.wds[this.getAttribute("name")].txt
                        }
                        return true
                    }
                };
                if (apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeEventHover) {
                    function o(i, w) {
                        var u;

                        function v(x) {
                            if (!x) {
                                x = window.event
                            }
                            if (i) {
                                bx.Event.remove(document, "mousemove", i, false)
                            }
                            bx.Event.remove(document, "mouseup", v, false);
                            if (bx.HCL.DV.getBrowserType() == "msie" && document.releaseCapture) {
                                document.releaseCapture()
                            }
                        }
                        if (i) {
                            bx.Event.add(document, "mousemove", i, false)
                        }
                        bx.Event.add(document, "mouseup", v, false);
                        if (bx.HCL.DV.getBrowserType() == "msie" && document.body.setCapture) {
                            document.body.setCapture(true)
                        }
                    }
                    s.onmousemove = function(v) {
                        var w = this;

                        function u() {
                            w.__HoveOn = false;
                            if (w.parentNode) {
                                d.fireEvent("wgtEvent", "mo" + w.id.split(":")[1], w.parentNode.parentNode.apnOID);
                                d.fireEvent("wgtEvent", "mo|$ANY", w.parentNode.parentNode.apnOID)
                            }
                            bx.Event.remove(document, "mousemove", i, false)
                        }

                        function i(x) {
                            if (!bx.CCanvasWnd.intersect_point_rect(x.clientX, x.clientY, bx.HCL.getElementX(w), bx.HCL.getElementY(w), w.offsetWidth, w.offsetHeight)) {
                                u()
                            }
                        }
                        if (!this.__HoveOn) {
                            this.__HoveOn = true;
                            d.fireEvent("wgtEvent", "mh" + this.id.split(":")[1], this.parentNode.parentNode.apnOID);
                            d.fireEvent("wgtEvent", "mh|$ANY", this.parentNode.parentNode.apnOID);
                            bx.Event.add(document, "mousemove", i, false)
                        }
                    }
                }
            }
        }
    } else {
        apn.widgets["apn.wgt.rect"].exeSetText(t, " ", n, e, a, g, l, r, q, b)
    }
    if (d.wgtGetProperty(t.apnOID, "apxState") == "hideAll" || d.wgtGetProperty(t.apnOID, "apxState") == "hideBdr") {
        this.exeSetState(d, t, d.wgtGetProperty(t.apnOID, "apxState"))
    }
};
xa.edtOnConfig = function(e, c) {
    var a = e.wgtGetProperty(c, "cfg");
    var d;

    function b() {
        eduLib.edtInputApplyAll(e, d);
        for (var f = 0; f < a.wds.length; f++) {
            if (a.wds[f].apxIndex === undefined) {
                a.wds[f].apxIndex = a.wdIndex++
            }
        }
        for (var f = 0; f < a.imgs.length; f++) {
            if (a.imgs[f].apxIndex === undefined) {
                a.imgs[f].apxIndex = a.imgIndex++
            }
        }
        e.wgtSetProperty(c, "cfg", a);
        e.wgtRefreshUI(oId)
    }
    if (d = e.dlgDoModal(900, 600, b)) {
        eduLib.edtInputAdd(e, d, {
            type: "table",
            value: a.wds,
            title: "Keyword List",
            options: {
                th: ["Keyword", {
                    title: "Display as "
                }, "Color", "Underlined", {
                    title: "Border Color[?]",
                    comment: "Turn off 'Underlined' to display as a border box"
                }, "Border Radius", "Background Color"],
                add: true,
                remove: true
            },
            td: [{
                type: "text",
                key: "txt"
            }, {
                type: "text",
                key: "toTxt"
            }, {
                type: "color",
                key: "fontStyle"
            }, {
                type: "select",
                options: ["Yes", "No"],
                key: "underlined"
            }, {
                type: "color",
                askUse: true,
                key: "borderColor"
            }, {
                type: "number",
                key: "borderRadius",
                width: "70px"
            }, {
                type: "color",
                askUse: true,
                key: "bgColor"
            }]
        });
        eduLib.edtInputAdd(e, d, {
            type: "space"
        });
        eduLib.edtInputAdd(e, d, {
            type: "table",
            value: a.imgs,
            title: "Icon List",
            options: {
                th: ["Keyword", "Display as image"],
                add: true,
                remove: true
            },
            td: [{
                type: "text",
                key: "txt",
                width: "120px"
            }, {
                type: "image",
                key: "img"
            }]
        })
    }
};
xa.edtOnBuildEvent = function(a, c, h, g) {
    var f = a.pages[h].objects[c].create.data.properties.attrs.cfg;
    var k = {
        value: "wgtEvent",
        title: apn.P.eventTitle.wgtEvent,
        param: {}
    };
    for (var d = 0; d < f.wds.length; d++) {
        if (f.wds[d].txt) {
            k.param["K" + f.wds[d].apxIndex] = 'Tap "' + f.wds[d].txt + '"';
            if (apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeEventHover) {
                k.param["mhK" + f.wds[d].apxIndex] = 'Hover "' + f.wds[d].txt + '"';
                k.param["moK" + f.wds[d].apxIndex] = 'Out "' + f.wds[d].txt + '"'
            }
        }
    }
    for (var d = 0; d < f.imgs.length; d++) {
        if (f.imgs[d].txt && f.imgs[d].img.mediaID) {
            k.param["I" + f.imgs[d].apxIndex] = 'Tap "' + f.imgs[d].txt + '"';
            if (apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeEventHover) {
                k.param["mhI" + f.wds[d].apxIndex] = 'Hover "' + f.imgs[d].txt + '"';
                k.param["moI" + f.wds[d].apxIndex] = 'Out "' + f.imgs[d].txt + '"'
            }
        }
    }
    k.param["tap|$ANY"] = "Tap Any";
    k.param["mh|$ANY"] = "Hover Any";
    k.param["mo|$ANY"] = "Out Any";
    var j = apn.Project.findITRs(a, h, c);
    if (j && j.length) {
        var e, b;
        for (d = 0; d < j.length; d++) {
            e = apn.P.resolveCompositeSysEV(j[d].event);
            if (e && e.param && e.ev == "wgtEvent" && (!k || !k.param[e.param])) {
                k = k || {
                    value: "wgtEvent",
                    title: apn.P.eventTitle.wgtEvent,
                    param: {}
                };
                k.param[e.param] = "Tap [Removed]"
            }
        }
    }
    if (k) {
        g.wgtEvent = k
    }
};
xa.edtOnBuildState = function(c, d, a, b) {
    b.showAll = "Show Keyword";
    b.hideAll = "Hide Keyword";
    b.showBdr = "Show Border";
    b.hideBdr = "Hide Border"
};
eduWgtKeyText = xa;