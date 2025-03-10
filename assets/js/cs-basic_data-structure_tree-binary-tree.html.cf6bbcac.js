"use strict";(self.webpackChunktechnology_life_blog=self.webpackChunktechnology_life_blog||[]).push([[9218],{6262:(s,a)=>{a.A=(s,a)=>{const n=s.__vccOpts||s;for(const[s,t]of a)n[s]=t;return n}},9832:(s,a,n)=>{n.r(a),n.d(a,{comp:()=>e,data:()=>m});var t=n(641);const p={},e=(0,n(6262).A)(p,[["render",function(s,a){return(0,t.uX)(),(0,t.CE)("div",null,a[0]||(a[0]=[(0,t.Fv)('<h2 id="树" tabindex="-1"><a class="header-anchor" href="#树"><span>树</span></a></h2><h3 id="树的定义" tabindex="-1"><a class="header-anchor" href="#树的定义"><span>树的定义</span></a></h3><blockquote><p>定义：是n(<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">n \\geq 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>)个节点的<strong>有限集</strong>。当n = 0时，称为空树。在任意一颗非空树中应满足：</p><ol><li>有且仅有一个特定的称为<strong>根</strong>的结点。</li><li>当n &gt; 1时，其余节点可分为m(m &gt; 0)个互不相交的树，并称其为<strong>子树</strong>。</li></ol></blockquote><p>根据上面树的定义可以知道：树是递归的，树中有包含树；<strong>树是一种逻辑结构和分层结构</strong>。</p><p>并且树的根节点是没有前驱的，除根节点外，其余所有节点有且仅有一个前驱（双亲），但是树中的每个节点可以有0个或多个后继（孩子）。</p><figure><img src="https://camo.githubusercontent.com/10c7c080594f09e22acc36e1b73f9bba2fd8727014cccdea357a41a33f64a7b3/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313532383537323234332d63343865656666632d373732352d343837612d613531392d3831303665393566373535622e706e67" alt="树的示意图" tabindex="0" loading="lazy"><figcaption>树的示意图</figcaption></figure><h3 id="基本术语" tabindex="-1"><a class="header-anchor" href="#基本术语"><span>基本术语</span></a></h3><p>我们需要知道关于树的一些专业术语。</p><ul><li>祖先：使用D节点举例，A到D的唯一路径上除了D的所有的节点全为D的祖先节点。</li><li>子孙：一个节点下的所有子树上的节点都为其子孙，如：D、E、F为C的子孙。</li><li>双亲：根节点到该节点路径上离该节点最近的节点，如：C就为D的双亲，也为E、F的双亲。</li><li>孩子：和双亲类似，D、E、F都为C的孩子，只有根节点没有双亲。</li><li>兄弟：有相同双亲的节点称为兄弟节点。</li><li>堂兄弟：双亲在同一层的结点称为堂兄弟，如：C、G、I为堂兄弟。</li><li>节点的层次：如上面的图，根节点在第一层，往下层数依次增加。</li><li>节点的深度：就是节点的层次。</li><li>树的高度（深度）：树中节点的最大层数。</li><li>节点的高度：是以该节点为根节点的子树高度。</li><li>节点的度：有几个孩子节点，度就为多少。</li><li>树的度：树中节点的最大的度为树的度。</li><li>分支节点：度大于0的节点。</li><li>叶节点：度为0的节点。</li><li>有序树：树中节点的各子树从做到右是有次序的，不能互换。</li><li>无序树：就和上面相反呗，无序并可以相互交换（仅在有一个以上孩子节点时成立）。</li><li>路径：树中两个节点之间的路径是由这两个节点之间所经过的节点序列组成的。</li><li>路径长度：是整个路径上边的条数。</li></ul><h3 id="森林" tabindex="-1"><a class="header-anchor" href="#森林"><span>森林</span></a></h3><blockquote><p>定义：是m(<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">m \\geq 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>)颗互不相交的树的集合。</p></blockquote><p>树和森林在现实生活中是包含关系。在数据结构中也很类似，给m颗树形成的森林加上一个节点，并把这m颗树作为该节点的子树，则森林就变为了树；而树去掉根节点又可以变为森林。</p><h3 id="树的性质" tabindex="-1"><a class="header-anchor" href="#树的性质"><span>树的性质</span></a></h3><p>在树中最重要的就是节点、度数、高度之间的关系了，所以我们来学习这些性质。</p><p><strong>1. 树的节点数n等于所有节点的度数之和加一</strong>：所有的度数之和就是除了根节点之外所有节点之和，所以在此基础上加一就可以得到树的节点数n了。</p><p><strong>2. 度为m的树中第i层上之多有<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>m</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">m^{i - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8247em;"></span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span>个节点(i <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>≥</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\\geq 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>)</strong>：因为条件是之多，故只要每个节点的度都为m，这样在在第i层的结点数就最多。</p><p><strong>3. 高度为h的m叉树至多有<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><msup><mi>m</mi><mi>h</mi></msup><mo>−</mo><mn>1</mn></mrow><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{m^h - 1}{m - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.4463em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0429em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.927em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">h</span></span></span></span></span></span></span></span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>个节点</strong>：根据等比数列的前n项和公式可以轻松得到这个结论。</p><p><strong>4. 度为m、具有n个节点的树的最小高度h为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mi>l</mi><mi>o</mi><msub><mi>g</mi><mi>m</mi></msub><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">(</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>+</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">[log_m(n(m - 1)) + 1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">))</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span>(注意是需要向下取整的)</strong>：因为要求是最小的高度，所以在最后一层之上的每个节点的度都要为m，设树的高度为h，前h - 1层最多有 <strong><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><msup><mi>m</mi><mrow><mi>h</mi><mo>−</mo><mn>1</mn></mrow></msup><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{m^{h - 1}}{m - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.4463em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0429em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.927em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">h</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></strong> 个节点，前n层最多有 <strong><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><msup><mi>m</mi><mi>h</mi></msup><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{m^h}{m - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.4463em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0429em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.927em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">h</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></strong> 个节点，并且要满足 <strong><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><msup><mi>m</mi><mrow><mi>h</mi><mo>−</mo><mn>1</mn></mrow></msup><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><mi>n</mi><mo>≤</mo><mfrac><msup><mi>m</mi><mi>h</mi></msup><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{m^{h - 1}}{m - 1} &lt; n \\leq \\frac{m^h}{m - 1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.4463em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0429em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.927em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">h</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.4463em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0429em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.927em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">h</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></strong>，根据这个不等式可得最终结果。</p><p><strong>5. 度为m、具有n个节点的树的最大高度h为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>−</mo><mi>m</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">n - m + 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></strong>：条件为h最高，则满足在上部分为两两节点连接，只在两两节点相连的最后一个节点实现度为m。</p><h3 id="树的存储结构" tabindex="-1"><a class="header-anchor" href="#树的存储结构"><span>树的存储结构</span></a></h3><h3 id="树和森林的相互转换" tabindex="-1"><a class="header-anchor" href="#树和森林的相互转换"><span>树和森林的相互转换</span></a></h3><h3 id="树和森林的遍历" tabindex="-1"><a class="header-anchor" href="#树和森林的遍历"><span>树和森林的遍历</span></a></h3><figure><img src="https://camo.githubusercontent.com/5b617deeb57e83f87af2c97aa589e0cfd01a4a6c18b4c5f37dacde2ac15b2dec/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313539303236393738392d32366566663464322d353432642d346232652d623634342d3964336264613330376131352e706e67" alt="二叉树示意图" tabindex="0" loading="lazy"><figcaption>二叉树示意图</figcaption></figure><h2 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树</span></a></h2><h3 id="二叉树的定义" tabindex="-1"><a class="header-anchor" href="#二叉树的定义"><span>二叉树的定义</span></a></h3><blockquote><p>定义：是一种特殊的树形结构。</p></blockquote><p>其每个节点至多只有两颗子树，并且二叉树的子树有左右之分，其次序是不能进行交换的。</p><p>因为二叉树也是树的一种，所以在许多地方的性质都是树性质的特殊化。</p><h3 id="二叉树和有序树的区别" tabindex="-1"><a class="header-anchor" href="#二叉树和有序树的区别"><span><strong>二叉树和有序树的区别</strong></span></a></h3><ul><li><p>度为2的树至少要3个节点，而二叉树可以为空。</p></li><li><p>度为2的有序树的孩子的左右次序是相对的，如果该有序树的孩子节点只有一个则不用分左右，但是二叉树中的节点就算只有一个孩子节点都要区分是左还是右。</p></li></ul><h3 id="几种特殊的二叉树" tabindex="-1"><a class="header-anchor" href="#几种特殊的二叉树"><span><strong>几种特殊的二叉树</strong></span></a></h3><ul><li><p><strong>满二叉树</strong>：一颗高为h的二叉树，节点数有<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{n} - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7477em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>，则称其为满二叉树，将树装“满”了。<br><img src="https://camo.githubusercontent.com/9a0bba2fbe2e2ac6f2be40efe5b3597cb9a866902d332c41dd9de7f6b906f3be/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313631333632333833382d63333566616635372d666663382d343535342d613736382d3030396338663664643834372e706e67" alt="满二叉树示意图" loading="lazy"></p></li><li><p>完全二叉树：高度为h、有n个节点的二叉树，并且每个节点都与高度为h的满二叉树中编号一一对应时，称其为完全二叉树。也就是说完全二叉树是满二叉树在叶子节点那一层减少一些右侧连续的节点。<br><img src="https://camo.githubusercontent.com/2031900f42335021fd166b432fb27d89940d1b938216701fd48e8e48b00cd230/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313631333534363733372d65633539353839372d323439632d346435362d613264612d6134383335343561333263622e706e67" alt="完全二叉树示意图" loading="lazy"></p></li><li><p><strong>二叉排序树</strong>：</p></li><li><p><strong>平衡二叉树</strong>：</p></li><li><p><strong>正则二叉树</strong>：</p></li></ul><h3 id="二叉树的特性" tabindex="-1"><a class="header-anchor" href="#二叉树的特性"><span>二叉树的特性</span></a></h3><h3 id="二叉树的存储结构" tabindex="-1"><a class="header-anchor" href="#二叉树的存储结构"><span>二叉树的存储结构</span></a></h3><h2 id="二叉树的遍历和线索二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历和线索二叉树"><span>二叉树的遍历和线索二叉树</span></a></h2><h3 id="二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历"><span>二叉树的遍历</span></a></h3><h3 id="线索二叉树" tabindex="-1"><a class="header-anchor" href="#线索二叉树"><span>线索二叉树</span></a></h3><h2 id="树和二叉树的应用" tabindex="-1"><a class="header-anchor" href="#树和二叉树的应用"><span>树和二叉树的应用</span></a></h2>',38)]))}]]),m=JSON.parse('{"path":"/cs-basic/data-structure/tree-binary-tree.html","title":"树","lang":"zh-CN","frontmatter":{"title":"树","categories":["408","数据结构","树"],"icon":"tree","description":"树 树的定义 定义：是n(n≥0)个节点的有限集。当n = 0时，称为空树。在任意一颗非空树中应满足： 有且仅有一个特定的称为根的结点。 当n > 1时，其余节点可分为m(m > 0)个互不相交的树，并称其为子树。 根据上面树的定义可以知道：树是递归的，树中有包含树；树是一种逻辑结构和分层结构。 并且树的根节点是没有前驱的，除根节点外，其余所有节点有且...","head":[["meta",{"property":"og:url","content":"https://github.com/amatureemoprince/TechnologyAndLife/cs-basic/data-structure/tree-binary-tree.html"}],["meta",{"property":"og:site_name","content":"Java咖啡馆"}],["meta",{"property":"og:title","content":"树"}],["meta",{"property":"og:description","content":"树 树的定义 定义：是n(n≥0)个节点的有限集。当n = 0时，称为空树。在任意一颗非空树中应满足： 有且仅有一个特定的称为根的结点。 当n > 1时，其余节点可分为m(m > 0)个互不相交的树，并称其为子树。 根据上面树的定义可以知道：树是递归的，树中有包含树；树是一种逻辑结构和分层结构。 并且树的根节点是没有前驱的，除根节点外，其余所有节点有且..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://camo.githubusercontent.com/10c7c080594f09e22acc36e1b73f9bba2fd8727014cccdea357a41a33f64a7b3/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313532383537323234332d63343865656666632d373732352d343837612d613531392d3831303665393566373535622e706e67"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-10T13:36:38.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-10T13:36:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树\\",\\"image\\":[\\"https://camo.githubusercontent.com/10c7c080594f09e22acc36e1b73f9bba2fd8727014cccdea357a41a33f64a7b3/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313532383537323234332d63343865656666632d373732352d343837612d613531392d3831303665393566373535622e706e67\\",\\"https://camo.githubusercontent.com/5b617deeb57e83f87af2c97aa589e0cfd01a4a6c18b4c5f37dacde2ac15b2dec/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313539303236393738392d32366566663464322d353432642d346232652d623634342d3964336264613330376131352e706e67\\",\\"https://camo.githubusercontent.com/9a0bba2fbe2e2ac6f2be40efe5b3597cb9a866902d332c41dd9de7f6b906f3be/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313631333632333833382d63333566616635372d666663382d343535342d613736382d3030396338663664643834372e706e67\\",\\"https://camo.githubusercontent.com/2031900f42335021fd166b432fb27d89940d1b938216701fd48e8e48b00cd230/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032352f706e672f34383037333733302f313734313631333534363733372d65633539353839372d323439632d346435362d613264612d6134383335343561333263622e706e67\\"],\\"dateModified\\":\\"2025-03-10T13:36:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阿杰 like coding bug ❥\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"git":{"createdTime":1740981411000,"updatedTime":1741613798000,"contributors":[{"name":"lj","username":"lj","email":"2069057986@qq.com","commits":6,"url":"https://github.com/lj"}]},"readingTime":{"minutes":5.05,"words":1514},"filePathRelative":"cs-basic/data-structure/tree-binary-tree.md","localizedDate":"2025年3月3日","excerpt":"<h2>树</h2>\\n<h3>树的定义</h3>\\n<blockquote>\\n<p>定义：是n(<span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow><annotation encoding=\\"application/x-tex\\">n \\\\geq 0</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7719em;vertical-align:-0.136em;\\"></span><span class=\\"mord mathnormal\\">n</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≥</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6444em;\\"></span><span class=\\"mord\\">0</span></span></span></span>)个节点的<strong>有限集</strong>。当n = 0时，称为空树。在任意一颗非空树中应满足：</p>\\n<ol>\\n<li>有且仅有一个特定的称为<strong>根</strong>的结点。</li>\\n<li>当n &gt; 1时，其余节点可分为m(m &gt; 0)个互不相交的树，并称其为<strong>子树</strong>。</li>\\n</ol>\\n</blockquote>","autoDesc":true}')}}]);