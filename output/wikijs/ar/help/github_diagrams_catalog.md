---
title: "إنشاء كتالوج للرسوم البيانية"
description:
published: true
date: 2021-11-28T14:02:03.086Z
tags: help
editor: markdown
dateCreated: 2021-11-28T14:02:03.086Z
---

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ar/help/github_topicindex_to_wiki">تحويل الموسوعة</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_diagrams_svg">الحصول على المخططات</a></td>
      </tr>
    </tbody>
  </table>
</figure>

فيما يلي كيفية إنشاء كتالوج لمخططات _كتاب أورانتيا_.

## عملية

العملية مطابقة لتلك الموضحة للمقالات. انظر [إنشاء كتالوج مقالات](/en/help/github_articles_catalog). يمكنك الاطلاع على القائمة الأولية للمخططات هنا: [المخططات المخططة](/en/index/diagrams).

لتحرير هذه القائمة، يمكنك القيام بذلك بطريقتين:

- سجّل دخولك هنا إلى _Urantiapedia_. انتقل إلى قائمة المخططات: [المخططات المخططة](/ar/index/diagrams). أضف الصفحة إلى قائمة التحرير من خلال قائمة _إجراءات الصفحة > تحرير_ في لوحة الأزرار العلوية اليمنى. سيظهر لك محرر Markdown بسيط يمكنك من خلاله تحرير القائمة. (هام: لتتمكن من القيام بذلك، يجب أن يكون لديك مسؤول لتمكين صلاحيات التحرير على تلك الصفحة.)
- في مشروع GitHub، عدّل هذا الملف: `/output/wikijs/en/index/diagrams.md`. لتعديله، يمكنك ببساطة تنزيل هذا الملف أو المشروع كاملاً من GitHub. راجع [مساعدة المحررين](/en/help/github_assistant) لمعرفة كيفية تنزيل العناصر من GitHub.

في أي من الحالتين السابقتين، يكون الملف الذي سيتم تحريره عبارة عن ملف Markdown بسيط للغاية حيث يجب تضمين ما يلي لكل رسم بياني، في شكل جدول:

- علم `:white_square_button:` يشير إلى أن الرسم التخطيطي لم يتم إنشاؤه بعد.
- عنوان.
- المؤلف.
- بعض العلامات الاختيارية التي تصنف الرسم التخطيطي.
- عنوان URL الذي يمكن من خلاله تنزيل هذا الرسم التخطيطي.

على سبيل المثال:

```
| Status                | Title                              | Author  | Tags  | URL                               |
| ----------------------| -----------------------------------| --------| ----- | --------------------------------- |
| :white_square_button: | "The Kingdom of Heaven Revelation" |         |       | http://www.universalfather.info/  |
```

## إرسال الملفات

إذا قمت بتعديل القائمة من الملف على GitHub، فلديك خياران لتأكيد تغييراتك: إذا كنت "رئيس تحرير"، فاستخدم GitHub كما هو مفصل في [مساعدة رئيس التحرير](/en/help/github)؛ إذا كنت "مساعد محرر"، يمكنك ببساطة إرسال ملف Markdown المعدل إلى بريد إلكتروني أي مسؤول أو إلى urantiapedia@gmail.com.

## الروابط الخارجية

- [أدوات Urantiapedia - مشروع GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ar/help/github_topicindex_to_wiki">تحويل الموسوعة</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_diagrams_svg">الحصول على المخططات</a></td>
      </tr>
    </tbody>
  </table>
</figure>
