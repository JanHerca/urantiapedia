---
title: "إنشاء كتالوج الصور"
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
        <td><a href="/ar/help/github_diagrams_svg">الحصول على المخططات</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>

إليك كيفية إنشاء كتالوج صور المشروع. هذا الكتالوج عبارة عن ملف يُستخدم لأتمتة إدراج الرسوم التوضيحية في *كتاب أورانتيا* وأجزاء أخرى من *يورانتيابيديا*.

سنهتم بالجانب المرئي في يورانتيابيديا. سنحرص على أن يكون المحتوى مرئيًا قدر الإمكان، مع رسوم توضيحية عالية الجودة.

## كتالوجات الصور المتاحة للمجال العام

هناك العديد من مصادر الصور والرسوم التوضيحية المتاحة للعامة والتي يمكن استخدامها لهذا الغرض. من الأمثلة:

ويكيميديا ​​كومنز. هو مشروع شقيق لويكيبيديا لاستضافة الرسوم التوضيحية المتاحة للملكية العامة. تجدون هنا مجموعات من أعمال الفنانين الكلاسيكيين والفنانين ذوي الموضوعات التوراتية:
  - James Tissot:
    - https://commons.wikimedia.org/wiki/Gospel_harmony_(James_Tissot)
    - https://commons.wikimedia.org/wiki/لوحات_لجيمس_تيسو
    - https://www.wikidata.org/wiki/Wikidata:WikiProject_sum_of_all_paintings/Creator/James_Tissot
    - https://commons.wikimedia.org/wiki/Category:The_Life_of_Jesus_Christ_by_James_Tissot
  - William Hole:
    - https://commons.wikimedia.org/wiki/William_Hole%27s_Bible_Illustrations#
  - Gustave Doré:
    - https://commons.wikimedia.org/wiki/Dor%C3%A9%27s_Bible_Illustrations
  - Harold Copping:
    - https://commons.wikimedia.org/wiki/Copping%27s_Bible_Illustrations
- rawpixel. خدمة التقاط صور عبر الإنترنت. لديها العديد من الصور المتاحة للعامة:
  - https://www.rawpixel.com/category/53/public-domain
- مكتبة التراث. مجموعة كبيرة من الرسوم التوضيحية القديمة.
  - https://www.heritagetype.com/pages/free-vintage-illustrations
- المتحف البريطاني.
  - https://www.britishmuseum.org/collection
- المكتبة البريطانية
  - https://www.flickr.com/photos/britishlibrary/albums
- أوروبي.
  - https://www.europeana.eu/en/collections
- متحف. مؤسسات فنية مختلفة متحدة.
  - https://museo.app/
- متحف فيكتوريا وألبرت.
  - https://collections.vam.ac.uk/search/
- متحف ريكس.
  - https://www.rijksmuseum.nl/en/rijksstudio
- سميثسونيان.
  - https://www.si.edu/openaccess
- متحف ييل بيبودي للتاريخ الطبيعي
  - https://collections.peabody.yale.edu/search/
- متروبوليتان
  - https://www.metmuseum.org/art/the-collection
- المعرض الوطني للفنون
  - https://www.nga.gov/open-access-images.html
- مراجعة المجال العام
  - https://publicdomainreview.org/
- مجموعة خرائط ديفيد رامزي
  - https://www.davidrumsey.com/luna/servlet/view/all
- الفنانون المفاهيميون. أعمالهم ليست ملكًا للعامة، ولكن يُمكن التواصل معهم لطلب الإذن باستخدامها.
  - غاري تونغ: https://visionafar.com

## عملية

كتالوج الصور متوفر فقط على GitHub، في `input/markdown/en/image_catalog.md`. لكل لغة كتالوجها الخاص، ولكن الجداول الرئيسية متوفرة فقط في مجلد `en` للغة الإنجليزية. أما بالنسبة لبقية اللغات، فيوجد جدول واحد فقط لترجمات العناوين من الإنجليزية. على سبيل المثال، في `/input/markdown/es/image_catalog.md`، توجد فقط ترجمات العناوين من الإنجليزية إلى الإسبانية.

