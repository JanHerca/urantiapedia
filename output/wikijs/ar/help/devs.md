---
title: "يورانتيابيديا - مساعدة المطورين"
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
        <td><a href="/ar/help/github_assistant">مساعدة المحررين المساعدين</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_fork">البدء باستخدام GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>

## حول يورانتيابيديا

[Urantiapedia](https://urantiapedia.org) هو موقع تعاوني يعتمد على [Wiki.js](https://js.wiki/) بهدف أن يكون مركزًا موحدًا لنشر كل المعرفة المتعلقة بـ *كتاب أورانتيا*.

## نبذة عن بلو فيلدز

[الحقول الزرقاء](https://blue-fields.netlify.app/) هو موقع إلكتروني أُنشئ لجمع وتنظيم قراء *كتاب يورانتيا* الراغبين في التعاون في مشاريع ذكية وهادفة وإيثارية حول العالم. وهو الموقع الذي يُدير التسجيل والتعاون بين متطوعي *يورانتيابيديا*.

## حول GitHub

مشروع [Urantiapedia](https://github.com/JanHerca/urantiapedia) على GitHub هو مشروع أُنشئ لتسهيل بدء تشغيل محتوى *Urantiapedia*. يحتوي المشروع على ملفات بتنسيقات وبرامج معينة تُسهّل إنشاء المحتوى الأولي تلقائيًا.

## لمن هذا الدليل؟

هذا الدليل مخصص للمطورين أو المستخدمين الذين يتوافقون مع هذه المتطلبات:
- المستخدمون المسجلون الذين لديهم حساب على [Blue Fields](https://blue-fields.netlify.app/)، وعلى [Urantiapedia](https://urantiapedia.org) وعلى [GitHub](https://github.com/).
- تم تفويضهم كمتعاونين في المشروع من قبل الفريق الذي يدير المشروع على منصة [Blue Fields](https://blue-fields.netlify.app/).
- مع معرفة جيدة بلغات HTML وCSS وJavascript و[Node.js](https://nodejs.org/)، و[Git](https://git-scm.com/)، و[GitHub](https://github.com/)، و[Bootstrap](https://getbootstrap.com/)، و[Vue.js](https://vuejs.org/).

## سير عمل GitHub

العملية هي سير العمل المعتاد في GitHub:
1. يقوم "المطور" بإنشاء *شوكة* (نسخة في حسابه الخاص) لمشروع *Urantiapedia* على GitHub (https://github.com/JanHerca/urantiapedia) للتطوير في *أدوات Urantiapedia*، أو يقوم بإنشاء *شوكة* لـ Wiki.js (https://github.com/Requarks/wiki) للتطوير في *Wiki.js*.
2. يُنشئ "المطور" نسخة محلية من المشروع على جهاز الكمبيوتر. يجب أن تكون النسخة المحلية من أحدث إصدار للفرع الرئيسي. يتم ذلك أولًا من خلال عملية *استنساخ*، ثم من خلال عمليات *سحب* إلى المشروع، والتي تُنزّل أي تغيير على النسخة المحلية.
3. يقوم "المطور" بإجراء التغييرات في النسخة المحلية ويلتزم بها.
4. يرسل "المطور" التغييرات إلى GitHub من خلال *الدفع*.
5. بالنسبة لأدوات *Urantiapedia*، نظرًا لكونها مستودعًا مملوكًا، يُمكن تقديم طلب سحب من موقع GitHub. أما بالنسبة لـ *Wiki.js*، نظرًا لكونها مملوكة لجهة خارجية، فيلزم إنشاء دمج في هذا *fork* https://github.com/JanHerca/wiki لمركزية طلبات السحب إلى Wiki,js *upstream* عند الحاجة، ولتنسيق التطويرات.
6. تتم مراجعة *طلبات السحب* من قِبل مطورين مُعتمدين، مسؤولين عن *دمج* جميع التغييرات المُعتمدة في الفرع الرئيسي. يتم رفض أي تغيير غير صالح وإخطاره بإصلاحه.
7. بعد إجراء التغييرات على Wiki.js والتأكد من توافقها، يُمكننا تشغيل إصدار جديد من الخادم. يتولى "المسؤولون" هذه المهمة.
8. يتم تكرار العملية عدة مرات حسب الحاجة، حتى العودة إلى النقطة 3.

## تثبيت خادم التطوير

انظر https://docs.requarks.io/install.

انظر https://docs.requarks.io/install/upgrade.

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
        <td><a href="/ar/help/github_assistant">مساعدة المحررين المساعدين</a></td>
        <td><a href="/ar/help">الفهرس</a></td>
        <td><a href="/ar/help/github_fork">البدء باستخدام GitHub</a></td>
      </tr>
    </tbody>
  </table>
</figure>