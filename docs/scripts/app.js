"use strict";function app(){function c(n){var o=document.getElementById("second-section-product-list"),r="";n.forEach(function(n){var o=n.picture,c=n.name,t=n.description,e=n.oldPrice,s=n.price,i=n.installmentTimes,d=(Number(s.replace("$",""))/i).toFixed(2);r+='<div class="second-section-product">\n                <div>\n                <img class="second-section-product-image"\n                  src="'.concat(o,'"\n                  alt=" ').concat(c,'"\n                  loading="lazy"\n                />\n                </div>\n                <div class"second-section-infos-wrapper">\n                <p class="second-section-product-name second-section-product-infos">\n                  ').concat(c,'\n                </p>\n                <div class="second-sections-product-description-wrapper">\n                <p class="second-section-product-description second-section-product-infos">\n                  ').concat(t,'\n                </p>\n                </div>\n                \n                <p class="second-section-product-oldprice second-section-product-infos">\n                  De: R').concat(e,'\n                </p>\n                <p class="second-section-product-price">Por: R').concat(s,'</p>\n                <p class="second-section-product-installments second-section-product-infos">\n                  ou ').concat(i,"x de R$").concat(d,'\n                </p>\n             \n                <button class="second-section-product-button second-section-product-infos">\n                  Comprar\n                </button>\n                </div>\n              </div>')}),o.innerHTML=r}loadJSON(function(n){var o=JSON.parse(n);o&&c(o)},"../resources/products.json")}function loadJSON(n,o){var c=new XMLHttpRequest;c.overrideMimeType("application/json"),c.open("GET",o,!0),c.onreadystatechange=function(){4==c.readyState&&"200"==c.status&&n(c.responseText)},c.send(null)}function getRootPath(){return window.location.href}app();