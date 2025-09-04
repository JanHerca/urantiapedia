---
title: Urantiapedia - سير العمل لإنشاء محتوى أولي بلغة ما
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
        <td><a href="/ar/help/github_edit_local">محتويات مشروع GitHub</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_paramony">ترجمة باراموني</a></td>
      </tr>
    </tbody>
  </table>
</figure>

بالنسبة لكل لغة سيتم دمجها في *Urantiapedia*، سيتم استخدام ما يلي كنقطة بداية. _input_:
- ترجمة رسمية لكتاب أورانتيا، أو النسخة الإنجليزية الأصلية، بصيغة HTML. سيُوضع هذا المحتوى في مجلد `input/html/book-xx` ضمن مشروع GitHub، حيث `xx` هو رمز اللغة المكون من حرفين (`es` = الإسبانية، `en` = الإنجليزية، إلخ). بالنسبة للغة الإسبانية، ونظرًا لوجود عدة ترجمات، سيحتوي مجلد `book-es` على ما يُسمى بالنسخة الأوروبية، و`book-es-1993` على ترجمة عام 1993، و`book-es-2021` على ترجمة عام 2021. في حال تكررت هذه الترجمات في لغات أخرى مستقبلًا، فسيتم اتباع نهج مماثل.
- ترجمة مجانية للكتاب المقدس، متوافقة قدر الإمكان مع اللغة المعنية. ستكون الصيغة LaTeX، وستُوضع الملفات في مجلد `input/tex/bible-xx` ضمن مشروع GitHub، حيث `xx` هو رمز اللغة.
- نسخة من *Paramony* باللغة الإسبانية (الفكرة هي أنها بمثابة دليل للترجمة، والمحتوى الإسباني هو الأقل أهمية) موجودة في `input/markdown/es/paramony`. *Paramony* هي بعض المراجع المتبادلة بين *الكتاب المقدس* و*كتاب أورانتيا* الموجودة في `input/markdown/en/paramony`. تم إنشاؤها باستخدام علاقة المراجع المتبادلة التي طورها Duane L. Faw ([Paramony](https://urantia-book.org/urantiabook/paramony/))، بعد تحويلها من صيغة TXT الأصلية إلى صيغة Markdown أسهل في المعالجة. يحتوي مجلد اللغة الإنجليزية على الجداول التي تحتوي على جميع المعلومات الأصلية؛ أما مجلدات اللغات الأخرى، فتحتوي فقط على الجداول التي تحتوي على النصوص المترجمة.
- نسخة من *فهرس المصطلحات* باللغة الإنجليزية. هذا الفهرس عبارة عن مجموعة ملفات موجودة في مجلد `input/txt/topic-index-en`. تم الحصول على ملفات TXT هذه من ملحق إصدار *زمالة يورانشيا* من *كتاب يورانشيا* ([فهرس المواضيع](https://urantia-book.org/urantiabook/topical_index/index.htm))، والذي سيُشار إليه فيما بعد باسم *فهرس المصطلحات*. حُوِّل *فهرس المصطلحات* هذا إلى مجموعة ملفات TXT، ملف لكل حرف من حروف الأبجدية، تحتوي على مصطلحات تبدأ بكل حرف إنجليزي. يجب إعادة تسمية النسخة بتغيير الحرفين الأخيرين إلى رمز اللغة. على سبيل المثال، بالنسبة للغة الفرنسية، يجب إنشاء نسخة من مجلد اللغة الإنجليزية باسم `input/txt/topic-index-fr`.

باختصار، بالنسبة لمثال اللغة الفرنسية، فإن المحتوى الذي سيتم إنشاؤه كمدخل سيكون:

```
input 
    html 
        book-fr 
            *.html 
    markdown 
        fr 
            paramony 
                *.md 
    tex 
        bible-fr 
            *.tex 
    txt 
        topic-index-fr 
            *.txt 
```
بالنسبة لأي لغة أخرى، يتم ذلك بنفس الطريقة. قد يكون بعض هذا المحتوى متاحًا بالفعل في مشروع GitHub الحالي. يُنصح بمراجعة المحتوى الحالي قبل إضافة محتوى جديد.

النتيجة التي سيولدها المحتوى السابق باللغة الفرنسية ستكون كما يلي:

```
output 
    wikijs 
        fr 
            Bible 
                (folders with the books of the Bible) 
                    *.html 
            index 
                *.html 
            The_Urantia_Book 
                *.html 
            The_Urantia_Book_Multiple
                *.html 
            topic 
                *.html 
``` 

بعد تنظيم المجلدات والملفات كما هو موضح، سيتم تنفيذ جميع المهام اللازمة لإنشاء الملفات النهائية باستخدام *أدوات أورانتيابيديا* وبعض التحرير اليدوي. ستجد تفاصيل ذلك في الصفحات التالية من هذا الدليل.

## الروابط الخارجية

- [أدوات Urantiapedia - المشروع على GitHub](https://github.com/JanHerca/urantiapedia)
- [Urantiapedia-backup - المشروع على GitHub](https://github.com/JanHerca/urantiapedia-backup)
- [مؤسسة يورانشيا](https://www.urantia.org/)
- [الحقول الزرقاء](https://blue-fields.netlify.app/)
- [ويكي.جي إس](https://js.wiki/)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ar/help/github_edit_local">محتويات مشروع GitHub</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_paramony">ترجمة باراموني</a></td>
      </tr>
    </tbody>
  </table>
</figure>