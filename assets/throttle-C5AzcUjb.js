function t(t,n){let e=0;return function(...o){const c=new Date;c-e>=n&&(t(...o),e=c)}}export{t};
