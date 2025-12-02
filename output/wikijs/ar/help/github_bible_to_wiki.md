---
title: تحويل الكتاب المقدس من LaTeX إلى Wiki.js مع الحواشي السفلية
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
        <td><a href="/ar/help/github_book_to_wiki">تحويل كتاب أورانتيا</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_upload">تحميل المحتوى بكميات كبيرة إلى Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>

> تم الانتهاء من هذه المهمة حاليًا وإغلاقها بالنسبة للغات الـ28 المتاحة.
{.is-info}

يجب إنشاء ملفات *الكتاب المقدس* بتنسيق LaTeX في مجلدات مثل `input / text / bible-xx` حيث `xx` هو رمز اللغة المستهدفة.

لتحويل ملفات LaTeX هذه إلى تنسيق Wiki.js، اتبع الخطوات التالية:
- افتح *أدوات أورانتيابيديا*.
- في *العملية* حدد: تحويل الكتاب المقدس (LaTeX) + المراجع (TXT) إلى Wiki.js.
يتم ملء المجلدات تلقائيًا: لملفات TXT، يُملأ ملف مثل `input / txt / bible-refs-xx`، ولملفات LaTeX، يُملأ ملف مثل `input / tex / bible-xx`، ولملفات HTML، يُملأ ملف مثل `output / wikijs / xx / Bible` (ولكن إذا كان `xx` = `en`، فسيتم حذفه). إذا كان مجلد الإخراج موجودًا، فأنشئ جميع المسارات في مشروعك. إذا كانت هناك ملفات Wiki.js موجودة بالفعل في مجلد الإخراج، فسيتم استبدال الملفات الموجودة.
- انقر فوق *تنفيذ*.
- إذا كان كل شيء صحيحًا، ستظهر رسالة "تم تنفيذ التحويل بنجاح". في حال وجود أخطاء، ستظهر قائمة بها. في هذه الحالة، يُنصح بإبلاغ أحد مستخدمي المطورين بالخطأ.

![](/image/help/upt_tex_wiki.png)

ملفات الإخراج بصيغة HTML. سيتم إنشاء ملف لكل فصل من فصول الكتاب المقدس.

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
        <td><a href="/ar/help/github_book_to_wiki">تحويل كتاب أورانتيا</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_upload">تحميل المحتوى بكميات كبيرة إلى Urantiapedia</a></td>
      </tr>
    </tbody>
  </table>
</figure>