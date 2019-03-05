## @hamgom95/templates

Template string helper functions.

### API Documentation

#### Constants

<dl>
<dt><a href="#inspect">inspect</a></dt>
<dd><p>Inspect objects in template.</p>
</dd>
<dt><a href="#nonnull">nonnull</a></dt>
<dd><p>Replace null / undefined with empty string in template.</p>
</dd>
</dl>

#### Functions

<dl>
<dt><a href="#partsMap">partsMap(fnVal, fnStr)</a></dt>
<dd><p>Get parts of template string as array and transform them.</p>
</dd>
<dt><a href="#map">map(fnVal, fnStr)</a></dt>
<dd><p>Map over tempalte inserted values</p>
</dd>
<dt><a href="#ifCond">ifCond(cond, else_)</a></dt>
<dd><p>If for templates.</p>
</dd>
<dt><a href="#unlessCond">unlessCond(cond, else_)</a></dt>
<dd><p>Unless for templates.</p>
</dd>
<dt><a href="#formatN">formatN()</a></dt>
<dd><p>Template string function that fills indexes from vals.</p>
</dd>
<dt><a href="#format">format()</a></dt>
<dd><p>Template string function that fills indexes and paths from obj.</p>
</dd>
</dl>

<a name="inspect"></a>

#### inspect
Inspect objects in template.

**Kind**: global constant  
<a name="nonnull"></a>

#### nonnull
Replace null / undefined with empty string in template.

**Kind**: global constant  
<a name="partsMap"></a>

#### partsMap(fnVal, fnStr)
Get parts of template string as array and transform them.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fnVal | <code>function</code> | callback to transform inserted values |
| fnStr | <code>function</code> | callback to transform static str parts |

<a name="map"></a>

#### map(fnVal, fnStr)
Map over tempalte inserted values

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fnVal | <code>function</code> | callback to transform inserted values |
| fnStr | <code>function</code> | callback to transform static str parts |

<a name="ifCond"></a>

#### ifCond(cond, else_)
If for templates.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cond | <code>boolean</code> | Condition to trigger template render. |
| else_ | <code>any</code> | Template to use otherwise. |

<a name="unlessCond"></a>

#### unlessCond(cond, else_)
Unless for templates.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cond | <code>boolean</code> | Condition to trigger template render. |
| else_ | <code>any</code> | Template to use otherwise. |

<a name="formatN"></a>

#### formatN()
Template string function that fills indexes from vals.

**Kind**: global function  
<a name="format"></a>

#### format()
Template string function that fills indexes and paths from obj.

**Kind**: global function  
