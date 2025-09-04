---
title: تحويل الموسوعة من TXT إلى Wiki.js
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
        <td><a href="/ar/help/github_topicindex">ترجمة مراجعة للموسوعة</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_diagrams_catalog">كتالوج المخططات</a></td>
      </tr>
    </tbody>
  </table>
</figure>

ملفات *الموسوعة* بصيغة TXT يُنشئها ويراجعها *رؤساء التحرير*. يجب حفظ هذه الملفات في مجلدات مثل `input / txt / topic-index-xx`، حيث `xx` هو رمز اللغة المستهدفة.

لتحويل ملفات TXT هذه إلى تنسيق Wiki.js، اتبع الخطوات التالية:
- افتح *أدوات أورانتيابيديا*.
- في *العملية* حدد: تحويل الموسوعة (TXT) إلى Wiki.js.
- يتم ملء المجلدات تلقائيًا: بالنسبة لملفات TXT، يُملأ مجلد مثل `input / txt / topic-index-xx`، وبالنسبة لملفات HTML، يُملأ مجلد مثل `output / wikijs / xx / topic` (ولكن إذا كان `xx` = `en`، فسيتم حذفه). إذا كان مجلد الإخراج موجودًا، فأنشئ جميع المسارات في مشروعك. إذا كانت هناك ملفات Wiki.js موجودة بالفعل في مجلد الإخراج، فسيتم استبدال الملفات الموجودة.
- في *فئات الموضوعات* حدد "الكل" لمعالجة جميع موضوعات جميع الفئات، أو بدلاً من ذلك، حدد فئة واحدة فقط لتوليد الموضوعات التي تنتمي إلى تلك الفئة فقط.
- انقر فوق *تنفيذ*.
- إذا كان كل شيء صحيحًا، ستظهر رسالة "تم تنفيذ التحويل بنجاح". في حال وجود أخطاء، ستظهر قائمة بها. في هذه الحالة، يُنصح بإبلاغ أحد مستخدمي المطورين بالخطأ.

![](/image/help/upt_txt_wiki.png)

ملفات الإخراج بصيغة HTML. سيتم إنشاء ملف لكل موضوع.

ملفات الإخراج متوفرة بالفعل بالتنسيق الذي يسمح بالتحميل المباشر إلى *Urantiapedia* باستخدام مشروع [Urantiapedia-backup](https://github.com/JanHerca/urantiapedia-backup). تحقق من [تحميل محتوى مجمع إلى Urantiapedia](/ar/help/github_upload).

## الروابط الخارجية

- [أدوات Urantiapedia - مشروع GitHub](https://github.com/JanHerca/urantiapedia)
- [نسخة احتياطية من Urantiapedia - مشروع GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [مؤسسة أورانتيا](https://www.urantia.org/)
- [الحقول الزرقاء](https://blue-fields.netlify.app/)
- [ويكي.جي إس](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ar/help/github_topicindex">ترجمة مراجعة للموسوعة</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_diagrams_catalog">كتالوج المخططات</a></td>
      </tr>
    </tbody>
  </table>
</figure>