الكتالوج عبارة عن ملف Markdown يحتوي على عدة أقسام، كل قسم مُعلّم بعلامة `##`. تُمثّل هذه الأقسام كتلًا من الرسوم التوضيحية أو الصور ذات الأصل المتشابه أو المتشابه، مما يسمح بالعمل ضمن مجموعات من الصور.

يوجد في كل قسم جدول بتنسيق Markdown بالمحتوى التالي:
- `ref`: يشير إلى الفقرة من كتاب أورانتيا التي ستحتوي على الصورة أسفلها أو بجانبها. إذا لم تكن معروفة بعد، يُمكن تركها فارغة.
- `float`: يُشير إلى إمكانية ظهور الصورة بجانب النص. يمكن أن تأخذ ثلاث قيم:
  - فارغة: الصورة عبارة عن كتلة والنص يوضع أعلى وأسفل.
  - `R`: تطفو الصورة إلى اليمين ويستمر النص إلى اليسار. إذا لم يكن عرض الجهاز كافيًا، فلن يحدث هذا السلوك.
  - `L`: تطفو الصورة إلى اليسار ويستمر النص إلى اليمين. إذا لم يكن عرض الجهاز كافيًا، فلن يحدث هذا السلوك.
- `title`: عنوان الصورة أو الرسم التوضيحي. يجب أن يكون موجودًا دائمًا.
- `file`: اسم الملف، بما في ذلك امتداده. مسار المجلد مُشار إليه في القسم. يجب أن يكون موجودًا دائمًا.
- `author`: المؤلف. إذا لم يكن معروفًا، يُمكن تركه فارغًا.
- `year`: سنة أو سنوات النشر. إذا لم تكن معروفة، يُمكن تركها فارغة.
- `url`: عنوان الويب الذي تم الحصول على الصورة منه. يجب أن يكون موجودًا دائمًا.

على سبيل المثال، قد يكون هذا مقتطفًا من قسم:

```
## /image/The_Urantia_Book/Jesus_life/paintings


| ref      | float | title                          | file                           | author       | year        | url                                                                                                                                             |
| -------- | ----- | ------------------------------ | -------------------------------| -------------| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------|
| 122:8.5  |       | The Adoration of the Magi      | Adoration_of_the_Magi.jpg      | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Magi_(L'adoration_des_mages)_-_James_Tissot_-_overall.jpg        |
|          |       | The Adoration of the Shepherds | Adoration_of_the_Shepherds.jpg | James Tissot | 1886 – 1894 | https://commons.wikimedia.org/wiki/File:Brooklyn_Museum_-_The_Adoration_of_the_Shepherds_(L'adoration_des_bergers)_-_James_Tissot_-_overall.jpg |
```

لتعديل كتالوج الصور، عليكَ الانتقال إلى مشروع GitHub وتعديل هذا الملف باللغة الإنجليزية: `input/markdown/en/image_catalog.md`. ثم، لكل صورة جديدة، يجب عليكَ تعديل هذا الملف الآخر `input/markdown/en/image_catalog.md` وإضافة ترجمة العنوان من الإنجليزية إلى الإسبانية إليه، مع العلم أنه يُمكن تجاهل هذا التعديل الثاني لأنه عند استخدام كتالوج الصور، نتحقق من العناوين غير المترجمة. لتعديل الملفات، يُمكنكَ تنزيل المشروع كاملاً من GitHub أو الملفات المُراد تعديلها فقط. راجع [مساعدة المُحررين](/en/help/github_assistant) لمعرفة كيفية تنزيل الملفات من GitHub.

## إرسال الملفات

لدفع التغييرات لديك خياران: إذا كنت "رئيس تحرير"، استخدم GitHub كما هو مفصل في [مساعدة رئيس التحرير](/en/help/github)؛ إذا كنت "مساعد محرر"، يمكنك ببساطة إرسال ملفات Markdown المعدلة إلى البريد الإلكتروني لأي مسؤول أو إلى urantiapedia@gmail.com.

## الروابط الخارجية

- [أدوات Urantiapedia - مشروع GitHub](https://github.com/JanHerca/urantiapedia)

<br>

<figure class="table chapter-navigator">
  <table>
    <tbody>
      <tr>
        <td><a href="/ar/help/github_diagrams_svg">الحصول على المخططات</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</figure>
