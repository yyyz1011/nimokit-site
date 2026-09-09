import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {products} from '../src/content.mjs';
const root=path.resolve(new URL('../dist/',import.meta.url).pathname);
const pages=['',...products.map(p=>`products/${p.id}/`),'about/','privacy/'].flatMap(p=>[p,'zh/'+p]);
test('Every public route has readable content, one H1, reciprocal locales and its own canonical',()=>{
 for(const route of pages){const html=fs.readFileSync(path.join(root,route,'index.html'),'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route);assert.ok(html.includes(`href="https://nimokit.com/${route}"`),route);assert.ok(html.includes('hreflang="en"'));assert.ok(html.includes('hreflang="zh-CN"'));assert.ok(html.includes('id="main"'));assert.ok(!html.includes('undefined'));if(route.startsWith('products/')||route.startsWith('zh/products/'))assert.ok((html.match(/<section>/g)||[]).length>=4);}
});
test('All internal navigation, assets and fragment targets resolve without a JavaScript router',()=>{
 for(const route of pages){const html=fs.readFileSync(path.join(root,route,'index.html'),'utf8');for(const [,href] of html.matchAll(/(?:href|src)="([^" ]+)"/g)){if(!href.startsWith('/')&&!href.startsWith('#'))continue;const url=new URL(href,'https://nimokit.com/'+route);const target=path.join(root,url.pathname,url.pathname.endsWith('/')?'index.html':'');assert.ok(fs.existsSync(target),`${route} -> ${href}`);if(url.hash){const content=fs.readFileSync(target,'utf8');assert.ok(content.includes(`id="${url.hash.slice(1)}"`),`${route} missing ${href}`);}}}
});
test('Publisher verification is static and adds no third-party analytics or advertising script',()=>{
 const ads=fs.readFileSync(path.join(root,'ads.txt'),'utf8');assert.equal(ads.trim(),'google.com, pub-1733665913500809, DIRECT, f08c47fec0942fa0');
 for(const route of pages){const html=fs.readFileSync(path.join(root,route,'index.html'),'utf8');assert.ok(html.includes('name="google-adsense-account" content="ca-pub-1733665913500809"'));assert.doesNotMatch(html,/<script[^>]*src="https?:/);assert.doesNotMatch(html,/adsbygoogle|googletagmanager/);}
 const app=fs.readFileSync(path.join(root,'assets/app.js'),'utf8');assert.doesNotMatch(app,/fetch\(|XMLHttpRequest|sendBeacon/);
});
test('The product switcher has three paired tabs and panels, with one initial selection',()=>{
 for(const route of ['','zh/']){const html=fs.readFileSync(path.join(root,route,'index.html'),'utf8');assert.equal((html.match(/role="tab"/g)||[]).length,3);assert.equal((html.match(/aria-selected="true"/g)||[]).length,1);for(const p of products){assert.ok(html.includes(`aria-controls="preview-${p.id}"`));assert.ok(html.includes(`id="preview-${p.id}" role="tabpanel" aria-labelledby="tab-${p.id}"`));}}
});
test('The sitemap contains all and only the twelve canonical pages',()=>{const xml=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);assert.equal(urls.length,12);assert.equal(new Set(urls).size,12);for(const route of pages)assert.ok(urls.includes('https://nimokit.com/'+route));});
