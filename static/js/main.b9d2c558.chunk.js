(this["webpackJsonpren-js-tutorial"]=this["webpackJsonpren-js-tutorial"]||[]).push([[0],{1009:function(t,n){},1013:function(t,n){},1085:function(t,n){},1090:function(t,n){},1097:function(t,n){},1109:function(t,n){},1120:function(t,n){},1123:function(t,n){},1126:function(t,n){},1127:function(t,n){},1133:function(t,n){},1240:function(t,n){},1279:function(t,n){},1281:function(t,n){},1287:function(t,n){},1288:function(t,n){},1302:function(t,n){},1303:function(t,n){},1305:function(t,n){},1455:function(t,n,e){},1458:function(t,n,e){"use strict";e.r(n);var a=e(219),r=e.n(a),o=e(696),c=e.n(o),s=(e(720),e(697)),i=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,1461)).then((function(n){var e=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;e(t),a(t),r(t),o(t),c(t)}))},u=e(103);c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(s.a,{})}),document.getElementById("root")),i()},697:function(t,n,e){"use strict";(function(t){var a=e(0),r=e.n(a),o=e(3),c=e(4),s=e(14),i=e(15),u=e(219),f=e.n(u),l=e(444),p=e(229),b=e(710),d=e.n(b),m=(e(1455),e(712)),y=e(103),w="0xb9b0442DE9BC214a23B434Ee2Ec7AF8A4e1b3eeE",h=function(n){Object(s.a)(a,n);var e=Object(i.a)(a);function a(n){var s;return Object(c.a)(this,a),(s=e.call(this,n)).componentDidMount=Object(o.a)(r.a.mark((function t(){var n,e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=13;break}return n=window.ethereum,t.prev=2,t.next=5,window.ethereum.enable();case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(2),s.logError("Please allow access to your Web3 wallet."),t.abrupt("return");case 11:t.next=19;break;case 13:if(!window.web3){t.next=17;break}n=window.web3.currentProvider,t.next=19;break;case 17:return s.logError("Please install MetaMask!"),t.abrupt("return");case 19:return e=new d.a(n),t.next=22,e.eth.net.getId();case 22:if(42===t.sent){t.next=26;break}return s.logError("Please set your network to Kovan."),t.abrupt("return");case 26:s.setState({web3:e},(function(){s.updateBalance(),setInterval((function(){s.updateBalance()}),1e4)}));case 27:case"end":return t.stop()}}),t,null,[[2,7]])}))),s.render=function(){var t=s.state,n=t.balance,e=t.message,a=t.error;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("p",{children:["Balance: ",n," BTC"]}),Object(y.jsx)("p",{children:Object(y.jsx)("button",{onClick:function(){return s.deposit().catch(s.logError)},children:"Deposit 0.003 BTC"})}),Object(y.jsx)("p",{children:Object(y.jsxs)("button",{onClick:function(){return s.withdraw().catch(s.logError)},children:["Withdraw ",n," BTC"]})}),e.split("\n").map((function(t){return Object(y.jsx)("p",{children:t})})),a?Object(y.jsx)("p",{style:{color:"red"},children:a}):null]})},s.updateBalance=Object(o.a)(r.a.mark((function t(){var n,e,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.state.web3,e=new n.eth.Contract(m,w),t.next=4,e.methods.balance().call();case 4:a=t.sent,s.setState({balance:parseInt(a.toString())/Math.pow(10,8)});case 6:case"end":return t.stop()}}),t)}))),s.logError=function(t){console.error(t),s.setState({error:String((t||{}).message||t)})},s.log=function(t){s.setState({message:t})},s.deposit=Object(o.a)(r.a.mark((function n(){var e,a,c,i,u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.logError(""),e=s.state,a=e.web3,c=e.renJS,i=.003,n.next=5,c.lockAndMint({asset:"BTC",from:Object(p.a)(),to:Object(p.b)(a.currentProvider).Contract({sendTo:w,contractFn:"deposit",contractParams:[{name:"_msg",type:"bytes",value:t.from("Depositing ".concat(i," BTC"))}]})});case 5:u=n.sent,s.log("Deposit ".concat(i," BTC to ").concat(u.gatewayAddress)),u.on("deposit",function(){var t=Object(o.a)(r.a.mark((function t(n){var e,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.txHash(),a=function(t){return s.log("BTC deposit: ".concat(p.a.utils.transactionExplorerLink(n.depositDetails.transaction,"testnet"),"\n\n          RenVM Hash: ").concat(e,"\n\n          Status: ").concat(n.status,"\n\n          ").concat(t))},t.next=4,n.confirmed().on("target",(function(t){return a("0/".concat(t," confirmations"))})).on("confirmation",(function(t,n){return a("".concat(t,"/").concat(n," confirmations"))}));case 4:return t.next=6,n.signed().on("status",(function(t){return a("Status: ".concat(t))}));case 6:return t.next=8,n.mint().on("transactionHash",(function(t){return a("Mint tx: ".concat(t))}));case 8:s.log("Deposited ".concat(i," BTC."));case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());case 8:case"end":return n.stop()}}),n)}))),s.withdraw=Object(o.a)(r.a.mark((function n(){var e,a,o,c,i,u,f,b;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.logError(""),e=s.state,a=e.web3,o=e.renJS,c=e.balance,i=prompt("Enter BTC recipient:"),u=c,n.next=6,o.burnAndRelease({asset:"BTC",to:Object(p.a)().Address(i),from:Object(p.b)(a.currentProvider).Contract((function(n){return{sendTo:w,contractFn:"withdraw",contractParams:[{type:"bytes",name:"_msg",value:t.from("Withdrawing ".concat(u," BTC"))},{type:"bytes",name:"_to",value:t.from(n)},{type:"uint256",name:"_amount",value:l.a.utils.toSmallestUnit(u,8)}]}}))});case 6:return f=n.sent,b=0,n.next=10,f.burn().on("confirmation",(function(t){b=t})).on("transactionHash",(function(t){return s.log("Ethereum transaction: ".concat(String(t),"\nSubmitting..."))}));case 10:return n.next=12,f.release().on("status",(function(t){return"confirming"===t?s.log("".concat(t," (").concat(b,"/15)")):s.log(t)})).on("txHash",s.log);case 12:s.log("Withdrew ".concat(u," BTC to ").concat(i,"."));case 13:case"end":return n.stop()}}),n)}))),s.state={balance:0,message:"",error:"",renJS:new l.a("testnet")},s}return a}(f.a.Component);n.a=h}).call(this,e(1).Buffer)},712:function(t){t.exports=JSON.parse('[{"constant":false,"inputs":[{"name":"_msg","type":"bytes"},{"name":"_amount","type":"uint256"},{"name":"_nHash","type":"bytes32"},{"name":"_sig","type":"bytes"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_msg","type":"bytes"},{"name":"_to","type":"bytes"},{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_registry","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_msg","type":"bytes"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"bytes"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_msg","type":"bytes"}],"name":"Withdrawal","type":"event"}]')},720:function(t,n,e){},731:function(t,n){},806:function(t,n){},813:function(t,n){},815:function(t,n){},824:function(t,n){},826:function(t,n){},852:function(t,n){},853:function(t,n){},858:function(t,n){},860:function(t,n){},867:function(t,n){},885:function(t,n){},927:function(t,n){},943:function(t,n){},998:function(t,n){}},[[1458,1,2]]]);
//# sourceMappingURL=main.b9d2c558.chunk.js.map