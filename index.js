"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_extra_1 = require("playwright-extra");
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const fs_1 = __importDefault(require("fs"));
const { exec } = require("child_process");
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms * 1000));
playwright_extra_1.chromium.use((0, puppeteer_extra_plugin_stealth_1.default)());
const test_1 = require("@playwright/test");

let cnt = 0;
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

  async function fuckingmainfunction() {


    let browser = await playwright_extra_1.chromium.launch({ headless: false });
    let page = await browser.newPage();
    await page.goto("https://nopecha.com/setup#" + process.env.TOKENTHINGY + "");
    await page.goto("https://nopecha.com/setup#" + process.env.TOKENTHINGY + "");
    await page.goto("https://nopecha.com/setup#" + process.env.TOKENTHINGY + "");
    await page.goto("https://nopecha.com/setup#" + process.env.TOKENTHINGY + "");
    await page.goto("https://nopecha.com/setup#" + process.env.TOKENTHINGY + "");
    await page.goto("https://sbhight.com/t0csyww8poxe.html");
    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }
    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }

    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }

    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }

    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }
    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }

    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }
    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }
    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }
    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }
    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }
    try {
      await page.frameLocator("xpath=/html/body/main/div[1]/div/div[1]/iframe").locator("xpath=/html/body/div[2]/div[2]/div[13]/div[1]/div/div/div[2]/div").click({ timeout: 6000, force: true })
    } catch (err) { }
    setTimeout(() => {
      try {
        page.context().pages()[1].close()
      } catch (err) { }
    }, 1000)
    setTimeout(() => {
      try {
        page.context().pages()[1].close()
      } catch (err) { }
    }, 2000)
    setTimeout(() => {
      try {
        page.context().pages()[1].close()
      } catch (err) { }
    }, 3000)
    setTimeout(() => {
      try {
        page.context().pages()[1].close()
      } catch (err) { }
    }, 4000)
    setTimeout(() => {
      try {
        page.context().pages()[1].close()
      } catch (err) { }
    }, 5000)

    setTimeout(async () => {
      process.exit()
    }, 3600000)
  }
  fuckingmainfunction();
