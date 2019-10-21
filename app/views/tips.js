import document from "document";
import * as config from "../config";
import * as utils from "../lib/utils";
import * as messaging from "messaging";
import { View, $at } from "../lib/view";
import { me } from "appbit";
import {memory} from "system";
import Clock from "../subviews/clock";

const $ = $at("#view-tips");

export class ViewTips extends View {
  el = $();

constructor() {
    this.btnFinish = $("#btnFinish");
    this.lblTitle = $("#lblTitle");
    this.btnTips = $("#btnTips");
    this.background = $("#lblBackground");
    this.lblTipsDisplay = $("#lblTipsDisplay");
}

  onMount() {
    
    me.appTimeoutEnabled = false; // Disable timeout
  }

  onRender() {}

  onUnmount() {}
}