---
title: استخدام المحررين
description: 
published: true
date: 2022-09-06T09:19:18.947Z
tags: help
editor: markdown
dateCreated: 2022-09-02T14:21:26.328Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ar/help/web_pages">إدارة الصفحات</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/web_visual_editor">استخدام المحرر المرئي</a></td>
      </tr>
    </tbody>
  </table>
</figure>

عند إنشاء صفحة، يمكنك استخدام المحرر الذي تفضله. يفضل بعض المستخدمين كتابة المحتوى باستخدام Markdown، بينما قد يفضل آخرون محررًا أكثر وضوحًا.

## قائمة المحررين

- [محرر مرئي *نص غني WYSIWYG*](/ar/help/web_visual_editor)
- [Markdown *تنسيق النص العادي*](/ar/help/web_markdown_editor)
- [كود *HTML الخام*](/ar/help/web_html_editor)
- [محرر متعدد اللغات *الترجمة *(قريبًا)**](/ar/help/web_multi_editor)
- [محرر الخرائط *يشبه خرائط جوجل *(قريبًا)**](/ar/help/web_map_editor)
- [محرر الشرائح *يشبه Google Slides *(قريبًا)**](/ar/help/web_map_editor)
- [محرر ثلاثي الأبعاد *تشغيل يشبه القماش *(قريبًا)**](/ar/help/web_3d_editor)
- [وثائق واجهة برمجة التطبيقات *REST / GraphQL *(قريبًا)**](/ar/help/web_api)
- [مدونة *الجدول الزمني للمشاركات *(قريبًا)**](/ar/help/web_blog)
- [جدولي *يشبه Excel *(قريبًا)**](/ar/help/web_tabular)

## محرر التغيير

يمكنك تغيير المحرر المُستخدم لأي صفحة باستخدام إجراء **تحويل**. سيحاول هذا الإجراء تحويل المحتوى ليستخدمه المحرر المُختار حديثًا. على سبيل المثال، يمكن تحويل صفحة تم إنشاؤها سابقًا باستخدام محرر Markdown إلى HTML لاستخدامها مع المحرر المرئي.

من قائمتي **إجراءات الصفحة** (الموجودتين في أعلى يمين الصفحة وأسفل يمينها)، حدد **تحويل**. سيظهر مربع الحوار التالي:

![واجهة المستخدم لتحويل الصفحة-dialog.png](https://docs.requarks.io/assets/ui/ui-convert-page-dialog.png =550x){.radius-5 .decor-shadow}

حدد المحرر الذي تريد استخدامه في المستقبل وانقر فوق **تحويل**.

> :warning: **مهم**
> 
> بسبب الاختلافات بين قدرات المحرر/التنسيق، قد يتم فقدان بعض التنسيق أو المحتوى غير المنسق بعد التحويل.
> 
> يتم التقاط لقطة من الصفحة تلقائيًا قبل التحويل ويمكنك الرجوع إلى هذه النسخة أو الرجوع إليها في أي وقت بعد ذلك من سجل الصفحة.
> 
> _أمثلة_
> 
> &#8727;عند الانتقال من Markdown إلى HTML، ستبقى مخططات `draw.io` كصورتها النهائية. لن تتمكن من تعديل المخطط بعد الآن.
> &#8727; عند الانتقال من Markdown إلى HTML، سيتم إرجاع مجموعات علامات التبويب إلى العناوين والفقرات القياسية (كما هو موضح في محرر Markdown).
> &#8727; عند الانتقال من HTML إلى Markdown، لن يتم الاحتفاظ بفئات CSS المخصصة وعناصر HTML التي لا توجد في لغة Markdown.

كمرجع، تحدث تحويلات التنسيق التالية استنادًا إلى محرر المصدر/الهدف المحدد:

| المصدر | الهدف | تحويل التنسيق
| -- | -- | -- |
| Markdown | محرر مرئي | Markdown → HTML |
| Markdown | HTML الخام | Markdown → HTML |
| محرر مرئي | Markdown | HTML → Markdown |
| محرر مرئي | HTML خام | *لا حاجة لتحويل التنسيق*{.caption} |
| HTML الخام | Markdown | HTML → Markdown |
| HTML الخام | محرر مرئي | *لا حاجة لتحويل التنسيق*{.caption} |



<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ar/help/web_pages">إدارة الصفحات</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/web_visual_editor">استخدام المحرر المرئي</a></td>
      </tr>
    </tbody>
  </table>
</figure>