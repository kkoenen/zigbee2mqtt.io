"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24443],{691150:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-3dd9806c","path":"/devices/3RSS007Z.html","title":"Third Reality 3RSS007Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Third Reality 3RSS007Z control via MQTT","description":"Integrate your Third Reality 3RSS007Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-03-09T19:04:35.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing mode","slug":"pairing-mode","link":"#pairing-mode","children":[]},{"level":3,"title":"Swap ON/OFF","slug":"swap-on-off","link":"#swap-on-off","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1673775357000},"filePathRelative":"devices/3RSS007Z.md"}')},853362:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var a=i(166252);const o=(0,a._)("h1",{id:"third-reality-3rss007z",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#third-reality-3rss007z","aria-hidden":"true"},"#"),(0,a.Uk)(" Third Reality 3RSS007Z")],-1),l=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"3RSS007Z")],-1),d=(0,a._)("td",null,"Vendor",-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Smart light switch")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"switch (state), linkquality")],-1),h=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/3RSS007Z.jpg",alt:"Third Reality 3RSS007Z"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing-mode" tabindex="-1"><a class="header-anchor" href="#pairing-mode" aria-hidden="true">#</a> Pairing mode</h3><p>To put the device in pairing mode, hold the switch&#39;s button for 30 seconds until LED starts blinking fast (2 blinks per second)</p><h3 id="swap-on-off" tabindex="-1"><a class="header-anchor" href="#swap-on-off" aria-hidden="true">#</a> Swap ON/OFF</h3><p>If the switch is showing off when it is actually on, hold the button till the LED comes on then release, it will change the switch position while keeping the current state.</p>',5),c=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),p={},g=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[l,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Third%20Reality"},{default:(0,a.w5)((()=>[(0,a.Uk)("Third Reality")])),_:1})])]),s,r,h])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a.kq)(" Notes END: Do not edit below this line "),c])}]])}}]);