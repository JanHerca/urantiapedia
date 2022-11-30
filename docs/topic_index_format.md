# Topic Index Format

## What is Topic Index

Topic Index is a collection of webpages, one per topic that appears in _The Urantia Book_. For example, the book talks about a type of beings named Vorondadeks, so there is a page for them; or talks about a place called Edentia; or an event like the arrival of Adam and Eve; or a person like Grandfanda. All these are examples of topics. The Topic Index is the collection of all pages containing them.

In Urantiapedia this pages are find using an URL like this:
`https://urantiapedia.org/en/topic/<name_of_topic>`

Some considerations in the URL:
- The language code (`en`) can be replaced with any valid one (`es`, `pt`, etc.) to obtain the topic page in each language.
- The `name_of_topic` is the English name without blank spaces.

## Purpose of the format

The format described here is designed with these motivations in mind:
- Use a reduced number of files. There are between 4,000 to 5,000 topics that can be extracted from _The Urantia Book_. Trying to manage those number of files is difficult. Best way is to work with a less number.
- Use a compact format. Editing that involves writing is very time consumig task. To speed it compact formats help a lot.
- Format that mix in one structure, content and style with very little markup. Content should have structure and style. Mixing them in the format in a very compact way is crucial.

## Description of the format

Rules to create Topic Index Formatted files:
- Files must have TXT extension.
- Each file must contain all topics starting in English with a letter.
- Each topic must be separated before and after by a blank lines. Topic content cannot have blank lines.
- Topic content must be in the same line number for different languages. All languages share the same structure in the content in the same lines, so it is easy to compare content between languages.
- Each topic must have:
  -  a name (required), 
  -  a list of alias for the name (optional),
  -  a list of general references to _The Urantia Book_ (optional)
  -  a list of links to other topics (optional)
  -  a list of external links (optional)
  -  a category (optional)
  -  a status value indicating if the topic has been reviewed (required)
  -  a list of lines, either sentences or headings (optional)
- Each line in the list of lines can contain:
  - one or several sentences (required), references to the book (optional) and links to other topics (optional)
  - sentences can start with lowecase or end without final dot. They are fixed.
  - lines can be ordered or unordered lists
  - lines can be headings. This can be done indenting next lines.

## Some limitations of current format

- Lines should be more powerful to support the following:
  - Paragraph breaks. Now them are added automatically through an algorithm.
  - Style marks like italics or bold.
  - Links to Bible
  - Links to other topics with a labeled link that indicates the type of relation
  - Illustrations
  - Summary tables


## Example excerpt

URL: `https://urantiapedia.org/en/topic/Adam`
The topic shown is only a fragment to show different elements.

```
Adam | (74) (75) (165:0.1) | Eve; Garden of Eden; Material Sons | PERSON | OK
Adam, along with his consort, Eve, are the Material Sons of Jerusem in charge of acting as the initiators of the adamic race on Urantia, following a plan that is thus carried out on all inhabited planets.
on Jerusem (74:1)
	Adam and Eve had been experimental energy directors for living forms for 15,000 years, and had previously worked as instructors in citizenship schools (74:1.2)
	both were expert anatomists (74:3.8)
	left behind 100 sons and daughters born on Jerusem (74:1.5)
> https://en.wikipedia.org/wiki/Adam
```