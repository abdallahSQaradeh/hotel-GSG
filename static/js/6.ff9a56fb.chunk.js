(this["webpackJsonpeslint-prettier-config"]=this["webpackJsonpeslint-prettier-config"]||[]).push([[6],{100:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var i=a(0),s=a(1),r=(a(98),a(56)),n=a(10),o=a(58),c=a(57),l=a.n(c),u=a(53),d=(a(99),a(17));a(100);function h(e){var t=e.src,a=e.alt,s=e.caption;return Object(i.jsxs)("figure",{className:"facility-figure",children:[Object(i.jsx)("img",{className:"facility-img",src:t,alt:a}),Object(i.jsx)("figcaption",{className:"facility-caption",children:s})]})}var f={loading:!1,error:!1,images:[],ready:!1},m=function(e,t){switch(t.type){case"success":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,error:!1,images:t.data,ready:!0});case"fail":return Object(o.a)(Object(o.a)({},e),{},{loading:!1,error:t.error,ready:!1});case"pending":return Object(o.a)(Object(o.a)({},e),{},{loading:!0,ready:!1});default:throw new Error("something went wrong ".concat(t))}};function p(e){var t=Object(s.useReducer)(m,f),a=Object(n.a)(t,2),r=a[0],o=a[1],c=r.images,p=r.loading,j=r.ready,b=r.error;return Object(s.useEffect)((function(){o({type:"pending"}),l.a.get("https://api.pexels.com/v1/search?query=hotel-furniture&size=small&per_page=7&page=1&orientation=square",{headers:{Authorization:"563492ad6f917000010000014efedf2aaca34e57b0cb02d1726c6040"}}).then((function(e){return e.data.photos})).then((function(e){o({type:"success",data:e})})).catch((function(e){o({type:"fail",error:e})}))}),[]),Object(i.jsxs)("div",{className:"body-facility",children:[Object(i.jsxs)("div",{className:"body-header",children:[Object(i.jsx)("h2",{className:"facility-title",children:u.facilitiesPage.title}),Object(i.jsx)("p",{className:"facility-title-description",children:u.facilitiesPage.description})]}),Object(i.jsxs)("div",{className:"facility-list",children:[p&&Object(i.jsx)(d.a,{}),b&&Object(i.jsx)("div",{children:"Something went wrong"}),j&&c.map((function(e,t){return Object(i.jsx)(h,{alt:e.photographer,src:e.src.original,caption:e.photographer},"".concat(e.photographer,"".concat(t+Math.random(),"facility")))}))]})]})}function j(){var e=Object(s.useRef)(null);return Object(i.jsxs)("div",{className:"facilities-page",children:[Object(i.jsx)(p,{myRef:e}),Object(i.jsx)(r.a,{})]})}},53:function(e){e.exports=JSON.parse('{"testimonials":[{"text":"A very pleasant stay!","author":"H.E. Lee Hsien Loong"},{"text":"Calm ,Serene, Retro \u2013 What a way to relax and enjoy ","author":"Mr. Zubair Alam"},{"text":"The attention to detail was a sight to behold","author":"Mr. Charles Back"}],"homePage":{"bodyTitle":"All our room types are including complementary breakfast","texts":[{"title":"Luxury redefined","text":"Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself."},{"title":"Leave your worries in the sand","text":"We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean. "}]},"facilitiesPage":{"title":"FACILITIES","description":"We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure and our modern luxury resort facilities will help you enjoy the best of all. "},"roomPage":{"title":"ROOMS AND RATES","description":"Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, comfort isn\u2019t our only objective, we also value good design, sleek contemporary furnishing complemented by the rich tones of nature\u2019s palette as visible from our rooms\u2019 sea-view windows and terraces. "},"contactPage":{"title":"WE ARE HERE FOR YOU","description":"At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, please forward it to our support desk and we will get back to you as soon as possible.","loc":"497 Evergreen Rd. Roseville, CA 95673","viewMap":"View map","phone":"Phone: +44 345 678 903","email":"Email: luxury_hotels@gmail.com"}}')},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a(10),s=a(0),r=a(1);a(54),a(55);function n(e){var t=e.text,a=e.author;return Object(s.jsxs)("div",{className:"testimonial",children:[Object(s.jsx)("q",{className:"testimonial-text",children:t}),Object(s.jsx)("p",{className:"author",children:a})]})}var o=a(16),c=a.p+"static/media/left.8a224da7.svg",l=a.p+"static/media/right.62a0a411.svg",u=a(53);function d(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),a=t[0],d=t[1],h=Object(r.useState)((function(){return u.testimonials})),f=Object(i.a)(h,1)[0];return Object(s.jsxs)("div",{className:"testimonials",children:[Object(s.jsx)("h2",{className:"testimonials-title",children:"Testimonials"}),f.filter((function(e,t){return t===a})).map((function(e){return Object(s.jsx)(n,{author:e.author,text:e.text},e.author)})),Object(s.jsxs)("div",{className:"testimonial-controls",children:[Object(s.jsx)(o.a,{size:"fit",Icon:c,text:"",clickHandle:function(){d(a-1<0?f.length-1:a-1)}}),Object(s.jsx)(o.a,{size:"fit",Icon:l,text:"",clickHandle:function(){a+1>f.length-1?d(0):d(a+1)}})]})]})}},98:function(e,t,a){},99:function(e,t,a){}}]);
//# sourceMappingURL=6.ff9a56fb.chunk.js.map