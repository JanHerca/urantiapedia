# Requirements for Urantiapedia Wiki

## User types

Type | Description
---| ---
ADMIN | User that can do everything
EDITOR | User that has edited at least three pages and has been validated by an ADMIN user
USER | Any new created user

## Page types

Type | Description | Creation | Modification | Removal
---| ---| ---| ---| ---
WEPPAGE | Pages of Wiki itself like start page, help pages, roadmap | ADMIN | ADMIN | ADMIN 
BOOK | Pages with a book chapter each one or a book index | ADMIN | ADMIN (1) | ADMIN 
TOPIC | Pages with explanations for a term, topic or concept related to The Urantia Book | ADMIN | ADMIN & EDITOR | ADMIN
ARTICLE | Pages with an article. Two subtypes: | | |
ARTICLE_AUTHORED | Article from an author, either who uploads the article or someone else | ADMIN & EDITOR | ADMIN & user EDITOR (2) | ADMIN & user EDITOR (2)
ARTICLE_PUBLIC | Article that can be edited by anyone | ADMIN & EDITOR | ADMIN & EDITOR & USER | ADMIN & EDITOR & USER
SLIDES | Pages with a presentation. Two subtypes: | | |
SLIDES_AUTHORED | Slides from an author, either who uploads the slides or someone else | ADMIN & EDITOR | ADMIN & user EDITOR (2) | ADMIN & user EDITOR (2)
SLIDES_PUBLIC | Slides that can be edited by anyone | ADMIN & EDITOR | ADMIN & EDITOR & USER | ADMIN & EDITOR & USER
MAP | Pages with a map (3). Two subtypes: | | |
MAPS_AUTHORED | Map from an author, either who uploads the slides or someone else | ADMIN & EDITOR | ADMIN & user EDITOR (2) | ADMIN & user EDITOR (2)
MAPS_PUBLIC | Map that can be edited by anyone | ADMIN & EDITOR | ADMIN & EDITOR & USER | ADMIN & EDITOR & USER
IMAGE | An image, either a drawing or a graph schema or illustration | ADMIN & EDITOR | ADMIN & EDITOR | ADMIN & EDITOR (4)
3DMODEL | A 3D model | ADMIN & EDITOR | ADMIN & EDITOR | ADMIN & EDITOR (5)

(1) Indirectly changes in TOPIC pages produce changes also in BOOK pages for The Urantia Book.

(2) The EDITOR user that created the page. The page will be linked to this user.

(3) Maps can be in 2D or 3D an can contain:
- Point marks with a popup showing locations. Popups can have links to Wiki or external.
- Paths: several pathpoints with popups in each showing a traveling of a person or people. This paths can be shown as animations.
- Areas: polygons showing location of something without a specific location like empires or nations.

(4) An image only can be removed if there is no other page that links to it. The page of the image, the page that allows to update the image, must allow to know the list of pages that uses the image. Images only could be upload in certain formats and max sizes.

(5) A 3D model only can be removed if there is no other page that links to it. The page of the 3D model, the page that allows to update the 3D model, must allow to know the list of pages that uses the 3D model. 3D models only could be upload in certain format (preferably glTF) and max sizes.


## Functionality: user management

List of functions:
- Creation of new user
	- A user will be defined by: username, password, email
	- Username will be the alias to show who has made changes
	- Anybody can create a ne user but through a two-step system to avoid user creation by bots
- Modification of a user
	- Any user can change: password, email, and CSS style (from several predefined like light, dark, etc.)
	- Username never can be changed
- Removal of a user
	- For ADMIN users any user can be removed without limitation, removing any trace of pages or content created or modified by the user
	- For any non-ADMIN user only can remove user if user has eanything created or modified or if creations or modifications are only in authored content. The user needs to remove any page authored by him previously.
- Block of a user
	- Only for ADMIN users they can set a user as blocked for ever or for a given range of time. A blocked user cannot edit anything, even the user settings
- Show list of users, shown by profile and if they are active or not
- Show contributions list of a user: created pages and modified pages, ordered by date
- Modify user profile
	- Only for ADMIN users they can change the profile a given user.

## URLs

