---
title: Callout的妙用
tags:
 - obsidian
---

## 简介

callout是Obsidian的一个内置功能，善用callout可以让笔记更加重点突出、简洁美观。

该博客参考了知乎、B站等平台的文章与视频。呈现的都是Blue Topaz主题Topaz-Nord配色下的效果，主题与配色都会使呈现效果不同。

## 普通使用

使用这样的符号就可以启用callout模块: `> [!INFO]`.

例如：

```markdown
> [!INFO]
> 这里是callout模块
> 支持**markdown** 和 [[Internal link|wikilinks]].
```

呈现效果如下：

![info](/img/posts/zh/2023-06-27/info.png)

## 样式

- note
- abstract, summary, tldr
- info, todo
- tip, hint, important
- success, check, done
- question, help, faq
- warning, caution, attention
- failure, fail, missing
- danger, error
- bug
- example
- quote, cite

## 自定义

### 标题和内容

可以自定义标题，然后直接不要主体部分，比如

```markdown
> [!TIP] Callouts can have custom titles, which also supports **markdown**!
```

呈现效果如下：

![title](/img/posts/zh/2023-06-27/title.png)

### 折叠

 可以使用 `+` 默认展开或者 `-` 默认折叠正文部分。 没有 `+` 或 `-` 时是不具备展开折叠的功能的。

```markdown
> [!FAQ]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden until it is expanded.
```

呈现效果如下：

![hide1](/img/posts/zh/2023-06-27/hide1.png)

![hide2](/img/posts/zh/2023-06-27/hide2.png)

## 高级使用

### stickies

在Blue Topaz主题下的特定用法。

```markdown
> [!stickies]
> 这是一个sticky
```

呈现效果如下：

![sticky](/img/posts/zh/2023-06-27/sticky.png)

便签一共有三种样式通过首行的符号修改。三种样式的代码如下：

```markdown
> [!stickies]
> [!stickies2]
> [!stickies3]
```

便签一共有blue、yellow、pink、green四种颜色，可以指定便签的颜色。例如：

```markdown
> [!stickies|blue]
```

### infobox

大概类似于没有属性且内容居中的callout模块？具有上文提到过的callout的所有特性。

```markdown
> [!infobox]+ ### INFOBOX
> 这是infobox的内容
> 还可以放上一些图片
```

呈现效果如下：

![infobox](/img/posts/zh/2023-06-27/infobox.png)

## 结束语

虽然注重内容更重要，但是我就是忍不住想整些花里胡哨的东西。。。

还有些可以设置的地方，因为大概没什么用就不提啦。

