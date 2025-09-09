import {
  NgxMaskDirective
} from "./chunk-BEPKW53D.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7CFOVS4O.js";
import {
  CommonModule,
  NgStyle
} from "./chunk-AW6VRP4R.js";
import "./chunk-K7HVY5B7.js";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injectable,
  ViewChild,
  inject,
  input,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-MTES5EJZ.js";
import {
  Subject,
  takeUntil
} from "./chunk-S35MAB2V.js";

// node_modules/lightning-tec-br-angular-components/fesm2022/lightning-tec-br-angular-components.mjs
var _c0 = (a0) => ({
  "box-shadow": a0
});
function FormFieldComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "i");
    ɵɵelementStart(2, "input", 4);
    ɵɵtwoWayListener("ngModelChange", function FormFieldComponent_Conditional_0_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.FormFielTxtModel.value, $event) || (ctx_r1.FormFielTxtModel.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function FormFieldComponent_Conditional_0_Template_input_ngModelChange_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onTxtChange());
    })("keydown.enter", function FormFieldComponent_Conditional_0_Template_input_keydown_enter_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.enterPressed());
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "i", 5);
    ɵɵlistener("click", function FormFieldComponent_Conditional_0_Template_i_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.togglePasswordView());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r1._Width() + "px")("height", ctx_r1._Height() + "px")("border-radius", ctx_r1._FontSize() * 0.3125 + "px");
    ɵɵproperty("ngStyle", ɵɵpureFunction1(53, _c0, "\n    rgb(204, 219, 232)" + ctx_r1._FontSize() * 0.1875 + "px " + ctx_r1._FontSize() * 0.1875 + "px " + ctx_r1._FontSize() * 0.375 + "px 0px inset,rgba(255, 255, 255, 0.5)" + ctx_r1._FontSize() * -0.1875 + "px " + ctx_r1._FontSize() * -0.1875 + "px " + ctx_r1._FontSize() * 0.375 + "px " + ctx_r1._FontSize() * 0.0625 + "px inset"));
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r1._Icon(), " icon");
    ɵɵstyleProp("color", ctx_r1._IconColor())("font-size", ctx_r1._FontSize() * 1.25 + "px")("margin-left", ctx_r1._FontSize() * 0.5625 + "px")("display", ctx_r1.IconEnabled() ? "" : "none");
    ɵɵadvance();
    ɵɵstyleProp("color", ctx_r1._FontColor())("font-family", ctx_r1._FontFamily())("font-size", ctx_r1._FontSize() + "px")("font-weight", ctx_r1._FontWeight())("width", ctx_r1._FontSize() * 15.3125 + "px")("margin-left", ctx_r1._FontSize() * 0.5 + "px");
    ɵɵpropertyInterpolate("prefix", ctx_r1.Prefixo);
    ɵɵpropertyInterpolate("suffix", ctx_r1.Sufixo);
    ɵɵpropertyInterpolate("mask", ctx_r1.Mask);
    ɵɵpropertyInterpolate("thousandSeparator", ctx_r1.thousandSeparator);
    ɵɵpropertyInterpolate("type", ctx_r1._placeHolderType);
    ɵɵpropertyInterpolate("name", ctx_r1.Name());
    ɵɵpropertyInterpolate("placeholder", ctx_r1._placeHolderValue());
    ɵɵtwoWayProperty("ngModel", ctx_r1.FormFielTxtModel.value);
    ɵɵproperty("showMaskTyped", ctx_r1.showMaskTyped)("allowNegativeNumbers", ctx_r1.TxtInputType() == ctx_r1.FormFieldTxtInputTypesEnum.Number ? true : false);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1._PasswordIcon);
    ɵɵstyleProp("cursor", "pointer")("color", ctx_r1._IconColor())("font-size", ctx_r1._FontSize() * 1.25 + "px")("margin-right", ctx_r1._FontSize() * 0.5625 + "px")("display", ctx_r1.TxtInputType() == ctx_r1.FormFieldTxtInputTypesEnum.Password ? "" : "none");
  }
}
function FormFieldComponent_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(option_r4.value);
  }
}
function FormFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "select", 6);
    ɵɵtwoWayListener("ngModelChange", function FormFieldComponent_Conditional_1_Template_select_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.FormFieldComboModel.value, $event) || (ctx_r1.FormFieldComboModel.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function FormFieldComponent_Conditional_1_Template_select_ngModelChange_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onComboChange());
    });
    ɵɵrepeaterCreate(2, FormFieldComponent_Conditional_1_For_3_Template, 2, 1, "option", null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r1._Width() + "px")("height", ctx_r1._Height() + "px")("padding", ctx_r1._FontSize() * 0.4 + "px " + ctx_r1._FontSize() * 0.8 + "px")("border-radius", ctx_r1._FontSize() * 0.3125 + "px");
    ɵɵproperty("ngStyle", ɵɵpureFunction1(22, _c0, "\n    rgb(204, 219, 232)" + ctx_r1._FontSize() * 0.1875 + "px " + ctx_r1._FontSize() * 0.1875 + "px " + ctx_r1._FontSize() * 0.375 + "px 0px inset,rgba(255, 255, 255, 0.5)" + ctx_r1._FontSize() * -0.1875 + "px " + ctx_r1._FontSize() * -0.1875 + "px " + ctx_r1._FontSize() * 0.375 + "px " + ctx_r1._FontSize() * 0.0625 + "px inset"));
    ɵɵadvance();
    ɵɵstyleProp("color", ctx_r1._FontColor())("font-family", ctx_r1._FontFamily())("font-size", ctx_r1._FontSize() + "px")("font-weight", ctx_r1._FontWeight())("width", ctx_r1._Width() + "px")("height", ctx_r1._Height() + "px");
    ɵɵtwoWayProperty("ngModel", ctx_r1.FormFieldComboModel.value);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1._Options());
  }
}
var _c1 = ["*"];
var _c2 = (a0) => ({
  "flex-direction": a0
});
var _c3 = ["tbody"];
function TableComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _header_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(_header_r1);
  }
}
function TableComponent_For_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _header_r5 = ctx.$implicit;
    const row_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(row_r3[_header_r5]);
  }
}
function TableComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 2);
    ɵɵlistener("click", function TableComponent_For_9_Template_tr_click_0_listener() {
      const row_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.OnLineSelected(row_r3));
    })("mouseenter", function TableComponent_For_9_Template_tr_mouseenter_0_listener() {
      const row_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.OnMouseEnter(row_r3));
    })("mouseleave", function TableComponent_For_9_Template_tr_mouseleave_0_listener() {
      const row_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.OnMouseLeave(row_r3));
    });
    ɵɵrepeaterCreate(1, TableComponent_For_9_For_2_Template, 2, 1, "td", null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r3.headers);
  }
}
function ModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "app-button", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("margin-right", ctx_r0.configModel.BtnsFontSize * 2 + "px");
    ɵɵproperty("name", ctx_r0.configModel.BtnCancelName);
  }
}
var FormFieldTxtInputTypesEnum;
(function(FormFieldTxtInputTypesEnum2) {
  FormFieldTxtInputTypesEnum2[FormFieldTxtInputTypesEnum2["Text"] = 0] = "Text";
  FormFieldTxtInputTypesEnum2[FormFieldTxtInputTypesEnum2["Password"] = 1] = "Password";
  FormFieldTxtInputTypesEnum2[FormFieldTxtInputTypesEnum2["Email"] = 2] = "Email";
  FormFieldTxtInputTypesEnum2[FormFieldTxtInputTypesEnum2["Number"] = 3] = "Number";
  FormFieldTxtInputTypesEnum2[FormFieldTxtInputTypesEnum2["Date"] = 4] = "Date";
  FormFieldTxtInputTypesEnum2[FormFieldTxtInputTypesEnum2["DateTime"] = 5] = "DateTime";
  FormFieldTxtInputTypesEnum2[FormFieldTxtInputTypesEnum2["CellPhone"] = 6] = "CellPhone";
})(FormFieldTxtInputTypesEnum || (FormFieldTxtInputTypesEnum = {}));
var FormFieldTypes;
(function(FormFieldTypes2) {
  FormFieldTypes2[FormFieldTypes2["TxtBox"] = 0] = "TxtBox";
  FormFieldTypes2[FormFieldTypes2["ComboBox"] = 1] = "ComboBox";
})(FormFieldTypes || (FormFieldTypes = {}));
var FormFieldCountryDataFormat;
(function(FormFieldCountryDataFormat2) {
  FormFieldCountryDataFormat2[FormFieldCountryDataFormat2["Estados_Unidos"] = 0] = "Estados_Unidos";
  FormFieldCountryDataFormat2[FormFieldCountryDataFormat2["Brasil"] = 1] = "Brasil";
})(FormFieldCountryDataFormat || (FormFieldCountryDataFormat = {}));
var FormFieldFontWeights;
(function(FormFieldFontWeights2) {
  FormFieldFontWeights2[FormFieldFontWeights2["Thin"] = 100] = "Thin";
  FormFieldFontWeights2[FormFieldFontWeights2["ExtraLight"] = 200] = "ExtraLight";
  FormFieldFontWeights2[FormFieldFontWeights2["Light"] = 300] = "Light";
  FormFieldFontWeights2[FormFieldFontWeights2["Regular"] = 400] = "Regular";
  FormFieldFontWeights2[FormFieldFontWeights2["Medium"] = 500] = "Medium";
  FormFieldFontWeights2[FormFieldFontWeights2["SemiBold"] = 600] = "SemiBold";
  FormFieldFontWeights2[FormFieldFontWeights2["Bold"] = 700] = "Bold";
  FormFieldFontWeights2[FormFieldFontWeights2["Extrabold"] = 800] = "Extrabold";
  FormFieldFontWeights2[FormFieldFontWeights2["Black"] = 900] = "Black";
})(FormFieldFontWeights || (FormFieldFontWeights = {}));
var FormFieldService = class _FormFieldService {
  constructor() {
    this.valueChanged = new Subject();
    this.alertState = new Subject();
    this.enterPressed = new Subject();
  }
  static {
    this.ɵfac = function FormFieldService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormFieldService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FormFieldService,
      factory: _FormFieldService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FormFieldModel = class {
  constructor() {
    this.name = "";
    this.field = {};
    this.internalCall = false;
  }
};
var FormFielTxtModel = class {
  constructor() {
    this.value = "";
  }
};
var FormFieldComboModel = class {
  constructor() {
    this.id = 0;
    this.value = "";
  }
};
var AlertTypesEnum;
(function(AlertTypesEnum2) {
  AlertTypesEnum2[AlertTypesEnum2["Done"] = 0] = "Done";
  AlertTypesEnum2[AlertTypesEnum2["Alert"] = 1] = "Alert";
  AlertTypesEnum2[AlertTypesEnum2["NotDone"] = 2] = "NotDone";
})(AlertTypesEnum || (AlertTypesEnum = {}));
var AlertService = class _AlertService {
  constructor() {
    this.wasOpenned = new Subject();
    this.wasClosed = new Subject();
  }
  static {
    this.ɵfac = function AlertService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AlertService,
      factory: _AlertService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var AlertModel = class {
  constructor() {
    this.alertsName_DontSet = "";
    this.alertsFatherName = "";
    this.top_DontSet = 0;
    this.left_DontSet = 0;
    this.text = "";
    this.isFixPosition = false;
    this.wasClosed_DontSet = false;
  }
};
var IconsEnum;
(function(IconsEnum2) {
  IconsEnum2["AddFile"] = "fi fi-rr-add-document";
  IconsEnum2["AddUser"] = "fi fi-sr-user-add";
  IconsEnum2["Alert"] = "fi fi-sr-exclamation";
  IconsEnum2["Bug"] = "fi fi-sr-bug-fix";
  IconsEnum2["Camera"] = "fi fi-rr-camera";
  IconsEnum2["Close"] = "fi fi-br-cross";
  IconsEnum2["Company"] = "fi fi-rs-building";
  IconsEnum2["Delete"] = "fi fi-sr-trash";
  IconsEnum2["Done_Fill"] = "fi fi-sr-octagon-check";
  IconsEnum2["Done_OutLine"] = "fi fi-rr-check-circle";
  IconsEnum2["Doing_Pending_Fill"] = "fi fi-ss-duration-alt";
  IconsEnum2["Doing_Pending_Outline"] = "fi fi-br-duration-alt";
  IconsEnum2["DowloadFile"] = "fi fi-sr-file-download";
  IconsEnum2["Edit"] = "fi fi-sr-pencil";
  IconsEnum2["EyeClose"] = "fi fi-ss-eye-crossed";
  IconsEnum2["EyeOpen"] = "fi fi-ss-eye";
  IconsEnum2["Hamburger"] = "fi fi-br-menu-burger";
  IconsEnum2["Home"] = "fi fi-sr-home";
  IconsEnum2["ItemClosed"] = "fi fi-tr-caret-down";
  IconsEnum2["ItemOpenned"] = "fi fi-rr-caret-down";
  IconsEnum2["Key"] = "fi fi-sr-key";
  IconsEnum2["Lubrificacao"] = "fi fi-rr-oil-can";
  IconsEnum2["NoteBook"] = "fi fi-br-notebook-alt";
  IconsEnum2["NotDone"] = "fi fi-sr-cross-circle";
  IconsEnum2["PageGoBack"] = "fi fi-rr-angle-circle-left";
  IconsEnum2["PDFFile"] = "fi fi-sr-file-pdf";
  IconsEnum2["Phone"] = "fi fi-sr-phone-call";
  IconsEnum2["Prazo_Atencao"] = "fi fi-ss-deadline";
  IconsEnum2["Refresh"] = "fi fi-rr-rotate-right";
  IconsEnum2["Rotas"] = "fi fi-br-route";
  IconsEnum2["Save_Outline"] = "fi fi-br-disk";
  IconsEnum2["User"] = "fi fi-sr-user";
})(IconsEnum || (IconsEnum = {}));
var AlertComponent = class _AlertComponent {
  constructor(cd) {
    this.cd = cd;
    this.Name = input.required();
    this._FontSize = input.required();
    this._FontFamily = input.required();
    this._FontWeight = input.required();
    this._FontColor = "white";
    this._Text = "";
    this._PositionY = 0;
    this._PositionX = 0;
    this._Icon = "";
    this.BackgroundColor = "";
    this._IconClose = "";
    this.isVisible = false;
    this.AlertService = inject(AlertService);
  }
  ngOnInit() {
    this._PositionX = 0;
    this._PositionY = 0;
    this._FontColor = "white";
    this._Icon = "";
    this.BackgroundColor = "";
    this._IconClose = "";
    this.AlertModel = new AlertModel();
    this._IconClose = IconsEnum.Close;
    this.startListenToAlertShowed();
  }
  OnClose() {
    this.isVisible = false;
    this.AlertModel.alertsName_DontSet = this.Name();
    this.AlertModel.wasClosed_DontSet = true;
    this.AlertService.wasClosed.next(this.AlertModel);
  }
  startListenToAlertShowed() {
    this.AlertService.wasOpenned.subscribe((AlertModel2) => {
      if (this.Name() == AlertModel2.alertsName_DontSet) {
        this._Text = AlertModel2.text;
        this.AlertType = AlertModel2.type;
        this.isFixPosition = AlertModel2.isFixPosition;
        this.isVisible = true;
        switch (this.AlertType) {
          case AlertTypesEnum.Done:
            this._Icon = IconsEnum.Done_Fill;
            this.BackgroundColor = "#008B10";
            this._FontColor = "white";
            break;
          case AlertTypesEnum.Alert:
            this._Icon = IconsEnum.Alert;
            this.BackgroundColor = "#DFCD00";
            this._FontColor = "black";
            break;
          case AlertTypesEnum.NotDone:
            this._Icon = IconsEnum.NotDone;
            this.BackgroundColor = "#D40000";
            this._FontColor = "white";
            break;
        }
        if (this.isFixPosition) {
        } else {
          this._PositionY = AlertModel2.top_DontSet;
          this._PositionX = AlertModel2.left_DontSet;
        }
      }
    });
  }
  static {
    this.ɵfac = function AlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AlertComponent,
      selectors: [["app-alert"]],
      inputs: {
        Name: [1, "Name"],
        _FontSize: [1, "_FontSize"],
        _FontFamily: [1, "_FontFamily"],
        _FontWeight: [1, "_FontWeight"]
      },
      decls: 7,
      vars: 55,
      consts: [[1, "container"], [1, "body"], [3, "click"], [1, "container-text"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "i", 2);
          ɵɵlistener("click", function AlertComponent_Template_i_click_2_listener() {
            return ctx.OnClose();
          });
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 3);
          ɵɵelement(4, "i");
          ɵɵelementStart(5, "p");
          ɵɵtext(6);
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          ɵɵstyleProp("display", ctx.isFixPosition ? "flex" : "")("position", ctx.isFixPosition ? "fixed" : "absolute")("z-index", 1e9)("width", ctx.isFixPosition ? "100%" : "")("padding-top", ctx.isFixPosition ? "100px" : "0")("top", ctx.isFixPosition ? "0px" : ctx._PositionY + "px")("left", ctx.isFixPosition ? "0px" : ctx._PositionX + "px");
          ɵɵadvance();
          ɵɵstyleProp("background-color", ctx.BackgroundColor)("border-radius", ctx._FontSize() * 0.5 + "px")("color", ctx._FontColor)("display", ctx.isVisible ? "" : "none");
          ɵɵadvance();
          ɵɵclassMap(ctx._IconClose);
          ɵɵstyleProp("font-size", ctx._FontSize() * 1 + "px")("padding-top", ctx._FontSize() * 0.6 + "px")("padding-right", ctx._FontSize() * 0.6 + "px");
          ɵɵadvance();
          ɵɵstyleProp("margin-right", ctx._FontSize() + "px")("padding-top", ctx._FontSize() * 0.4 + "px")("padding-bottom", ctx._FontSize() * 1 + "px")("padding-right", ctx._FontSize() * 1 + "px")("padding-left", ctx._FontSize() * 1 + "px");
          ɵɵadvance();
          ɵɵclassMap(ctx._Icon);
          ɵɵstyleProp("font-size", ctx._FontSize() * 1.2 + "px")("margin-right", ctx._FontSize() * 0.5 + "px");
          ɵɵadvance();
          ɵɵstyleProp("font-family", ctx._FontFamily())("font-weight", ctx._FontWeight())("font-size", ctx._FontSize() + "px");
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx._Text, " ");
        }
      },
      styles: [".container[_ngcontent-%COMP%]{align-items:center;justify-content:center;height:auto}.container[_ngcontent-%COMP%] > .body[_ngcontent-%COMP%]{width:fit-content;height:auto;max-width:70vw}.container[_ngcontent-%COMP%] > .body[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{display:block;line-height:0px;text-align:end}.container[_ngcontent-%COMP%] > .body[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%] > .body[_ngcontent-%COMP%] > .container-text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:auto}.container[_ngcontent-%COMP%] > .body[_ngcontent-%COMP%] > .container-text[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{line-height:0px;text-align:center}.container[_ngcontent-%COMP%] > .body[_ngcontent-%COMP%] > .container-text[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0;text-align:justify;line-height:normal}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertComponent, [{
    type: Component,
    args: [{
      selector: "app-alert",
      standalone: true,
      imports: [],
      template: `\r
<div class="container"\r
[style.display]="isFixPosition ? 'flex' : ''"\r
[style.position]="isFixPosition ? 'fixed' : 'absolute'"\r
[style.z-index]="1000000000"\r
[style.width]="isFixPosition ? '100%' : ''"\r
[style.padding-top]=" isFixPosition ? '100px' : '0'"\r
[style.top]="isFixPosition?'0px':_PositionY+'px'"\r
[style.left]="isFixPosition?'0px':_PositionX+'px'"\r
>\r
    <div class="body"\r
    [style.background-color]="BackgroundColor"\r
    [style.border-radius]="(_FontSize()*0.5) + 'px'"\r
    [style.color]="_FontColor"\r
    [style.display]="isVisible ? '' : 'none'"\r
\r
    >\r
    \r
        <i class="{{_IconClose}}"\r
        [style.font-size]="(_FontSize()*1) + 'px'"\r
        [style.padding-top]="(_FontSize()*0.6) + 'px'"\r
        [style.padding-right]="(_FontSize()*0.6) + 'px'"\r
        (click)="OnClose()"\r
        >\r
    \r
        </i>\r
    \r
        <div class="container-text"\r
        [style.margin-right]="_FontSize() + 'px'"\r
        [style.padding-top]="(_FontSize()*0.4) + 'px'"\r
        [style.padding-bottom]="(_FontSize()*1) + 'px'"\r
        [style.padding-right]="(_FontSize()*1) + 'px'"\r
        [style.padding-left]="(_FontSize()*1) + 'px'"\r
        >\r
            <i class="{{_Icon}}"\r
            [style.font-size]="(_FontSize()*1.2) + 'px'"\r
            [style.margin-right]="(_FontSize()*0.5) + 'px'"\r
            >\r
            </i>\r
\r
            <p\r
            [style.font-family]="_FontFamily()"\r
            [style.font-weight]="_FontWeight()"\r
            [style.font-size]="_FontSize() + 'px'"\r
            >\r
                {{_Text}}\r
            </p>\r
        </div>\r
    </div>\r
</div>\r
\r
`,
      styles: [".container{align-items:center;justify-content:center;height:auto}.container>.body{width:fit-content;height:auto;max-width:70vw}.container>.body>i{display:block;line-height:0px;text-align:end}.container>.body>i:hover{cursor:pointer}.container>.body>.container-text{display:flex;align-items:center;justify-content:center;height:auto}.container>.body>.container-text>i{line-height:0px;text-align:center}.container>.body>.container-text>p{margin:0;text-align:justify;line-height:normal}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], null);
})();
var FormFieldComponent = class _FormFieldComponent {
  constructor(element, cd) {
    this.element = element;
    this.cd = cd;
    this._Icon = input.required();
    this.Name = input.required();
    this._placeHolderType = "";
    this._placeHolderValue = input.required();
    this._PasswordIcon = IconsEnum.EyeOpen;
    this._IconColor = input.required();
    this._FontColor = input.required();
    this._FontSize = input.required();
    this._FontFamily = input.required();
    this._FontWeight = input.required();
    this._Options = input.required();
    this._Width = input.required();
    this._Height = input.required();
    this.TxtInputType = input.required();
    this.IconEnabled = input.required();
    this.CountryDataFormat = input.required();
    this.text = "";
    this._AlertState = false;
    this.FieldType = input.required();
    this.Mask = "";
    this.Prefixo = "";
    this.Sufixo = "";
    this.NumberMaskSufix = input.required();
    this.showMaskTyped = false;
    this.thousandSeparator = ".";
    this.NCasasDecimais = input.required();
    this.FormFieldModel = new FormFieldModel();
    this.FormFielTxtModel = new FormFielTxtModel();
    this.FormFieldComboModel = new FormFieldComboModel();
    this.AlertTypesEnum = AlertTypesEnum;
    this.IconsEnum = IconsEnum;
    this.FormFieldTxtInputTypesEnum = FormFieldTxtInputTypesEnum;
    this.FormFieldDataFormat = FormFieldCountryDataFormat;
    this.FormFieldTypes = FormFieldTypes;
    this.FormFieldService = inject(FormFieldService);
    this.AlertService = inject(AlertService);
  }
  ngOnInit() {
    this._placeHolderType = "";
    this._AlertState = false;
    this.FormFieldModel.name = "";
    this.FormFieldModel.name = this.Name();
    this.startListenToAlertState();
    this.startListenToTextChange();
    if (this.FieldType() == FormFieldTypes.TxtBox) this.configMask();
  }
  onTxtChange() {
    this.FormFieldModel.name = this.Name();
    this.FormFieldModel.field = this.FormFielTxtModel;
    this.FormFieldModel.internalCall = true;
    this.FormFieldService.valueChanged.next(this.FormFieldModel);
  }
  onComboChange() {
    this.FormFieldModel.name = this.Name();
    this.FormFieldComboModel.id = this.getIDFromOption(this.FormFieldComboModel.value);
    this.FormFieldModel.field = this.FormFieldComboModel;
    this.FormFieldModel.internalCall = true;
    this.FormFieldService.valueChanged.next(this.FormFieldModel);
  }
  startListenToTextChange() {
    this.FormFieldService.valueChanged.subscribe((model) => {
      if (model.name == this.Name() && !model.internalCall) {
        if (this.FieldType() == FormFieldTypes.TxtBox) {
          this.FormFielTxtModel.value = model.field.value;
          this.onTxtChange();
        }
        if (this.FieldType() == FormFieldTypes.ComboBox) {
          for (let i = 0; i < this._Options().length; i++) {
            if (this._Options()[i].value.includes(model.field.value)) {
              this.FormFieldComboModel.value = this._Options()[i].value;
              break;
            }
            this.FormFieldComboModel.value = "";
          }
          this.onComboChange();
        }
      }
    });
  }
  startListenToAlertState() {
    this.FormFieldService.alertState.subscribe((callerData) => {
      if (this.Name() == callerData.alertsFatherName) {
        callerData.top_DontSet = this.element.nativeElement.getBoundingClientRect().top - this.element.nativeElement.offsetHeight * 1.5;
        callerData.left_DontSet = this.element.nativeElement.getBoundingClientRect().left;
        callerData.alertsName_DontSet = this.FormFieldModel.name + "-alert";
        this.AlertService.wasOpenned.next(callerData);
      }
    });
  }
  togglePasswordView() {
    if (this._PasswordIcon == IconsEnum.EyeClose) {
      this._PasswordIcon = IconsEnum.EyeOpen;
      this._placeHolderType = "password";
    } else {
      this._PasswordIcon = IconsEnum.EyeClose;
      this._placeHolderType = "text";
    }
  }
  configMask() {
    switch (this.TxtInputType()) {
      case FormFieldTxtInputTypesEnum.Text:
        this._placeHolderType = "text";
        this.Prefixo = "";
        this.Mask = "";
        this.Sufixo = "";
        this.showMaskTyped = false;
        break;
      case FormFieldTxtInputTypesEnum.Password:
        this._placeHolderType = "password";
        this.Prefixo = "";
        this.Mask = "";
        this.Sufixo = "";
        this.showMaskTyped = false;
        break;
      case FormFieldTxtInputTypesEnum.Email:
        this._placeHolderType = "text";
        this.Prefixo = "";
        this.Mask = "";
        this.Sufixo = "";
        this.showMaskTyped = false;
        break;
      case FormFieldTxtInputTypesEnum.Number:
        this._placeHolderType = "text";
        this.Prefixo = "";
        this.Mask = "separator." + this.NCasasDecimais().toString();
        this.Sufixo = this.NumberMaskSufix();
        this.showMaskTyped = false;
        if (this.CountryDataFormat() == FormFieldCountryDataFormat.Brasil) {
          this.thousandSeparator = ".";
        }
        if (this.CountryDataFormat() == FormFieldCountryDataFormat.Estados_Unidos) {
          this.thousandSeparator = ",";
        }
        break;
      case FormFieldTxtInputTypesEnum.Date:
        this._placeHolderType = "date";
        this.Prefixo = "";
        this.Mask = "";
        this.Sufixo = "";
        this.showMaskTyped = true;
        break;
      case FormFieldTxtInputTypesEnum.DateTime:
        this._placeHolderType = "datetime-local";
        this.Prefixo = "";
        this.Mask = "";
        this.Sufixo = "";
        this.showMaskTyped = true;
        break;
      case FormFieldTxtInputTypesEnum.CellPhone:
        this._placeHolderType = "tel";
        this.showMaskTyped = true;
        if (this.CountryDataFormat() == FormFieldCountryDataFormat.Brasil) {
          this.Prefixo = "+55 ";
          this.Mask = "(00) 0 0000-0000";
        }
        if (this.CountryDataFormat() == FormFieldCountryDataFormat.Estados_Unidos) {
          this.Prefixo = "+1 ";
          this.Mask = "(000) 000-0000";
        }
        break;
    }
  }
  getIDFromOption(valueText) {
    for (var i = 0; i < this._Options().length; i++) {
      if (valueText == this._Options()[i].value) return this._Options()[i].id;
    }
    return 0;
  }
  enterPressed() {
    this.FormFieldModel.name = this.Name();
    this.FormFieldService.enterPressed.next(this.FormFieldModel);
  }
  static {
    this.ɵfac = function FormFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormFieldComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormFieldComponent,
      selectors: [["app-form-field"]],
      inputs: {
        _Icon: [1, "_Icon"],
        Name: [1, "Name"],
        _placeHolderValue: [1, "_placeHolderValue"],
        _IconColor: [1, "_IconColor"],
        _FontColor: [1, "_FontColor"],
        _FontSize: [1, "_FontSize"],
        _FontFamily: [1, "_FontFamily"],
        _FontWeight: [1, "_FontWeight"],
        _Options: [1, "_Options"],
        _Width: [1, "_Width"],
        _Height: [1, "_Height"],
        TxtInputType: [1, "TxtInputType"],
        IconEnabled: [1, "IconEnabled"],
        CountryDataFormat: [1, "CountryDataFormat"],
        FieldType: [1, "FieldType"],
        NumberMaskSufix: [1, "NumberMaskSufix"],
        NCasasDecimais: [1, "NCasasDecimais"]
      },
      decls: 3,
      vars: 5,
      consts: [[1, "container", 3, "width", "height", "border-radius", "ngStyle"], [1, "container", 3, "width", "height", "padding", "border-radius", "ngStyle"], [3, "Name", "_FontSize", "_FontFamily", "_FontWeight"], [1, "container", 3, "ngStyle"], [3, "ngModelChange", "keydown.enter", "ngModel", "prefix", "suffix", "mask", "showMaskTyped", "allowNegativeNumbers", "thousandSeparator", "type", "name", "placeholder"], [3, "click"], [3, "ngModelChange", "ngModel"]],
      template: function FormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, FormFieldComponent_Conditional_0_Template, 4, 55, "div", 0)(1, FormFieldComponent_Conditional_1_Template, 4, 24, "div", 1);
          ɵɵelement(2, "app-alert", 2);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.FieldType() == ctx.FormFieldTypes.TxtBox ? 0 : 1);
          ɵɵadvance(2);
          ɵɵproperty("Name", ctx.Name() + "-alert")("_FontSize", ctx._FontSize())("_FontFamily", ctx._FontFamily())("_FontWeight", ctx._FontWeight());
        }
      },
      dependencies: [FormsModule, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, CommonModule, NgStyle, AlertComponent, NgxMaskDirective],
      styles: ["[_nghost-%COMP%]{display:inline-block}.container[_ngcontent-%COMP%]{display:flex;align-items:center;box-sizing:border-box}i[_ngcontent-%COMP%]{line-height:0px}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{background-color:transparent;border:none;padding:0}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]:focus{outline:none;box-sizing:content-box}select[_ngcontent-%COMP%]{height:100%}select[_ngcontent-%COMP%]:hover{cursor:pointer}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldComponent, [{
    type: Component,
    args: [{
      selector: "app-form-field",
      standalone: true,
      imports: [FormsModule, CommonModule, AlertComponent, NgxMaskDirective],
      template: `\r
@if(FieldType() == FormFieldTypes.TxtBox){\r
\r
    <div class="container" \r
    [style.width]="_Width() +'px'"\r
    [style.height]="_Height() +'px'"\r
    [style.border-radius]="(_FontSize()*0.3125) +'px'"\r
    [ngStyle]="\r
    {'box-shadow':'\r
    rgb(204, 219, 232)'+ (_FontSize()*0.1875) + 'px '+ (_FontSize()*0.1875)  + 'px '+ (_FontSize()*0.375) + 'px 0px inset' + ',' + \r
    'rgba(255, 255, 255, 0.5)'+ (_FontSize()*-0.1875) + 'px '+ (_FontSize()*-0.1875)  + 'px '+ (_FontSize()*0.375) + 'px '+ (_FontSize()*0.0625) + 'px inset'\r
    }\r
    ">\r
\r
        <i class="{{_Icon()}} icon"\r
        [style.color]="_IconColor()"\r
        [style.font-size]="(_FontSize()*1.25) +'px'"\r
        [style.margin-left]="(_FontSize()*0.5625) +'px'"\r
        [style.display]="IconEnabled() ? '' : 'none'"\r
        ></i>\r
\r
        <input\r
\r
            [(ngModel)]="this.FormFielTxtModel.value"\r
            (ngModelChange)="onTxtChange()"\r
            prefix="{{Prefixo}}"\r
            suffix="{{Sufixo}}"\r
            mask="{{Mask}}"\r
            [showMaskTyped]="showMaskTyped"\r
            [allowNegativeNumbers]="TxtInputType() == FormFieldTxtInputTypesEnum.Number ? true : false"\r
            thousandSeparator="{{thousandSeparator}}"\r
            (keydown.enter)="enterPressed()"\r
\r
            type="{{_placeHolderType}}"\r
            name="{{Name()}}"\r
            placeholder="{{_placeHolderValue()}}"\r
            [style.color]="_FontColor()"\r
            [style.font-family]="_FontFamily()"\r
            [style.font-size]="_FontSize()+'px'"\r
            [style.font-weight]="_FontWeight()"\r
            [style.width]="(_FontSize()*15.3125) +'px'"\r
            [style.margin-left]="(_FontSize()*0.500) +'px'"\r
        >\r
\r
        <i class="{{_PasswordIcon}}"\r
        (click)="togglePasswordView()"\r
        [style.cursor]="'pointer'"\r
        [style.color]="_IconColor()"\r
        [style.font-size]="(_FontSize()*1.25) +'px'"\r
        [style.margin-right]="(_FontSize()*0.5625) +'px'"\r
        [style.display]="TxtInputType() == FormFieldTxtInputTypesEnum.Password ? '' : 'none'"\r
        ></i>\r
    </div>\r
}@else {\r
\r
    <div class="container"\r
    [style.width]="_Width() +'px'"\r
    [style.height]="_Height() +'px'"\r
    [style.padding]="(_FontSize()*0.4) +'px' + ' ' + (_FontSize()*0.8) +'px'" \r
    [style.border-radius]="(_FontSize()*0.3125) +'px'"\r
    [ngStyle]="\r
    {'box-shadow':'\r
    rgb(204, 219, 232)'+ (_FontSize()*0.1875) + 'px '+ (_FontSize()*0.1875)  + 'px '+ (_FontSize()*0.375) + 'px 0px inset' + ',' + \r
    'rgba(255, 255, 255, 0.5)'+ (_FontSize()*-0.1875) + 'px '+ (_FontSize()*-0.1875)  + 'px '+ (_FontSize()*0.375) + 'px '+ (_FontSize()*0.0625) + 'px inset'\r
    }\r
    ">\r
        <select\r
        [(ngModel)]="this.FormFieldComboModel.value"\r
        (ngModelChange)="onComboChange()"\r
        [style.color]="_FontColor()"\r
        [style.font-family]="_FontFamily()"\r
        [style.font-size]="_FontSize()+'px'"\r
        [style.font-weight]="_FontWeight()"\r
        [style.width]="_Width() +'px'"\r
        [style.height]="_Height() +'px'"\r
\r
        >\r
            @for(option of _Options() ; track $index ){\r
                <option>{{option.value}}</option>\r
            }\r
        </select>\r
    </div>\r
}\r
\r
\r
<app-alert\r
[Name]="Name()+'-alert'"\r
[_FontSize]="_FontSize()"\r
[_FontFamily]="_FontFamily()"\r
[_FontWeight]="_FontWeight()"\r
/>\r
\r
\r
\r
\r
`,
      styles: [":host{display:inline-block}.container{display:flex;align-items:center;box-sizing:border-box}i{line-height:0px}input,select{background-color:transparent;border:none;padding:0}input,select:focus{outline:none;box-sizing:content-box}select{height:100%}select:hover{cursor:pointer}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var ButtonTypeEnum;
(function(ButtonTypeEnum2) {
  ButtonTypeEnum2[ButtonTypeEnum2["Normal"] = 0] = "Normal";
  ButtonTypeEnum2[ButtonTypeEnum2["Outline"] = 1] = "Outline";
})(ButtonTypeEnum || (ButtonTypeEnum = {}));
var ButtonIconPositionEnum;
(function(ButtonIconPositionEnum2) {
  ButtonIconPositionEnum2[ButtonIconPositionEnum2["Top"] = 0] = "Top";
  ButtonIconPositionEnum2[ButtonIconPositionEnum2["Right"] = 1] = "Right";
  ButtonIconPositionEnum2[ButtonIconPositionEnum2["Bottom"] = 2] = "Bottom";
  ButtonIconPositionEnum2[ButtonIconPositionEnum2["Left"] = 3] = "Left";
})(ButtonIconPositionEnum || (ButtonIconPositionEnum = {}));
var ButtonService = class _ButtonService {
  constructor() {
    this.click = new Subject();
    this.stateChanged = new Subject();
  }
  static {
    this.ɵfac = function ButtonService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ButtonService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ButtonService,
      factory: _ButtonService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ButtonConfigModel = class {
  constructor(params) {
    this.Name = params.Name;
    this.Width = params.Width;
    this.Height = params.Height;
    this.ButtonType = params.ButtonType;
    this.BorderRadius = params.BorderRadius;
    this.IconEnabled = params.IconEnabled;
    this.Icon = params.Icon;
    this.IconFontSize = params.IconFontSize;
    this.IconDistanceFromtext = params.IconDistanceFromtext;
    this.IconColorNormal = params.IconColorNormal;
    this.IconColorHover = params.IconColorHover;
    this.IconOrientation = params.IconOrientation;
    this.TextEnabled = params.TextEnabled;
    this.Text = params.Text;
    this.TextFontSize = params.TextFontSize;
    this.TextFontWeight = params.TextFontWeight;
    this.TextFontFamily = params.TextFontFamily;
    this.TextColorNormal = params.TextColorNormal;
    this.TextColorHover = params.TextColorHover;
    this.BackGroundColorNormal = params.BackGroundColorNormal;
    this.BackGroundColorHover = params.BackGroundColorHover;
    this.LoadingState = params.LoadingState;
    this.EnabledState = params.EnabledState;
    this.OutlineBorderSize = params.OutlineBorderSize;
  }
};
var ButtonComponent = class _ButtonComponent {
  constructor(element) {
    this.element = element;
    this.name = input.required();
    this.ButtonService = inject(ButtonService);
    this.AlertService = inject(AlertService);
    this.AlertModel = new AlertModel();
    this.AlertTypesEnum = AlertTypesEnum;
    this.ButtonTypeEnum = ButtonTypeEnum;
    this.configModel = new ButtonConfigModel({
      Name: ""
    });
  }
  ngOnInit() {
    this._name = this.name();
    this.startListenToStateChanged();
  }
  OnMouseOver() {
    this._BackGroundColor = this.BackGroundColorHover ?? "white";
    this._IconColor = this.IconColorHover ?? "white";
    this._TextColor = this.TextColorHover ?? "white";
  }
  OnMouseOut() {
    this._BackGroundColor = this.BackGroundColorNormal ?? "white";
    this._IconColor = this.IconColorNormal ?? "white";
    this._TextColor = this.TextColorNormal ?? "white";
  }
  OnClick() {
    this.ButtonService.click.next(this._name);
  }
  startListenToStateChanged() {
    this.ButtonService.stateChanged.subscribe((config) => {
      if (config.Name == this.name()) {
        this.Width = config.Width ?? this.Width;
        this.Height = config.Height ?? this.Height;
        this.ButtonType = config.ButtonType ?? this.ButtonType;
        this.BorderRadius = config.BorderRadius ?? this.BorderRadius;
        this.IconEnabled = config.IconEnabled ?? this.IconEnabled;
        this.Icon = config.Icon ?? this.Icon;
        this.IconFontSize = config.IconFontSize ?? this.IconFontSize;
        this.IconDistanceFromtext = config.IconDistanceFromtext ?? this.IconDistanceFromtext;
        this.IconColorNormal = config.IconColorNormal ?? this.IconColorNormal;
        this.IconColorHover = config.IconColorHover ?? this.IconColorHover;
        this.IconOrientation = config.IconOrientation ?? this.IconOrientation;
        this.TextEnabled = config.TextEnabled ?? this.TextEnabled;
        this.Text = config.Text ?? this.Text;
        this.TextFontSize = config.TextFontSize ?? this.TextFontSize;
        this.TextFontWeight = config.TextFontWeight ?? this.TextFontWeight;
        this.TextFontFamily = config.TextFontFamily ?? this.TextFontFamily;
        this.TextColorNormal = config.TextColorNormal ?? this.TextColorNormal;
        this.TextColorHover = config.TextColorHover ?? this.TextColorHover;
        this.BackGroundColorNormal = config.BackGroundColorNormal ?? this.BackGroundColorNormal;
        this.BackGroundColorHover = config.BackGroundColorHover ?? this.BackGroundColorHover;
        this.LoadingState = config.LoadingState ?? this.LoadingState;
        this.EnabledState = config.EnabledState ?? this.EnabledState;
        this.OutlineBorderSize = config.OutlineBorderSize ?? this.OutlineBorderSize;
        this.defineIconOrientation();
        this.OnMouseOut();
      }
    });
  }
  defineIconOrientation() {
    switch (this.IconOrientation) {
      case ButtonIconPositionEnum.Top:
        this._IconOrientation = "column";
        this._IconDistanceFromTextObject = this.TextEnabled ? {
          "margin-bottom": (this.IconDistanceFromtext ?? 5).toString() + "px"
        } : {};
        break;
      case ButtonIconPositionEnum.Right:
        this._IconOrientation = "row-reverse";
        this._IconDistanceFromTextObject = this.TextEnabled ? {
          "margin-left": (this.IconDistanceFromtext ?? 5).toString() + "px"
        } : {};
        break;
      case ButtonIconPositionEnum.Bottom:
        this._IconOrientation = "column-reverse";
        this._IconDistanceFromTextObject = this.TextEnabled ? {
          "margin-top": (this.IconDistanceFromtext ?? 5).toString() + "px"
        } : {};
        break;
      case ButtonIconPositionEnum.Left:
        this._IconDistanceFromTextObject = this.TextEnabled ? {
          "margin-right": (this.IconDistanceFromtext ?? 5).toString() + "px"
        } : {};
        break;
    }
  }
  static {
    this.ɵfac = function ButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ButtonComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ButtonComponent,
      selectors: [["app-button"]],
      inputs: {
        name: [1, "name"]
      },
      decls: 5,
      vars: 51,
      consts: [[3, "mouseover", "mouseout", "click"], [3, "ngStyle"], [1, "loader"]],
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "button", 0);
          ɵɵlistener("mouseover", function ButtonComponent_Template_button_mouseover_0_listener() {
            return ctx.OnMouseOver();
          })("mouseout", function ButtonComponent_Template_button_mouseout_0_listener() {
            return ctx.OnMouseOut();
          })("click", function ButtonComponent_Template_button_click_0_listener() {
            return ctx.OnClick();
          });
          ɵɵelement(1, "i", 1)(2, "i", 2);
          ɵɵelementStart(3, "p");
          ɵɵtext(4);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_6_0;
          let tmp_19_0;
          ɵɵstyleProp("background-color", ctx.ButtonType == ctx.ButtonTypeEnum.Outline ? ctx.EnabledState ? "transparent" : "gray" : ctx.EnabledState ? ctx._BackGroundColor : "gray")("border-radius", ((tmp_1_0 = ctx.BorderRadius) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : 5).toString() + "px")("border", ctx.ButtonType == ctx.ButtonTypeEnum.Outline && ctx.EnabledState ? `${ctx.OutlineBorderSize}px solid ${ctx._BackGroundColor}` : "")("width", ctx.Width + "px")("height", ctx.Height + "px")("flex-direction", ctx._IconOrientation)("cursor", ((tmp_6_0 = ctx.EnabledState) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : true) ? "pointer" : "default")("--transition", !ctx.EnabledState ? "0s" : "0.05s")("--transformHover", !ctx.EnabledState ? "1" : "1.05")("--transformActive", !ctx.EnabledState ? "1" : "0.95");
          ɵɵadvance();
          ɵɵclassMap(ctx.Icon);
          ɵɵstyleProp("color", ctx.EnabledState ? ctx._IconColor : "white")("font-size", ctx.IconFontSize + "px")("display", ctx.IconEnabled && !ctx.LoadingState ? "" : "none");
          ɵɵproperty("ngStyle", ctx._IconDistanceFromTextObject);
          ɵɵadvance();
          ɵɵstyleProp("width", ctx.IconFontSize + "px")("height", ctx.IconFontSize + "px")("display", ctx.LoadingState ? "inline-block" : "none")("--loaderColor", ctx._TextColor)("--loaderBorderSize", ((tmp_19_0 = ctx.IconFontSize) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : 12) * 0.15 + "px");
          ɵɵadvance();
          ɵɵstyleProp("font-size", ctx.TextFontSize + "px")("font-family", ctx.TextFontFamily)("font-weight", ctx.TextFontWeight)("color", ctx.EnabledState ? ctx._TextColor : "white")("display", ctx.TextEnabled && !ctx.LoadingState ? "" : "none");
          ɵɵadvance();
          ɵɵtextInterpolate1("", ctx.Text, " ");
        }
      },
      dependencies: [CommonModule, NgStyle],
      styles: ["[_nghost-%COMP%]{display:inline-block;vertical-align:top;line-height:0px;--transition: .05s;--transformHover:1.05;--transformActive:.95}button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:none;padding:0;text-decoration:none;box-shadow:1px 1px 3px 1px #00000059;box-sizing:border-box}button[_ngcontent-%COMP%]:hover{transition:var(--transition);transform:scale(var(--transformHover))}button[_ngcontent-%COMP%]:active{transform:scale(var(--transformActive))}button[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{line-height:0px}button[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0;line-height:0px}button[_ngcontent-%COMP%] > .loader[_ngcontent-%COMP%]{border:var(--loaderBorderSize) solid var(--loaderColor);border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;animation:_ngcontent-%COMP%_rotation 1s linear infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      selector: "app-button",
      standalone: true,
      imports: [CommonModule],
      template: `<button\r
[style.background-color]="\r
ButtonType == ButtonTypeEnum.Outline \r
? EnabledState ? 'transparent' : 'gray'\r
: EnabledState ? _BackGroundColor : 'gray'"\r
[style.border-radius]="(BorderRadius ?? 5).toString()+'px'"\r
[style.border]="ButtonType == ButtonTypeEnum.Outline && EnabledState ? \`\${OutlineBorderSize}px solid \${_BackGroundColor}\` : '' "\r
[style.width]="Width + 'px'"\r
[style.height]="Height + 'px'"\r
[style.flex-direction]="this._IconOrientation"\r
[style.cursor]="(EnabledState ?? true) ? 'pointer' : 'default'"\r
[style.--transition]="!EnabledState ? '0s' : '0.05s'"\r
[style.--transformHover]="!EnabledState ? '1' : '1.05'"\r
[style.--transformActive]="!EnabledState ? '1' : '0.95'"\r
(mouseover)="OnMouseOver()"\r
(mouseout)="OnMouseOut()"\r
(click)="OnClick()"\r
\r
>\r
        <i\r
            class="{{Icon}}"\r
            [style.color]="EnabledState ? _IconColor : 'white'"\r
            [style.font-size]="IconFontSize +'px'"\r
            [style.display]="IconEnabled && !LoadingState ? '' : 'none'"\r
            [ngStyle]="_IconDistanceFromTextObject"\r
            >\r
        </i>\r
\r
        <i\r
        class="loader"\r
        [style.width]="IconFontSize  +'px'"\r
        [style.height]="IconFontSize +'px'"\r
        [style.display]="LoadingState ? 'inline-block' : 'none'"\r
        [style.--loaderColor]="_TextColor"\r
        [style.--loaderBorderSize]="((IconFontSize ?? 12) *0.15)+'px'"\r
        >\r
        </i>\r
\r
        <p\r
        [style.font-size]="TextFontSize +'px'"\r
        [style.font-family]="TextFontFamily"\r
        [style.font-weight]="TextFontWeight"\r
        [style.color]="EnabledState ? _TextColor : 'white'"\r
        [style.display]="TextEnabled && !LoadingState ? '' : 'none'"\r
        >{{Text}}\r
        </p>\r
\r
</button>\r
    \r
`,
      styles: [":host{display:inline-block;vertical-align:top;line-height:0px;--transition: .05s;--transformHover:1.05;--transformActive:.95}button{display:flex;align-items:center;justify-content:center;border:none;padding:0;text-decoration:none;box-shadow:1px 1px 3px 1px #00000059;box-sizing:border-box}button:hover{transition:var(--transition);transform:scale(var(--transformHover))}button:active{transform:scale(var(--transformActive))}button>i{line-height:0px}button>p{margin:0;line-height:0px}button>.loader{border:var(--loaderBorderSize) solid var(--loaderColor);border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var ListItemService = class _ListItemService {
  constructor() {
    this.stateChanged = new Subject();
    this.onClick = new Subject();
  }
  static {
    this.ɵfac = function ListItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListItemService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ListItemService,
      factory: _ListItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ListItemTypeEnum;
(function(ListItemTypeEnum2) {
  ListItemTypeEnum2["Normal"] = "row";
  ListItemTypeEnum2["Reverse"] = "row-reverse";
})(ListItemTypeEnum || (ListItemTypeEnum = {}));
var ListItemTextAlignEnum;
(function(ListItemTextAlignEnum2) {
  ListItemTextAlignEnum2["Left"] = "left";
  ListItemTextAlignEnum2["Center"] = "center";
  ListItemTextAlignEnum2["Right"] = "right";
})(ListItemTextAlignEnum || (ListItemTextAlignEnum = {}));
var ListItemItemNumberPositionEnum;
(function(ListItemItemNumberPositionEnum2) {
  ListItemItemNumberPositionEnum2["Top"] = "flex-start";
  ListItemItemNumberPositionEnum2["Middle"] = "center";
})(ListItemItemNumberPositionEnum || (ListItemItemNumberPositionEnum = {}));
var ListItemComponent = class _ListItemComponent {
  constructor() {
    this._mouseover = false;
    this.ListItemTypesEnum = ListItemTypeEnum;
    this.ListItemItemNumberPositionEnum = ListItemItemNumberPositionEnum;
    this.ListItemService = inject(ListItemService);
    this.name = input.required();
  }
  ngOnInit() {
    this.startListenToStateChanged();
  }
  onClick() {
    this.ListItemService.onClick.next(this.name());
  }
  startListenToStateChanged() {
    this.ListItemService.stateChanged.subscribe((config) => {
      if (config.Name === this.name()) {
        this.ListItemType = config.ListItemType ?? this.ListItemType;
        this.OpenState = config.OpenState ?? this.OpenState;
        this.Width = config.Width ?? this.Width;
        this.Height = config.Height ?? this.Height;
        this.BorderRadius = config.BorderRadius ?? this.BorderRadius;
        this.ItemNumberIconContainerWidth = config.ItemNumberIconContainerWidth ?? this.ItemNumberIconContainerWidth;
        this.ItemNumberIconBackGroundColorNormal = config.ItemNumberIconBackGroundColorNormal ?? this.ItemNumberIconBackGroundColorNormal;
        this.ItemNumberIconBackGroundColorHover = config.ItemNumberIconBackGroundColorHover ?? this.ItemNumberIconBackGroundColorHover;
        this.TitlesContainerWidth = config.TitlesContainerWidth ?? this.TitlesContainerWidth;
        this.TitlesBackGroundColorNormal = config.TitlesBackGroundColorNormal ?? this.TitlesBackGroundColorNormal;
        this.TitlesBackGroundColorHover = config.TitlesBackGroundColorHover ?? this.TitlesBackGroundColorHover;
        this.TitlesContainerPadding = config.TitlesContainerPadding ?? this.TitlesContainerPadding;
        this.TriggerIconContainerWidth = config.TriggerIconContainerWidth ?? this.TriggerIconContainerWidth;
        this.TriggerIconBackGroundColorNormal = config.TriggerIconBackGroundColorNormal ?? this.TriggerIconBackGroundColorNormal;
        this.TriggerIconBackGroundColorHover = config.TriggerIconBackGroundColorHover ?? this.TriggerIconBackGroundColorHover;
        this.ItemNumberEnabled = config.ItemNumberEnabled ?? this.ItemNumberEnabled;
        this.ItemNumberText = config.ItemNumberText ?? this.ItemNumberText;
        this.ItemNumberFontFamily = config.ItemNumberFontFamily ?? this.ItemNumberFontFamily;
        this.ItemNumberFontWeight = config.ItemNumberFontWeight ?? this.ItemNumberFontWeight;
        this.ItemNumberFontColorNormal = config.ItemNumberFontColorNormal ?? this.ItemNumberFontColorNormal;
        this.ItemNumberFontColorHover = config.ItemNumberFontColorHover ?? this.ItemNumberFontColorHover;
        this.ItemNumberFontSize = config.ItemNumberFontSize ?? this.ItemNumberFontSize;
        this.ItemNumberPosition = config.ItemNumberPosition ?? this.ItemNumberPosition;
        this.IconEnabled = config.IconEnabled ?? this.IconEnabled;
        this.Icon = config.Icon ?? this.Icon;
        this.IconFontColorNormal = config.IconFontColorNormal ?? this.IconFontColorNormal;
        this.IconFontColorHover = config.IconFontColorHover ?? this.IconFontColorHover;
        this.IconFontSize = config.IconFontSize ?? this.IconFontSize;
        this.TitleEnabled = config.TitleEnabled ?? this.TitleEnabled;
        this.TitleText = config.TitleText ?? this.TitleText;
        this.TitleFontFamily = config.TitleFontFamily ?? this.TitleFontFamily;
        this.TitleFontWeight = config.TitleFontWeight ?? this.TitleFontWeight;
        this.TitleFontColorNormal = config.TitleFontColorNormal ?? this.TitleFontColorNormal;
        this.TitleFontColorHover = config.TitleFontColorHover ?? this.TitleFontColorHover;
        this.TitleFontSize = config.TitleFontSize ?? this.TitleFontSize;
        this.TitleTextAlign = config.TitleTextAlign ?? this.TitleTextAlign;
        this.SubTitleEnabled = config.SubTitleEnabled ?? this.SubTitleEnabled;
        this.SubTitleText = config.SubTitleText ?? this.SubTitleText;
        this.SubTitleFontFamily = config.SubTitleFontFamily ?? this.SubTitleFontFamily;
        this.SubTitleFontWeight = config.SubTitleFontWeight ?? this.SubTitleFontWeight;
        this.SubTitleFontColorNormal = config.SubTitleFontColorNormal ?? this.SubTitleFontColorNormal;
        this.SubTitleFontColorHover = config.SubTitleFontColorHover ?? this.SubTitleFontColorHover;
        this.SubTitleFontSize = config.SubTitleFontSize ?? this.SubTitleFontSize;
        this.SubTitleTextAlign = config.SubTitleTextAlign ?? this.SubTitleTextAlign;
        this.TriggerIconEnabled = config.TriggerIconEnabled ?? this.TriggerIconEnabled;
        this.TriggerIconClose = config.TriggerIconClose ?? this.TriggerIconClose;
        this.TriggerIconOpen = config.TriggerIconOpen ?? this.TriggerIconOpen;
        this.TriggerIconFontColorNormal = config.TriggerIconFontColorNormal ?? this.TriggerIconFontColorNormal;
        this.TriggerIconFontColorHover = config.TriggerIconFontColorHover ?? this.TriggerIconFontColorHover;
        this.TriggerIconFontSize = config.TriggerIconFontSize ?? this.TriggerIconFontSize;
        this.TriggerIconRotationEnabled = config.TriggerIconRotationEnabled ?? this.TriggerIconRotationEnabled;
        this.ContainerWrappedBackGroundColor = config.ContainerWrappedBackGroundColor ?? this.ContainerWrappedBackGroundColor;
      }
    });
  }
  setMouseOver(state) {
    this._mouseover = state;
  }
  static {
    this.ɵfac = function ListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListItemComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ListItemComponent,
      selectors: [["app-list-item"]],
      inputs: {
        name: [1, "name"]
      },
      ngContentSelectors: _c1,
      decls: 15,
      vars: 99,
      consts: [[1, "wrapper"], [1, "container", 3, "mouseover", "mouseout", "click"], [1, "iconContainer"], [1, "ItemNumber"], [1, "TextContainer"], [1, "title"], [1, "sub-title"], [1, "ItemOpenIconContainer"], [1, "containerWrapped"]],
      template: function ListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵlistener("mouseover", function ListItemComponent_Template_div_mouseover_1_listener() {
            return ctx.setMouseOver(true);
          })("mouseout", function ListItemComponent_Template_div_mouseout_1_listener() {
            return ctx.setMouseOver(false);
          })("click", function ListItemComponent_Template_div_click_1_listener() {
            return ctx.onClick();
          });
          ɵɵelementStart(2, "div", 2)(3, "p", 3);
          ɵɵtext(4);
          ɵɵelementEnd();
          ɵɵelement(5, "i");
          ɵɵelementEnd();
          ɵɵelementStart(6, "div", 4)(7, "h1", 5);
          ɵɵtext(8);
          ɵɵelementEnd();
          ɵɵelementStart(9, "h2", 6);
          ɵɵtext(10);
          ɵɵelementEnd()();
          ɵɵelementStart(11, "div", 7);
          ɵɵelement(12, "i");
          ɵɵelementEnd()();
          ɵɵelementStart(13, "div", 8);
          ɵɵprojection(14);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵstyleProp("width", ctx.Width + "px")("border-radius", ctx.BorderRadius + "px")("box-shadow", "rgba(0, 0, 0, 0.24) 0px 3px 8px");
          ɵɵadvance();
          ɵɵstyleProp("height", ctx.Height + "px")("border-radius", ctx.BorderRadius + "px")("flex-direction", ctx.ListItemType == null ? null : ctx.ListItemType.toString());
          ɵɵadvance();
          ɵɵstyleProp("width", ctx.ItemNumberIconContainerWidth + "px")("background-color", ctx._mouseover ? ctx.ItemNumberIconBackGroundColorHover : ctx.ItemNumberIconBackGroundColorNormal);
          ɵɵadvance();
          ɵɵstyleProp("display", ctx.ItemNumberEnabled ? "" : "none")("font-family", ctx.ItemNumberFontFamily)("font-weight", ctx.ItemNumberFontWeight)("color", ctx._mouseover ? ctx.ItemNumberFontColorHover : ctx.ItemNumberFontColorNormal)("font-size", ctx.ItemNumberFontSize + "px")("align-self", ctx.ItemNumberPosition == null ? null : ctx.ItemNumberPosition.toString())("margin-top", ctx.ItemNumberPosition == ctx.ListItemItemNumberPositionEnum.Top ? "5px" : "");
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.ItemNumberText, " ");
          ɵɵadvance();
          ɵɵclassMap(ctx.Icon);
          ɵɵstyleProp("display", ctx.IconEnabled ? "" : "none")("color", ctx._mouseover ? ctx.IconFontColorHover : ctx.IconFontColorNormal)("font-size", ctx.IconFontSize + "px")("margin-left", ctx.ItemNumberEnabled ? "auto" : "")("margin-right", ctx.ItemNumberEnabled ? "10px" : "");
          ɵɵadvance();
          ɵɵstyleProp("width", ctx.TitlesContainerWidth + "px")("background-color", ctx._mouseover ? ctx.TitlesBackGroundColorHover : ctx.TitlesBackGroundColorNormal)("padding", `0px ${ctx.TitlesContainerPadding}px`);
          ɵɵadvance();
          ɵɵstyleProp("display", ctx.TitleEnabled ? "" : "none")("font-family", ctx.TitleFontFamily)("font-weight", ctx.TitleFontWeight)("color", ctx._mouseover ? ctx.TitleFontColorHover : ctx.TitleFontColorNormal)("font-size", ctx.TitleFontSize + "px")("text-align", ctx.TitleTextAlign == null ? null : ctx.TitleTextAlign.toString());
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.TitleText, " ");
          ɵɵadvance();
          ɵɵstyleProp("display", ctx.SubTitleEnabled ? "" : "none")("font-family", ctx.SubTitleFontFamily)("font-weight", ctx.SubTitleFontWeight)("color", ctx._mouseover ? ctx.SubTitleFontColorHover : ctx.SubTitleFontColorNormal)("font-size", ctx.SubTitleFontSize + "px")("text-align", ctx.SubTitleTextAlign == null ? null : ctx.SubTitleTextAlign.toString());
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.SubTitleText, " ");
          ɵɵadvance();
          ɵɵstyleProp("background-color", ctx._mouseover ? ctx.TriggerIconBackGroundColorHover : ctx.TriggerIconBackGroundColorNormal)("width", ctx.TriggerIconContainerWidth + "px");
          ɵɵadvance();
          ɵɵclassMap(ctx.OpenState ? ctx.TriggerIconOpen : ctx.TriggerIconClose);
          ɵɵstyleProp("display", ctx.TriggerIconEnabled ? "" : "none")("color", ctx._mouseover ? ctx.TriggerIconFontColorHover : ctx.TriggerIconFontColorNormal)("font-size", ctx.TriggerIconFontSize + "px")("transform", ctx.TriggerIconRotationEnabled == true ? ctx.ListItemType == ctx.ListItemTypesEnum.Normal ? ctx.OpenState ? "" : "rotate(90deg)" : ctx.OpenState ? "" : "rotate(-90deg)" : "");
          ɵɵclassProp("ItemOpenState", ctx.OpenState)("ItemCloseState", !ctx.OpenState);
          ɵɵadvance();
          ɵɵstyleProp("display", ctx.OpenState ? "" : "none")("background-color", ctx.ContainerWrappedBackGroundColor);
        }
      },
      styles: ["[_nghost-%COMP%]{display:inline-block;vertical-align:top}.wrapper[_ngcontent-%COMP%]{overflow:hidden}.wrapper[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{display:flex;cursor:pointer}.wrapper[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] > .iconContainer[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box}.wrapper[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] > .iconContainer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0 auto 0 5px}.wrapper[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] > .iconContainer[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{line-height:0px}.wrapper[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] > .TextContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;justify-content:center;width:100%;box-sizing:border-box}.wrapper[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] > .TextContainer[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{margin:0;width:100%}.wrapper[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] > .ItemOpenIconContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.wrapper[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] > .ItemOpenIconContainer[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{transition:.3s}.wrapper[_ngcontent-%COMP%] > .containerWrapped[_ngcontent-%COMP%]{padding:0}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListItemComponent, [{
    type: Component,
    args: [{
      selector: "app-list-item",
      standalone: true,
      imports: [],
      template: `<div class="wrapper"\r
[style.width]="Width+'px'"\r
[style.border-radius]="BorderRadius+'px'"\r
[style.box-shadow]="'rgba(0, 0, 0, 0.24) 0px 3px 8px'"\r
>\r
    <div class="container"\r
    [style.height]="Height+'px'"\r
    [style.border-radius]="BorderRadius+'px'"\r
    [style.flex-direction]="ListItemType?.toString()"\r
    (mouseover)="setMouseOver(true)"\r
    (mouseout)="setMouseOver(false)"\r
    (click)="onClick()"\r
    >\r
\r
        <div class="iconContainer"\r
        [style.width]="ItemNumberIconContainerWidth+'px'"\r
        [style.background-color]="_mouseover ? ItemNumberIconBackGroundColorHover : ItemNumberIconBackGroundColorNormal"\r
        >\r
            <p class="ItemNumber"\r
            [style.display]="ItemNumberEnabled ? '' : 'none'"\r
            [style.font-family]="ItemNumberFontFamily"\r
            [style.font-weight]="ItemNumberFontWeight"\r
            [style.color]="_mouseover ? ItemNumberFontColorHover : ItemNumberFontColorNormal"\r
            [style.font-size]="ItemNumberFontSize + 'px'  "\r
            [style.align-self]="ItemNumberPosition?.toString()"\r
            [style.margin-top]="ItemNumberPosition == ListItemItemNumberPositionEnum.Top ? '5px': '' "\r
            >\r
                {{ItemNumberText}}\r
            </p>\r
\r
            <i class="{{Icon}}"\r
            [style.display]="IconEnabled ? '' : 'none'"\r
            [style.color]="_mouseover ? IconFontColorHover : IconFontColorNormal"\r
            [style.font-size]="IconFontSize +'px'"\r
            [style.margin-left]="ItemNumberEnabled ? 'auto' : ''"\r
            [style.margin-right]="ItemNumberEnabled ? '10px' : ''"\r
            ></i>\r
        </div>\r
\r
\r
        <div class="TextContainer"\r
        [style.width]="TitlesContainerWidth+'px'"\r
        [style.background-color]="_mouseover ? TitlesBackGroundColorHover : TitlesBackGroundColorNormal"\r
        [style.padding]="\`0px \${TitlesContainerPadding}px\`"\r
        >\r
\r
            <h1 class="title"\r
            [style.display]="TitleEnabled ? '' : 'none'"\r
            [style.font-family]="TitleFontFamily"\r
            [style.font-weight]="TitleFontWeight"\r
            [style.color]="_mouseover ? TitleFontColorHover : TitleFontColorNormal"\r
            [style.font-size]="TitleFontSize +'px'"\r
            [style.text-align]="TitleTextAlign?.toString()"\r
            >\r
                {{TitleText}}\r
            </h1>\r
\r
            <h2 class="sub-title"\r
            [style.display]="SubTitleEnabled ? '' : 'none'"\r
            [style.font-family]="SubTitleFontFamily"\r
            [style.font-weight]="SubTitleFontWeight"\r
            [style.color]="_mouseover ? SubTitleFontColorHover : SubTitleFontColorNormal"\r
            [style.font-size]="SubTitleFontSize +'px'"\r
            [style.text-align]="SubTitleTextAlign?.toString()"\r
            >\r
                {{SubTitleText}}\r
            </h2>\r
\r
        </div>\r
\r
        <div class="ItemOpenIconContainer"\r
        [style.background-color]="_mouseover ? TriggerIconBackGroundColorHover : TriggerIconBackGroundColorNormal"\r
        [style.width]="TriggerIconContainerWidth+'px'"\r
        >\r
            <i class="{{OpenState? TriggerIconOpen : TriggerIconClose}}"\r
            [style.display]="TriggerIconEnabled ? '' : 'none'"\r
            [class.ItemOpenState]="OpenState"\r
            [class.ItemCloseState]="!OpenState"\r
            [style.color]="_mouseover ? TriggerIconFontColorHover : TriggerIconFontColorNormal"\r
            [style.font-size]="TriggerIconFontSize +'px'"\r
            [style.transform]="\r
            TriggerIconRotationEnabled == true \r
            ? ListItemType == ListItemTypesEnum.Normal\r
                ? OpenState \r
                    ? '' \r
                    : 'rotate(90deg)' \r
                : OpenState \r
                    ? '' \r
                    : 'rotate(-90deg)'\r
            : ''\r
             "\r
            ></i>\r
        </div>\r
\r
\r
    </div>\r
    <div class="containerWrapped"\r
    [style.display]="OpenState ? '' : 'none'"\r
    [style.background-color]="ContainerWrappedBackGroundColor"\r
    >\r
        <ng-content/>\r
    </div>\r
\r
\r
</div>\r
\r
`,
      styles: [":host{display:inline-block;vertical-align:top}.wrapper{overflow:hidden}.wrapper>.container{display:flex;cursor:pointer}.wrapper>.container>.iconContainer{display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box}.wrapper>.container>.iconContainer>p{margin:0 auto 0 5px}.wrapper>.container>.iconContainer>i{line-height:0px}.wrapper>.container>.TextContainer{display:flex;flex-direction:column;align-items:start;justify-content:center;width:100%;box-sizing:border-box}.wrapper>.container>.TextContainer>h1,h2{margin:0;width:100%}.wrapper>.container>.ItemOpenIconContainer{display:flex;flex-direction:column;align-items:center;justify-content:center}.wrapper>.container>.ItemOpenIconContainer>i{transition:.3s}.wrapper>.containerWrapped{padding:0}\n"]
    }]
  }], null, null);
})();
var ListItemConfigModel = class {
  constructor(params) {
    this.Name = params.Name;
    this.ListItemType = params.ListItemType;
    this.OpenState = params.OpenState;
    this.Width = params.Width;
    this.Height = params.Height;
    this.BorderRadius = params.BorderRadius;
    this.ItemNumberIconContainerWidth = params.ItemNumberIconContainerWidth;
    this.ItemNumberIconBackGroundColorNormal = params.ItemNumberIconBackGroundColorNormal;
    this.ItemNumberIconBackGroundColorHover = params.ItemNumberIconBackGroundColorHover;
    this.TitlesContainerWidth = params.TitlesContainerWidth;
    this.TitlesBackGroundColorNormal = params.TitlesBackGroundColorNormal;
    this.TitlesBackGroundColorHover = params.TitlesBackGroundColorHover;
    this.TitlesContainerPadding = params.TitlesContainerPadding;
    this.TriggerIconContainerWidth = params.TriggerIconContainerWidth;
    this.TriggerIconBackGroundColorNormal = params.TriggerIconBackGroundColorNormal;
    this.TriggerIconBackGroundColorHover = params.TriggerIconBackGroundColorHover;
    this.ItemNumberEnabled = params.ItemNumberEnabled;
    this.ItemNumberText = params.ItemNumberText;
    this.ItemNumberFontFamily = params.ItemNumberFontFamily;
    this.ItemNumberFontWeight = params.ItemNumberFontWeight;
    this.ItemNumberFontColorNormal = params.ItemNumberFontColorNormal;
    this.ItemNumberFontColorHover = params.ItemNumberFontColorHover;
    this.ItemNumberFontSize = params.ItemNumberFontSize;
    this.ItemNumberPosition = params.ItemNumberPosition;
    this.IconEnabled = params.IconEnabled;
    this.Icon = params.Icon;
    this.IconFontColorNormal = params.IconFontColorNormal;
    this.IconFontColorHover = params.IconFontColorHover;
    this.IconFontSize = params.IconFontSize;
    this.TitleEnabled = params.TitleEnabled;
    this.TitleText = params.TitleText;
    this.TitleFontFamily = params.TitleFontFamily;
    this.TitleFontWeight = params.TitleFontWeight;
    this.TitleFontColorNormal = params.TitleFontColorNormal;
    this.TitleFontColorHover = params.TitleFontColorHover;
    this.TitleFontSize = params.TitleFontSize;
    this.TitleTextAlign = params.TitleTextAlign;
    this.SubTitleEnabled = params.SubTitleEnabled;
    this.SubTitleText = params.SubTitleText;
    this.SubTitleFontFamily = params.SubTitleFontFamily;
    this.SubTitleFontWeight = params.SubTitleFontWeight;
    this.SubTitleFontColorNormal = params.SubTitleFontColorNormal;
    this.SubTitleFontColorHover = params.SubTitleFontColorHover;
    this.SubTitleFontSize = params.SubTitleFontSize;
    this.SubTitleTextAlign = params.SubTitleTextAlign;
    this.TriggerIconEnabled = params.TriggerIconEnabled;
    this.TriggerIconClose = params.TriggerIconClose;
    this.TriggerIconOpen = params.TriggerIconOpen;
    this.TriggerIconFontColorNormal = params.TriggerIconFontColorNormal;
    this.TriggerIconFontColorHover = params.TriggerIconFontColorHover;
    this.TriggerIconFontSize = params.TriggerIconFontSize;
    this.TriggerIconRotationEnabled = params.TriggerIconRotationEnabled;
    this.ContainerWrappedBackGroundColor = params.ContainerWrappedBackGroundColor;
  }
};
var LabelModel = class {
  constructor() {
    this.name = "";
  }
};
var LabelService = class _LabelService {
  constructor() {
    this.stateChanger = new Subject();
  }
  static {
    this.ɵfac = function LabelService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LabelService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LabelService,
      factory: _LabelService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LabelIconPositionEnum;
(function(LabelIconPositionEnum2) {
  LabelIconPositionEnum2[LabelIconPositionEnum2["Top"] = 0] = "Top";
  LabelIconPositionEnum2[LabelIconPositionEnum2["Right"] = 1] = "Right";
  LabelIconPositionEnum2[LabelIconPositionEnum2["Bottom"] = 2] = "Bottom";
  LabelIconPositionEnum2[LabelIconPositionEnum2["Left"] = 3] = "Left";
})(LabelIconPositionEnum || (LabelIconPositionEnum = {}));
var LabelFontWeights;
(function(LabelFontWeights2) {
  LabelFontWeights2[LabelFontWeights2["Thin"] = 100] = "Thin";
  LabelFontWeights2[LabelFontWeights2["ExtraLight"] = 200] = "ExtraLight";
  LabelFontWeights2[LabelFontWeights2["Light"] = 300] = "Light";
  LabelFontWeights2[LabelFontWeights2["Regular"] = 400] = "Regular";
  LabelFontWeights2[LabelFontWeights2["Medium"] = 500] = "Medium";
  LabelFontWeights2[LabelFontWeights2["SemiBold"] = 600] = "SemiBold";
  LabelFontWeights2[LabelFontWeights2["Bold"] = 700] = "Bold";
  LabelFontWeights2[LabelFontWeights2["Extrabold"] = 800] = "Extrabold";
  LabelFontWeights2[LabelFontWeights2["Black"] = 900] = "Black";
})(LabelFontWeights || (LabelFontWeights = {}));
var LabelComponent = class _LabelComponent {
  constructor() {
    this.Name = input.required();
    this._IconEnabled = input.required();
    this._Icon = input.required();
    this._IconColor = input.required();
    this.IconOrientation = input.required();
    this.IconDistanceFromText = input.required();
    this._TextEnabled = input.required();
    this._TextFontFamily = input.required();
    this._Text = input.required();
    this._TextColor = input.required();
    this._TextFontWeight = input.required();
    this._TextFontSize = input.required();
    this.LabelService = inject(LabelService);
  }
  ngOnInit() {
    this.LabelModel = new LabelModel();
    this.setIconOrientationOnTemplate();
  }
  setIconOrientationOnTemplate() {
    switch (this.IconOrientation()) {
      case LabelIconPositionEnum.Top:
        this._IconOrientation = "column";
        this._IconDistanceFromTextObject = this._TextEnabled() ? {
          "margin-bottom": this.IconDistanceFromText().toString() + "px"
        } : {};
        break;
      case LabelIconPositionEnum.Right:
        this._IconOrientation = "row-reverse";
        this._IconDistanceFromTextObject = this._TextEnabled() ? {
          "margin-left": this.IconDistanceFromText().toString() + "px"
        } : {};
        break;
      case LabelIconPositionEnum.Bottom:
        this._IconOrientation = "column-reverse";
        this._IconDistanceFromTextObject = this._TextEnabled() ? {
          "margin-top": this.IconDistanceFromText().toString() + "px"
        } : {};
        break;
      case LabelIconPositionEnum.Left:
        this._IconDistanceFromTextObject = this._TextEnabled() ? {
          "margin-right": this.IconDistanceFromText().toString() + "px"
        } : {};
        break;
    }
  }
  static {
    this.ɵfac = function LabelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LabelComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LabelComponent,
      selectors: [["app-label"]],
      inputs: {
        Name: [1, "Name"],
        _IconEnabled: [1, "_IconEnabled"],
        _Icon: [1, "_Icon"],
        _IconColor: [1, "_IconColor"],
        IconOrientation: [1, "IconOrientation"],
        IconDistanceFromText: [1, "IconDistanceFromText"],
        _TextEnabled: [1, "_TextEnabled"],
        _TextFontFamily: [1, "_TextFontFamily"],
        _Text: [1, "_Text"],
        _TextColor: [1, "_TextColor"],
        _TextFontWeight: [1, "_TextFontWeight"],
        _TextFontSize: [1, "_TextFontSize"]
      },
      decls: 4,
      vars: 24,
      consts: [[1, "container", 3, "ngStyle"], [3, "ngStyle"]],
      template: function LabelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵelement(1, "i", 1);
          ɵɵelementStart(2, "p");
          ɵɵtext(3);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ɵɵpureFunction1(22, _c2, ctx._IconOrientation));
          ɵɵadvance();
          ɵɵclassMap(ctx._Icon());
          ɵɵstyleProp("color", ctx._IconColor())("font-size", ctx._TextFontSize() * 1.25 + "px")("display", ctx._IconEnabled() ? "" : "none");
          ɵɵproperty("ngStyle", ctx._IconDistanceFromTextObject);
          ɵɵadvance();
          ɵɵstyleProp("font-size", ctx._TextFontSize() + "px")("font-family", ctx._TextFontFamily())("font-weight", ctx._TextFontWeight())("color", ctx._TextColor())("display", ctx._TextEnabled() ? "" : "none");
          ɵɵadvance();
          ɵɵtextInterpolate1("", ctx._Text(), " ");
        }
      },
      dependencies: [CommonModule, NgStyle],
      styles: ["[_nghost-%COMP%]{display:inline-block}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:none;padding:0}.container[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{line-height:0px}.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0;line-height:0px}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelComponent, [{
    type: Component,
    args: [{
      selector: "app-label",
      imports: [CommonModule],
      template: `<div class="container"\r
[ngStyle]="{'flex-direction':_IconOrientation}"\r
>\r
\r
    <i\r
    class="{{_Icon()}}"\r
    [style.color]="_IconColor()"\r
    [style.font-size]="(_TextFontSize() *1.25)+'px'"\r
    [style.display]="_IconEnabled() ? '' : 'none'"\r
    [ngStyle]="_IconDistanceFromTextObject"\r
    >\r
    </i>\r
\r
\r
    <p\r
    [style.font-size]="_TextFontSize() +'px'"\r
    [style.font-family]="_TextFontFamily()"\r
    [style.font-weight]="_TextFontWeight()"\r
    [style.color]="_TextColor()"\r
    [style.display]="_TextEnabled() ? '' : 'none'"\r
    >{{_Text()}}\r
    </p>\r
</div>`,
      styles: [":host{display:inline-block}.container{display:flex;align-items:center;justify-content:center;border:none;padding:0}.container>i{line-height:0px}.container>p{margin:0;line-height:0px}\n"]
    }]
  }], null, null);
})();
var TableFontWeights;
(function(TableFontWeights2) {
  TableFontWeights2[TableFontWeights2["Thin"] = 100] = "Thin";
  TableFontWeights2[TableFontWeights2["ExtraLight"] = 200] = "ExtraLight";
  TableFontWeights2[TableFontWeights2["Light"] = 300] = "Light";
  TableFontWeights2[TableFontWeights2["Regular"] = 400] = "Regular";
  TableFontWeights2[TableFontWeights2["Medium"] = 500] = "Medium";
  TableFontWeights2[TableFontWeights2["SemiBold"] = 600] = "SemiBold";
  TableFontWeights2[TableFontWeights2["Bold"] = 700] = "Bold";
  TableFontWeights2[TableFontWeights2["Extrabold"] = 800] = "Extrabold";
  TableFontWeights2[TableFontWeights2["Black"] = 900] = "Black";
})(TableFontWeights || (TableFontWeights = {}));
var TableModes;
(function(TableModes2) {
  TableModes2[TableModes2["ReadOnly"] = 0] = "ReadOnly";
  TableModes2[TableModes2["Display"] = 1] = "Display";
})(TableModes || (TableModes = {}));
var TableService = class _TableService {
  constructor() {
    this.dataChange = new Subject();
    this.rowOnSelect = new Subject();
  }
  static {
    this.ɵfac = function TableService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TableService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TableService,
      factory: _TableService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TableComponent = class _TableComponent {
  constructor() {
    this.destroy = new Subject();
    this.name = input.required();
    this.TableMode = input.required();
    this._FontFamily = input.required();
    this._FontSize = input.required();
    this._Header_FontColor = input.required();
    this._Header_FontWeight = input.required();
    this._Header_BackGroundColor = input.required();
    this._Body_FontColor = input.required();
    this._Body_FontWeight = input.required();
    this._Body_BackGroundColor01 = input.required();
    this._Body_BackGroundColor02 = input.required();
    this._Body_BackGroundColorHover = input.required();
    this._BorderVerticalON = input.required();
    this._BorderHorizontalON = input.required();
    this._BorderColor = input.required();
    this._BorderSize = input.required();
    this._ContainerWidth = input.required();
    this._ContainerHeight = input.required();
    this.NomeColunaJSONID = input.required();
    this.NomeColunasJSON = input.required();
    this.NomeColunasDisplay = input.required();
    this.UnidadesDeMedidaDasColunas = input.required();
    this.NCasasDecimaisDasColunas = input.required();
    this.UnidadesDeMedidaNosDados = input.required();
    this.TableService = inject(TableService);
    this.rowSelected = false;
    this.TableModes = TableModes;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      for (var i = 0; i < this.nodes.length - 1; i++) {
        if (i % 2 == 0) {
          this.nodes[i].style.background = this._Body_BackGroundColor01();
        } else {
          this.nodes[i].style.background = this._Body_BackGroundColor02();
        }
      }
    }, 1e3);
  }
  ngOnDestroy() {
    this.destroy.next(true);
  }
  ngOnInit() {
    this.startListenToDataChange();
  }
  startListenToDataChange() {
    this.TableService.dataChange.pipe(takeUntil(this.destroy)).subscribe((model) => {
      if (model.name == this.name()) {
        this.rowsOnMemory = JSON.parse(JSON.stringify(model.data));
        if (this.VerificarSeENecessarioDeletarColunasDeUmObjeto(model.data, this.NomeColunasDisplay())) {
          var ObjetosComNovosNomes = this.MudaNomesDasPropriedadesDeUmObjeto(model.data, this.NomeColunasDisplay(), this.NomeColunasJSON());
          var ObjetosArredondados = this.ListaDeObjetosComCamposNumericosArredondados(ObjetosComNovosNomes, this.NCasasDecimaisDasColunas());
          if (this.UnidadesDeMedidaNosDados()) {
            var ObjetosComUnidadesDeMedida = this.ListaDeObjetosComUnidadesDeMedidas(ObjetosArredondados, this.UnidadesDeMedidaDasColunas());
            this.rowsOnDisplay = ObjetosComUnidadesDeMedida;
          } else {
            this.rowsOnDisplay = ObjetosArredondados;
          }
          this.headers = Object.keys(this.rowsOnDisplay[0]);
        } else {
          this.rowsOnDisplay = model.data;
          this.headers = Object.keys(this.rowsOnDisplay[0]);
        }
        this.nodes = this.tbody.nativeElement.childNodes;
      }
    });
  }
  OnLineSelected(row) {
    if (this.TableMode() == this.TableModes.Display) {
      this.nodeSelectedIndex = this.rowsOnDisplay.indexOf(row);
      var id = this.rowsOnMemory[this.nodeSelectedIndex][this.NomeColunaJSONID()];
      this.TableService.rowOnSelect.next(id);
      for (var i = 0; i < this.nodes.length - 1; i++) {
        if (i % 2 == 0) {
          this.nodes[i].style.background = this._Body_BackGroundColor01();
        } else {
          this.nodes[i].style.background = this._Body_BackGroundColor02();
        }
      }
      this.nodes[this.nodeSelectedIndex].style.background = this._Body_BackGroundColorHover();
    }
  }
  OnMouseEnter(row) {
    var index = this.rowsOnDisplay.indexOf(row);
    for (var i = 0; i < this.nodes.length - 1; i++) {
      if (i % 2 == 0 && i != this.nodeSelectedIndex) {
        this.nodes[i].style.background = this._Body_BackGroundColor01();
      } else if (i % 2 == 0 && i != this.nodeSelectedIndex) {
        this.nodes[i].style.background = this._Body_BackGroundColor02();
      }
      this.nodes[index].style.background = this._Body_BackGroundColorHover();
    }
  }
  OnMouseLeave(row) {
    for (var i = 0; i < this.nodes.length - 1; i++) {
      if (i % 2 == 0 && i != this.nodeSelectedIndex) {
        this.nodes[i].style.background = this._Body_BackGroundColor01();
      } else if (i % 2 != 0 && i != this.nodeSelectedIndex) {
        this.nodes[i].style.background = this._Body_BackGroundColor02();
      }
    }
  }
  VerificarSeENecessarioDeletarColunasDeUmObjeto(listaObjetos, ListaDeNovosNomes) {
    for (var i = 0; i < Object.keys(listaObjetos[0]).length; i++) {
      if (ListaDeNovosNomes.includes(Object.keys(listaObjetos[0])[i])) {
      } else {
        return true;
      }
    }
    return false;
  }
  MudaNomesDasPropriedadesDeUmObjeto(listaObjetos, ListaDeNovosNomes, ListaDeNomesAntigosParaManter) {
    var listaObjetosColunasDeletadas = this.DeletaPropriedadesDeCadaObjetoDeUmaLista(listaObjetos, ListaDeNomesAntigosParaManter);
    for (var z = 0; z < ListaDeNovosNomes.length; z++) {
      for (var y = 0; y < listaObjetosColunasDeletadas.length; y++) {
        listaObjetosColunasDeletadas[y][ListaDeNovosNomes[z]] = listaObjetosColunasDeletadas[y][ListaDeNomesAntigosParaManter[z]];
        delete listaObjetosColunasDeletadas[y][ListaDeNomesAntigosParaManter[z]];
      }
    }
    return listaObjetosColunasDeletadas;
  }
  DeletaPropriedadesDeCadaObjetoDeUmaLista(listaObjetos, ListaColunasParaManter) {
    const ListaColunasParaDeletar = this.ListaNomesColunasDeletadas(listaObjetos[0], ListaColunasParaManter);
    for (var i = 0; i < ListaColunasParaDeletar.length; i++) {
      listaObjetos.forEach((obj) => {
        delete obj[ListaColunasParaDeletar[i]];
      });
    }
    i = 0;
    return listaObjetos;
  }
  ListaNomesColunasDeletadas(objOriginal, ListaColunasParaManter) {
    var newArray = [];
    for (var i = 0; i < Object.keys(objOriginal).length; i++) {
      if (ListaColunasParaManter.includes(Object.keys(objOriginal)[i])) {
      } else {
        newArray.push(Object.keys(objOriginal)[i]);
      }
    }
    i = 0;
    return newArray;
  }
  ListaDeObjetosComUnidadesDeMedidas(listaObjetos, listaUnidadesMedida) {
    for (var i = 0; i < listaObjetos.length; i++) {
      for (var y = 0; y < Object.keys(listaObjetos[0]).length; y++) {
        listaObjetos[i][Object.keys(listaObjetos[0])[y]] = listaObjetos[i][Object.keys(listaObjetos[0])[y]] + listaUnidadesMedida[y];
      }
    }
    return listaObjetos;
  }
  ListaDeObjetosComCamposNumericosArredondados(listaObjetos, listadeArredondamentos) {
    for (var i = 0; i < listaObjetos.length; i++) {
      for (var y = 0; y < Object.keys(listaObjetos[0]).length; y++) {
        if (isNaN(listaObjetos[i][Object.keys(listaObjetos[0])[y]])) {
        } else {
          listaObjetos[i][Object.keys(listaObjetos[0])[y]] = parseFloat(listaObjetos[i][Object.keys(listaObjetos[0])[y]]).toFixed(listadeArredondamentos[y]);
        }
      }
    }
    return listaObjetos;
  }
  static {
    this.ɵfac = function TableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TableComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TableComponent,
      selectors: [["app-table"]],
      viewQuery: function TableComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c3, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tbody = _t.first);
        }
      },
      inputs: {
        name: [1, "name"],
        TableMode: [1, "TableMode"],
        _FontFamily: [1, "_FontFamily"],
        _FontSize: [1, "_FontSize"],
        _Header_FontColor: [1, "_Header_FontColor"],
        _Header_FontWeight: [1, "_Header_FontWeight"],
        _Header_BackGroundColor: [1, "_Header_BackGroundColor"],
        _Body_FontColor: [1, "_Body_FontColor"],
        _Body_FontWeight: [1, "_Body_FontWeight"],
        _Body_BackGroundColor01: [1, "_Body_BackGroundColor01"],
        _Body_BackGroundColor02: [1, "_Body_BackGroundColor02"],
        _Body_BackGroundColorHover: [1, "_Body_BackGroundColorHover"],
        _BorderVerticalON: [1, "_BorderVerticalON"],
        _BorderHorizontalON: [1, "_BorderHorizontalON"],
        _BorderColor: [1, "_BorderColor"],
        _BorderSize: [1, "_BorderSize"],
        _ContainerWidth: [1, "_ContainerWidth"],
        _ContainerHeight: [1, "_ContainerHeight"],
        NomeColunaJSONID: [1, "NomeColunaJSONID"],
        NomeColunasJSON: [1, "NomeColunasJSON"],
        NomeColunasDisplay: [1, "NomeColunasDisplay"],
        UnidadesDeMedidaDasColunas: [1, "UnidadesDeMedidaDasColunas"],
        NCasasDecimaisDasColunas: [1, "NCasasDecimaisDasColunas"],
        UnidadesDeMedidaNosDados: [1, "UnidadesDeMedidaNosDados"]
      },
      decls: 10,
      vars: 34,
      consts: [["tbody", ""], [1, "container", 2, "overflow-x", "auto"], [3, "click", "mouseenter", "mouseleave"]],
      template: function TableComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1)(1, "table")(2, "thead")(3, "tr");
          ɵɵrepeaterCreate(4, TableComponent_For_5_Template, 2, 1, "th", null, ɵɵrepeaterTrackByIndex);
          ɵɵelementEnd()();
          ɵɵelementStart(6, "tbody", null, 0);
          ɵɵrepeaterCreate(8, TableComponent_For_9_Template, 3, 0, "tr", null, ɵɵrepeaterTrackByIndex);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵstyleProp("width", ctx._ContainerWidth() + "px")("height", ctx._ContainerHeight() + "px");
          ɵɵadvance();
          ɵɵstyleProp("font-family", ctx._FontFamily())("--padding", ctx._FontSize() * 0.5 + "px " + (ctx._FontSize() * 0.625 + "px"))("--borderLeft", (ctx._BorderVerticalON() ? ctx._BorderSize() + "px" : "0px") + " solid " + ctx._BorderColor())("--borderBottom", (ctx._BorderHorizontalON() ? ctx._BorderSize() + "px" : "0px") + " solid " + ctx._BorderColor());
          ɵɵadvance();
          ɵɵstyleProp("font-size", ctx._FontSize() * 1.1 + "px")("font-weight", ctx._Header_FontWeight())("background-color", ctx._Header_BackGroundColor())("color", ctx._Header_FontColor());
          ɵɵadvance(2);
          ɵɵrepeater(ctx.headers);
          ɵɵadvance(2);
          ɵɵstyleProp("font-size", ctx._FontSize() + "px")("font-weight", ctx._Body_FontWeight())("--Body_FontColor", ctx._Body_FontColor())("--Body_BackGroundColor01", ctx._Body_BackGroundColor01())("--Body_BackGroundColor02", ctx._Body_BackGroundColor02())("--Body_BackGroundColorHover", ctx._Body_BackGroundColorHover())("cursor", ctx.TableMode() == ctx.TableModes.ReadOnly ? "default" : "pointer");
          ɵɵadvance(2);
          ɵɵrepeater(ctx.rowsOnDisplay);
        }
      },
      styles: [".container[_ngcontent-%COMP%]{display:inline-block}table[_ngcontent-%COMP%]{border-collapse:collapse}tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:hover{background-color:var(--Body_BackGroundColorHover)}tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:nth-child(2n):hover{background-color:var(--Body_BackGroundColorHover)}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:center;border-left:var(--borderLeft);border-right:var(--borderLeft);border-bottom:var(--borderBottom);border-top:var(--borderBottom);vertical-align:middle;padding:var(--padding)}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableComponent, [{
    type: Component,
    args: [{
      selector: "app-table",
      imports: [],
      template: `<div class="container" style="overflow-x:auto;"\r
[style.width]="_ContainerWidth()+'px'"\r
[style.height]="_ContainerHeight()+'px'"\r
>\r
    <table\r
    [style.font-family]="_FontFamily()"\r
    [style.--padding]="(_FontSize()*0.5+'px')+' ' + (_FontSize()*0.625+'px')"\r
    [style.--borderLeft]="(_BorderVerticalON() ? _BorderSize()+'px' : '0px') + ' solid '+_BorderColor()"\r
    [style.--borderBottom]="(_BorderHorizontalON() ? _BorderSize()+'px' : '0px') + ' solid '+_BorderColor()"\r
    >\r
    \r
        <thead\r
        [style.font-size]="_FontSize()*1.1 + 'px'"\r
        [style.font-weight]="_Header_FontWeight()"\r
        [style.background-color]="_Header_BackGroundColor()"\r
        [style.color]="_Header_FontColor()"\r
        >\r
            <tr>\r
                @for(_header of headers ; track $index){\r
                    <th>{{_header}}</th>\r
                }\r
            </tr>\r
        </thead>\r
    \r
        <tbody\r
        #tbody\r
        [style.font-size]="_FontSize() + 'px'"\r
        [style.font-weight]="_Body_FontWeight()"\r
        [style.--Body_FontColor]="_Body_FontColor()"\r
        [style.--Body_BackGroundColor01]="_Body_BackGroundColor01()"\r
        [style.--Body_BackGroundColor02]="_Body_BackGroundColor02()"\r
        [style.--Body_BackGroundColorHover]="_Body_BackGroundColorHover()"\r
        [style.cursor]="TableMode() == TableModes.ReadOnly ? 'default' : 'pointer'"\r
        >\r
            @for(row of rowsOnDisplay ; track $index){\r
                <tr\r
                (click)="OnLineSelected(row)"\r
                (mouseenter)="OnMouseEnter(row)"\r
                (mouseleave)="OnMouseLeave(row)"\r
                >\r
                    @for(_header of headers; track $index){\r
                       <td\r
                       \r
                       >{{row[_header]}}</td>\r
                    }\r
                </tr>\r
            }\r
        </tbody>\r
        \r
    </table>\r
</div>\r
\r
\r
\r
\r
`,
      styles: [".container{display:inline-block}table{border-collapse:collapse}tbody>tr:hover{background-color:var(--Body_BackGroundColorHover)}tbody>tr:nth-child(2n):hover{background-color:var(--Body_BackGroundColorHover)}td,th{text-align:center;border-left:var(--borderLeft);border-right:var(--borderLeft);border-bottom:var(--borderBottom);border-top:var(--borderBottom);vertical-align:middle;padding:var(--padding)}\n"]
    }]
  }], null, {
    tbody: [{
      type: ViewChild,
      args: ["tbody"]
    }]
  });
})();
var TableModel = class {
  constructor() {
    this.name = "";
  }
};
var ModalService = class _ModalService {
  constructor() {
    this.showModal = new Subject();
    this.ClosedByConfirmation = new Subject();
  }
  static {
    this.ɵfac = function ModalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ModalService,
      factory: _ModalService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ModalModel = class {
  constructor(params) {
    this.OnlyOkButtonEnabled = false;
    this.BtnCancelName = "";
    this.BtnCancelText = "";
    this.BtnCancelWidth = 0;
    this.BtnCancelHeight = 0;
    this.BtnOkName = "";
    this.BtnOkText = "";
    this.BtnOkWidth = 0;
    this.BtnOkHeight = 0;
    this.BtnsFontSize = 0;
    this.ModalMessage = "";
    this.OnlyOkButtonEnabled = params.OnlyOkButtonEnabled;
    this.BtnCancelName = params.BtnCancelName;
    this.BtnCancelText = params.BtnCancelText;
    this.BtnCancelWidth = params.BtnCancelWidth;
    this.BtnCancelHeight = params.BtnCancelHeight;
    this.BtnOkName = params.BtnOkName;
    this.BtnOkText = params.BtnOkText;
    this.BtnOkWidth = params.BtnOkWidth;
    this.BtnOkHeight = params.BtnOkHeight;
    this.BtnsFontSize = params.BtnsFontSize;
    this.ModalMessage = params.ModalMessage;
  }
};
var FontWeights;
(function(FontWeights2) {
  FontWeights2[FontWeights2["UltraExtraLight"] = 100] = "UltraExtraLight";
  FontWeights2[FontWeights2["ExtraLight"] = 200] = "ExtraLight";
  FontWeights2[FontWeights2["Light"] = 300] = "Light";
  FontWeights2[FontWeights2["Regular"] = 400] = "Regular";
  FontWeights2[FontWeights2["Medium"] = 500] = "Medium";
  FontWeights2[FontWeights2["SemiBold"] = 600] = "SemiBold";
  FontWeights2[FontWeights2["Bold"] = 700] = "Bold";
  FontWeights2[FontWeights2["ExtraBold"] = 800] = "ExtraBold";
  FontWeights2[FontWeights2["UltraExtraBold"] = 900] = "UltraExtraBold";
})(FontWeights || (FontWeights = {}));
var ModalComponent = class _ModalComponent {
  constructor() {
    this.ModalService = inject(ModalService);
    this.configModel = new ModalModel({
      OnlyOkButtonEnabled: false,
      BtnCancelName: "",
      BtnCancelText: "",
      BtnCancelWidth: 0,
      BtnCancelHeight: 0,
      BtnOkName: "",
      BtnOkText: "",
      BtnOkWidth: 0,
      BtnOkHeight: 0,
      BtnsFontSize: 0,
      ModalMessage: ""
    });
    this.isVisible = false;
    this._ButtonService = inject(ButtonService);
    this.ButtonTypes = ButtonTypeEnum;
    this.ButtonIconPositions = ButtonIconPositionEnum;
    this.FontWeights = FontWeights;
    this.IconsEnum = IconsEnum;
  }
  ngOnInit() {
    this.startListenToShowCommand();
    this.startToListenToButtonClick();
  }
  startListenToShowCommand() {
    this.ModalService.showModal.subscribe((modalModel) => {
      this.configModel = modalModel;
      this.isVisible = true;
    });
  }
  startToListenToButtonClick() {
    this._ButtonService.click.subscribe((name) => {
      if (name == this.configModel.BtnCancelName) {
        this.isVisible = false;
      }
      if (name == this.configModel.BtnOkName) {
        this.isVisible = false;
      }
      this.ConcluirLoadingButton();
    });
  }
  ConcluirLoadingButton() {
    let config = new ButtonConfigModel({
      Name: this.configModel.BtnCancelName,
      LoadingState: true
    });
    this._ButtonService.stateChanged.next(config);
    config = new ButtonConfigModel({
      Name: this.configModel.BtnOkName,
      LoadingState: true
    });
    this._ButtonService.stateChanged.next(config);
  }
  static {
    this.ɵfac = function ModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ModalComponent,
      selectors: [["app-modal"]],
      decls: 7,
      vars: 15,
      consts: [[1, "btns-container"], [3, "margin-right", "name"], [3, "name"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "section")(1, "form")(2, "p");
          ɵɵtext(3);
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 0);
          ɵɵtemplate(5, ModalComponent_Conditional_5_Template, 1, 3, "app-button", 1);
          ɵɵelement(6, "app-button", 2);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵstyleProp("display", ctx.isVisible ? "" : "none");
          ɵɵadvance();
          ɵɵstyleProp("padding", ctx.configModel.BtnsFontSize + "px " + ctx.configModel.BtnsFontSize * 2 + "px")("border-radius", ctx.configModel.BtnsFontSize * 0.8 + "px");
          ɵɵadvance();
          ɵɵstyleProp("font-family", "Arial")("font-size", ctx.configModel.BtnsFontSize + "px");
          ɵɵadvance();
          ɵɵtextInterpolate(ctx.configModel.ModalMessage);
          ɵɵadvance();
          ɵɵstyleProp("padding-top", ctx.configModel.BtnsFontSize * 2 + "px");
          ɵɵadvance();
          ɵɵconditional(!ctx.configModel.OnlyOkButtonEnabled ? 5 : -1);
          ɵɵadvance();
          ɵɵproperty("name", ctx.configModel.BtnOkName);
        }
      },
      dependencies: [ButtonComponent],
      styles: ["section[_ngcontent-%COMP%]{position:fixed;z-index:1000;width:100vw;height:100vh;background:transparent;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(3.6px);-webkit-backdrop-filter:blur(3.6px);display:flex;align-items:start;justify-content:center}section[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{background-color:#fff;display:flex;flex-direction:column;box-shadow:#0000003d 0 3px 8px;width:40%}section[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > .btns-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:end}@media (max-width: 1024px){section[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{width:60%}}@media (max-width: 500px){section[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{width:70%}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{
      selector: "app-modal",
      imports: [ButtonComponent],
      template: `<section\r
[style.display]="isVisible ? '':'none'"\r
>\r
    <form\r
    [style.padding]="configModel.BtnsFontSize + 'px ' + configModel.BtnsFontSize*2 + 'px'"\r
    [style.border-radius]="configModel.BtnsFontSize * 0.8 +'px'"\r
    >\r
        <p\r
        [style.font-family]="'Arial'"\r
        [style.font-size]="configModel.BtnsFontSize + 'px'"\r
        >{{configModel.ModalMessage}}</p>\r
        <div class="btns-container"\r
        [style.padding-top]="configModel.BtnsFontSize*2 + 'px'"\r
        >\r
        @if(!configModel.OnlyOkButtonEnabled){\r
            <app-button\r
            [style.margin-right]="configModel.BtnsFontSize*2 + 'px'"\r
                [name]="configModel.BtnCancelName"\r
            />\r
        }\r
            <app-button\r
                [name]="configModel.BtnOkName"\r
            />\r
        </div>\r
        \r
    </form>\r
</section>\r
`,
      styles: ["section{position:fixed;z-index:1000;width:100vw;height:100vh;background:transparent;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(3.6px);-webkit-backdrop-filter:blur(3.6px);display:flex;align-items:start;justify-content:center}section>form{background-color:#fff;display:flex;flex-direction:column;box-shadow:#0000003d 0 3px 8px;width:40%}section>form>.btns-container{display:flex;align-items:center;justify-content:end}@media (max-width: 1024px){section>form{width:60%}}@media (max-width: 500px){section>form{width:70%}}\n"]
    }]
  }], null, null);
})();
export {
  AlertComponent,
  AlertModel,
  AlertService,
  AlertTypesEnum,
  ButtonComponent,
  ButtonConfigModel,
  ButtonIconPositionEnum,
  ButtonService,
  ButtonTypeEnum,
  FontWeights,
  FormFielTxtModel,
  FormFieldComboModel,
  FormFieldComponent,
  FormFieldCountryDataFormat,
  FormFieldFontWeights,
  FormFieldModel,
  FormFieldService,
  FormFieldTxtInputTypesEnum,
  FormFieldTypes,
  IconsEnum,
  LabelComponent,
  LabelFontWeights,
  LabelIconPositionEnum,
  LabelModel,
  LabelService,
  ListItemComponent,
  ListItemConfigModel,
  ListItemItemNumberPositionEnum,
  ListItemService,
  ListItemTextAlignEnum,
  ListItemTypeEnum,
  ModalComponent,
  ModalModel,
  ModalService,
  TableComponent,
  TableFontWeights,
  TableModel,
  TableModes,
  TableService
};
//# sourceMappingURL=lightning-tec-br-angular-components.js.map