- Domain is one like https://urantiapedia.org
- After it any part of the URL is a page
- Any page MUST be prefixed by language code to avoid collision between pages in different languages. For example https://urantiapedia.org/en:Andrew is the topic page for apostole Andrew.
- Any page MUST be prefixed by type of page code (when it is not a topic) to avoid collision between pages in different type of pages. For example https://urantiapedia.org/en:Nodites is the topic page about nodites and https://urantiapedia.org/en:map:Nodites can be a map page about where lived nodites people
- So URLs should be https//urantiapedia.org/<lan_code>:<type_page>:title
- For topics the type page can be omitted. If type page is not included the server should assume that the page is a topic one.

## Functionality: page creation

List of functions:
- Creation of a new page
	- Title must have same limitations as MediaWiki but without namespaces to make it simpler
	- User must select type of page to create. That will show different options when editing.
	- User must select language for the starting content between list of supported languages
- Modification of a book page
	- Only done by ADMIN users
	- Through a common visual text editor with these options:
		- Add items (by default as paragraphs) usually pressing Enter when one item is selected
		- Set item format: Paragraph, Heading 1 to 4, Preformatted, or Quote
		- Set format of text: bold, italic, stroked, subindex, upperindex, etc.
		- Insert unordered list
		- Insert ordered list
		- Increase/Decrease tabulation
		- Insert image/3D model
		- Insert link (internal & external)
		- Automatic link when writing certain texts, for example {{LU 110:1.1}} (1)
		- Insert table
		- Insert special char
		- Insert Links section
		- Insert References section
		- Insert See Also section
- Modification of a topic page
	- ADMIN & EDITOR users
	- Same visual text editor that for book pages
	- Differences:
		- An option for adding/removing aliases (other names the topic is found in UB)
		- An option to edit category for the topic
		- Show Urantia Book paragraphs on the side of the item selected, if it has links to the book.
		- An option to set a status for the topic: NOT_REVISED, REVISED. Revised are topics that have been checked and the telegraphic style of Fellowship Index has been removed, expanding the text and rewriting it with a better style
- Modification of an article page
	- Same editor that for book pages
- Modification of a slides page
	- Add slides. Each slide is like a minipage, but that fills the browser window and has no scrolling. If items inside a slide exceed space they are overflown
	- Add items to slides. This use the same visual text editor that for book pages.
- Modification of a map page
	- Selector for 2D or 3D map
	- The world map appears in 2D or 3D
	- User can add these items: point marks, paths or areas, all with popups that can contain a title and a description in HTML with links, even with images
	- Once added any item can be selected and moved. Paths or areas can be modified in each point, or add/remove points
	- By default map is opened to center all available items but can be changed to set a given initial view extent saving a given one
- Translation of a book page
	- For important books as The Urantia Book or Bible translation will be done so they will be imported through an automated process
	- For any other book the same system of a topic page can be used
- Translation of a topic page
	- At least the page exists in one language
	- Show a selector for two languages, and show items side-by-side
	- One of the languages is editable, the other is shown as reference
	- Show number of items translated and how much remain
	- Integration of Google Translator API would be helpful
- Translation of an article page
	- Same system as for topic pages
- Translation of a slides page
	- Same system as for topic pages but adding a selector for slide
- Translation of a map page
	- Page shows the list of popups with their titles an descriptions as items
	- From there the same system as for topic pages
- Show list of contributions and changes
	- Show the historical list of changes made to a page, with date, user and a link to show the old version
- Show an old version of the page
	- Show the page as it was in an older version. It cannot be edited.
- Show discussion chat of a page
	- Opens the discussion chat of a page. This page can be one obtained through a subpage that is resolved in server. For example, if urantiapedia.org/en:Andrew is the page for apostle Andrew in english, urantiapedia.org/en:Andrew/d could be the discussion page
- Add/remove messages to discussion chat of a page
- Upload an image or 3D model
- Modify an image or 3D model

(1) Note: Links can be a paragraph o a book or a range of them. In second case the range is what is shown but the link links to first paragraph. For example {{LU 110:1.1-5}}

## Functionality: common use

List of functions:
- Change language for page and language for content
- Search pages, images or 3D models
- Random page
- Show recent changes (filtered by dates)
- Show lists of pages (filtered by name, type, dates, users, language)
- Show list of pages that require translation (filtered as previously)
- Statistics (count & KB created, modified, removed, count of visits)