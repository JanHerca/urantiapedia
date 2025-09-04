---
title: تحويل كتاب أورانتيا من JSON مع الحواشي إلى Wiki.js بما في ذلك المراجع إلى المواضيع
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
        <td><a href="/ar/help/github_footnotes">إضافة حواشي Paramony</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_bible_to_wiki">تحويل الكتاب المقدس</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> تم الانتهاء من هذه المهمة حاليًا وإغلاقها بالنسبة للغات الـ27 المتاحة.
{.is-info}

يتم إنشاء ملفات *كتاب أورانتيا* بتنسيق JSON مع الحواشي السفلية باستخدام أداة *تحديث مراجع الكتاب المقدس في كتاب أورانتيا (JSON)*، كما رأينا بالفعل، ويتم حفظ الملفات الناتجة في `input folders / json / book-xx-footnotes`.

لتحويل ملفات JSON هذه إلى تنسيق Wiki.js، اتبع الخطوات التالية:
- افتح *أدوات أورانتيابيديا*.
- في *العملية* حدد: تحويل كتاب أورانتيا (JSON) + الموسوعة (TXT) إلى Wiki.js.
يتم ملء المجلدات تلقائيًا: لملفات TXT، مثل `input / txt / topic-index-xx`، ولملفات JSON، مثل `input / json / book-xx-footnotes`، ولملفات HTML، مثل `output / wikijs / xx / The_Urantia_Book` (ولكن إذا كان `xx` = `en` فسيتم حذفه). إذا كان مجلد الإخراج موجودًا، فأنشئ جميع المسارات في مشروعك. إذا كانت هناك ملفات Wiki.js موجودة بالفعل في مجلد الإخراج، فسيتم استبدال الملفات الموجودة.
- في *فئات الموضوع* حدد "الكل" بحيث عند إجراء عملية التحويل يتم استخدام جميع موضوعات جميع الفئات ويتم إضافة الروابط في *كتاب أورانتيا* إلى جميع الموضوعات، أو بدلاً من ذلك، حدد فئة واحدة فقط لتوليد روابط فقط للموضوعات التي تنتمي إلى تلك الفئة.
- انقر فوق *تنفيذ*.
- إذا كان كل شيء صحيحًا، ستظهر رسالة "تم تنفيذ التحويل بنجاح". في حال وجود أخطاء، ستظهر قائمة بها. في هذه الحالة، يُنصح بإبلاغ أحد مستخدمي المطورين بالخطأ.

![](/image/help/upt_json_wiki.png)

ملفات الإخراج لها تنسيق HTML. سيتم إنشاء 197 ملفًا، ملف واحد لكل ورقة من *كتاب أورانتيا*.

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
        <td><a href="/ar/help/github_footnotes">إضافة حواشي Paramony</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_bible_to_wiki">تحويل الكتاب المقدس</a></td>
      </tr>
    </tbody>
  </table>
</figure>