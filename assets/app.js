(() => {
const zh=document.documentElement.lang==='zh-CN';
const themeButton=document.querySelector('.theme-toggle');
const updateThemeLabel=()=>{const dark=document.documentElement.dataset.theme==='dark';themeButton?.setAttribute('aria-label',zh?(dark?'切换为日间模式':'切换为夜间模式'):(dark?'Switch to light mode':'Switch to dark mode'));};
if(themeButton){themeButton.hidden=false;updateThemeLabel();themeButton.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('nimokit:appearance:v1',next);}catch{}updateThemeLabel();});}
const queries=matchMedia('(prefers-color-scheme: dark)');queries.addEventListener('change',event=>{try{if(localStorage.getItem('nimokit:appearance:v1'))return;}catch{}document.documentElement.dataset.theme=event.matches?'dark':'light';updateThemeLabel();});
const showcase=document.querySelector('.showcase');
if(!showcase)return;
const tabs=[...document.querySelectorAll('[data-product]')];
function select(tab,focus=false){const selected=tab.dataset.product;tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;document.getElementById('preview-'+t.dataset.product).hidden=!active;});showcase.dataset.selected=selected;const link=document.querySelector('[data-stage-open]');link.href=tab.dataset.url;link.firstChild.textContent=tab.dataset.action;if(focus)tab.focus();}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>select(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();select(tabs[next],true);}});});
const quotes=zh?[
['你可以先做好一件小事。','选一个今天能够做到的步骤。开始，不需要多么了不起。'],
['给还没想好的事，一点时间。','不必现在就有完整的答案。先照顾好眼前的自己。'],
['你已经比昨天多走了一点。','把注意力放回自己能改变的地方。小小的进展也值得被看见。']
]:[
['You can begin with one small thing.','Choose a step that feels possible today. A beginning does not need to be impressive.'],
['Give the unfinished a little time.','You do not need the whole answer today. Take care of the part that is right in front of you.'],
['A small step is still a step.','Come back to what you can change. Quiet progress deserves to be noticed, too.']
];let quoteIndex=0;
document.querySelectorAll('[data-demo]').forEach(button=>button.addEventListener('click',()=>{
 const kind=button.dataset.demo;
 if(kind==='answer'){quoteIndex=(quoteIndex+1)%quotes.length;document.querySelector('[data-demo-quote]').textContent=quotes[quoteIndex][0];document.querySelector('[data-demo-body]').textContent=quotes[quoteIndex][1];document.querySelector('.book-paper').setAttribute('aria-live','polite');}
 if(kind==='sheetdelta'){document.querySelector('.sheet-preview').classList.toggle('compared');const active=document.querySelector('.sheet-preview').classList.contains('compared');document.querySelector('[data-result="sheetdelta"]').textContent=active?(zh?'笔记本：24 → 32，增加 8。':'Notebook: 24 → 32. An increase of 8.'):(zh?'不起眼的变化，也能看清。':'A small change, easy to miss.');button.firstChild.textContent=active?(zh?'重置示例':'Reset the sample'):(zh?'比较示例表格':'Compare the sample');}
 if(kind==='shiplens'){const panel=document.querySelector('.lens-preview');panel.classList.toggle('inspected');const active=panel.classList.contains('inspected');document.querySelector('[data-result="shiplens"]').textContent=active?(zh?'示例发现：按钮超出了页面边界。':'Sample finding: a button extends beyond the page.'):(zh?'交付之前，再仔细看一眼。':'A view worth checking twice.');button.firstChild.textContent=active?(zh?'重置示例':'Reset the sample'):(zh?'检查示例页面':'Inspect the sample');}
}));
})();
