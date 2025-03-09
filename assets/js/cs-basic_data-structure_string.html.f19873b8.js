"use strict";(self.webpackChunktechnology_life_blog=self.webpackChunktechnology_life_blog||[]).push([[8202],{6262:(s,a)=>{a.A=(s,a)=>{const n=s.__vccOpts||s;for(const[s,t]of a)n[s]=t;return n}},9663:(s,a,n)=>{n.r(a),n.d(a,{comp:()=>e,data:()=>i});var t=n(641);const p={},e=(0,n(6262).A)(p,[["render",function(s,a){return(0,t.uX)(),(0,t.CE)("div",null,a[0]||(a[0]=[(0,t.Fv)('<h2 id="串的定义" tabindex="-1"><a class="header-anchor" href="#串的定义"><span>串的定义</span></a></h2><blockquote><p>定义：由零个或多个字符组成的有限序列。</p></blockquote><p>记为：S = &#39;<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><msub><mi>a</mi><mn>2</mn></msub><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><mi mathvariant="normal">.</mi><msub><mi>a</mi><mi>n</mi></msub></mrow><annotation encoding="application/x-tex">a_1a_2...a_n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">...</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>&#39; (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">n \\geq 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>)</p><p>S是串的名称，其中字符个数称为串的长度。当n = 0时，称其为<strong>空串</strong>。</p><p>串中任意多个连续的子序列称为该串的<strong>子串</strong>。包含这个子串的字符串称为<strong>主串</strong>。子串在主串中的位置是子串与主串相同时子串第一个字符在主串中的位置。</p><p>如：主串&quot;I AM A PIG&quot;中有个子串&quot;PIG&quot;，子串的位置是8，空格也是需要加入计算的。</p><p>通常来说串的基本操作是以子串作为操作对象的，这一点和线性表有着不同。</p><h2 id="串的基本操作" tabindex="-1"><a class="header-anchor" href="#串的基本操作"><span>串的基本操作</span></a></h2><ul><li>strCopy(char *string, char *data)：将data的字符串复制给string</li><li>subString(char *string, char *data, int start, int len)：使用string返回data中从start开始长度为len的子串</li><li>strLength(char *string)：返回string的长度</li><li>index(char *s, char *t)：定位，若s中存在t则返回t的位置，否则返回0</li><li>contact(char *s, char *t, char *m)：连接，将t和m连接起来使用s返回</li><li>strCompare(char *s, char *t)：比较字符串，s大于t则返回1，s=t返回0，s小于t返回-1</li><li>clear(char *s)：将s中的字符全部清除，使其变为空串</li></ul><p>根据上面的基本操作可以构建更复杂更强大的功能。</p><h2 id="串的存储结构" tabindex="-1"><a class="header-anchor" href="#串的存储结构"><span>串的存储结构</span></a></h2><h3 id="顺序存储结构" tabindex="-1"><a class="header-anchor" href="#顺序存储结构"><span>顺序存储结构</span></a></h3><h3 id="堆分配存储结构" tabindex="-1"><a class="header-anchor" href="#堆分配存储结构"><span>堆分配存储结构</span></a></h3><h3 id="块链存储结构" tabindex="-1"><a class="header-anchor" href="#块链存储结构"><span>块链存储结构</span></a></h3><h2 id="串的模式匹配" tabindex="-1"><a class="header-anchor" href="#串的模式匹配"><span>串的模式匹配</span></a></h2><h3 id="简单模式匹配" tabindex="-1"><a class="header-anchor" href="#简单模式匹配"><span>简单模式匹配</span></a></h3><h3 id="kmp算法" tabindex="-1"><a class="header-anchor" href="#kmp算法"><span>KMP算法</span></a></h3><h3 id="kmp算法的优化" tabindex="-1"><a class="header-anchor" href="#kmp算法的优化"><span>KMP算法的优化</span></a></h3>',18)]))}]]),i=JSON.parse('{"path":"/cs-basic/data-structure/string.html","title":"串","lang":"zh-CN","frontmatter":{"title":"串","categories":["408","数据结构","串"],"icon":"paper-plane","description":"串的定义 定义：由零个或多个字符组成的有限序列。 记为：S = \'a1​a2​...an​\' (n≥1) S是串的名称，其中字符个数称为串的长度。当n = 0时，称其为空串。 串中任意多个连续的子序列称为该串的子串。包含这个子串的字符串称为主串。子串在主串中的位置是子串与主串相同时子串第一个字符在主串中的位置。 如：主串\\"I AM A PIG\\"中有个子...","head":[["meta",{"property":"og:url","content":"https://github.com/amatureemoprince/TechnologyAndLife/cs-basic/data-structure/string.html"}],["meta",{"property":"og:site_name","content":"Java咖啡馆"}],["meta",{"property":"og:title","content":"串"}],["meta",{"property":"og:description","content":"串的定义 定义：由零个或多个字符组成的有限序列。 记为：S = \'a1​a2​...an​\' (n≥1) S是串的名称，其中字符个数称为串的长度。当n = 0时，称其为空串。 串中任意多个连续的子序列称为该串的子串。包含这个子串的字符串称为主串。子串在主串中的位置是子串与主串相同时子串第一个字符在主串中的位置。 如：主串\\"I AM A PIG\\"中有个子..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-09T03:48:24.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-09T03:48:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"串\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-09T03:48:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"阿杰 like coding bug ❥\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"git":{"createdTime":1741330391000,"updatedTime":1741492104000,"contributors":[{"name":"lj","username":"lj","email":"2069057986@qq.com","commits":2,"url":"https://github.com/lj"}]},"readingTime":{"minutes":1.39,"words":416},"filePathRelative":"cs-basic/data-structure/string.md","localizedDate":"2025年3月7日","excerpt":"<h2>串的定义</h2>\\n<blockquote>\\n<p>定义：由零个或多个字符组成的有限序列。</p>\\n</blockquote>\\n<p>记为：S = \'<span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><msub><mi>a</mi><mn>2</mn></msub><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><msub><mi>a</mi><mi>n</mi></msub></mrow><annotation encoding=\\"application/x-tex\\">a_1a_2...a_n</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.5806em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">a</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">a</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3011em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mord\\">...</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">a</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.1514em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>\'  (<span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\\"application/x-tex\\">n \\\\geq 1</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7719em;vertical-align:-0.136em;\\"></span><span class=\\"mord mathnormal\\">n</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">≥</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6444em;\\"></span><span class=\\"mord\\">1</span></span></span></span>)</p>","autoDesc":true}')}}]);