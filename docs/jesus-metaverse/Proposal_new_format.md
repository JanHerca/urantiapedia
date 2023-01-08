# Proposal for a new Topic format

This proposal is a work-in-progress document to create a unified format for topics that can be used by both The Jesus Metaverse project of the Center For Unity and Urantiapedia.


## Some considerations

- A good format is Markdown. It is fast to write both content and style, and can easily be converted to HTML. Urantiapedia supports Markdown directly.
- Each entry could have a heading 1 and then some metadata between separations `---`. Metadata values could be these:
	- Name: Required. Offical name for the Topic.
	- URL: Required. How the name is shown in the URL, resolving ambiguities.
	- Title: Required. Title in the page.
	- Aliases: Optional. Other names or expressions that appear in The Urantia Book. This aliases help introducing links in the book.
	- Locations: Optional. Names of Topic places related.
	- Events: Optional. Name of events and dates related.
	- Persons: Optional. Name of persons related.
	- Groups: Optional. Name of groups of persons related to the current
	- Beings: Optional. Name of types of beings related.
	- Religions: Optional. Name of religions related.
	- Races: Optional. Name of races related.
	- Concepts: Optional. Name of other concepts related.
	- Tags: Tags
	- Urantia Book References: Optional if references are inside the text, required otherwise. These references can be inserted between the text (preferred way) or at this metadata. It is important to decide a common way to give these references, using a common pattern.
	- Untold Story of Jesus references: Optional. This references only are meaningful for Topics related to Jesus life.
	- Bible references: Optional. This references can be like UB, inserted inside the text or here in the metadata. It is important to decide a common way to give these references.
- The text is proposed to have Markdown format, using headings, paragrpahs, lists, tables, etc, in the format defined in Markdown.

## Example combining current content from Jesus Metaverse and Urantiapedia

This is a work-in-progress and not finished example of the proposed format combaining current content for the Topic "Judas Iscariot" in Jesus Metaverse and Urantiapedia.

```Markdown
# Judas Iscariot

---
Name | Judas Iscariot
URL | Judas_Iscariot
Title | Judas Iscariot - Apostle and betrayer of Jesus
Aliases | Judas; Judas the wanderer; Judas, the betrayer
Locations | Kerioth of Judea; Jericho; Tarichea; Sea of Galilee; Jerusalem; Nazareth
Events | 5 BCE - Birth of Judas Iscariot; July, 26 CE - Judas Iscariot chosen as apostle; January 12, 27 CE - Apostles Ordination; April 6, 30 CE - Betrayal of Judas Iscariot; April 7, 30 CE - Suicide of Judas Iscariot
Persons | Jesus; Simon Peter; Andrew; John; James; Nathaniel; Phillip; John the Baptist
Groups | Apostles of Jesus; Disciples of John the Baptist; Sadducees; Judeans
Concepts | betrayal
Tags | person; Judas Iscariot; disciple of John the Baptist; Judean; twelfth apostle; treasurer; the betrayer; thirty pieces of silver; kissed Jesus
Urantia Book references | (183) (139:12) (143:3.5) (144:1.7) (147:2.1) (151:2.8) (177:4) (178:2.6) (193:4)
138:10:5 (1547.5) Distributing funds to the apostles’ families.
138:5:1 (1542.2) Selected as an apostle.
138:8:1 (1545.2) Funds for training missions.
138:2:9 (1540.2) Son of wealthy parents living in Jericho. The only Judean.
138:5:4 (1542.5) John in prison.
138:10:10 (1547.10) Duties as treasurer.
139:12:2 (1566.1) Judas’ flawed character.
139:12:3 (1566.2) A good treasurer.
139:12:7 (1566.6) Jesus’ attitude toward Judas.
139:12:14 (1567.7) Legacy as a betrayer.
139:12:4 (1566.3) Judas’ prejudices.
139:12:6 (1566.5) Judas’ unwise parents, his vengefulness.
139:12:5 (1566.4) A good businessman.
139:12:11 (1567.4) Jesus warns Judas he is slipping.
139:6:2 (1558.3) Judas’ education.
139:12:1 (1565.9) Judas’s Sadducean parents who disowned him.
139:12:8 (1567.1) Judas’ lack of spiritual progress.
139:12:9 (1567.2) Judas, a victim of resentment.
143:0:2 (1607.2) Hatred for Samaritans.
153:0:2 (1707.2) Disappointment about Jesus.
157:7:2 (1751.1) Justifications for the betrayal.
157:7:4 (1751.3) Harboring revenge.
172:5:12 (1886.4) Entering Jerusalem on a donkey.
172:5:13 (1887.1) Aversion to ridicule.
172:1:7 (1879.5) Jesus’ rebuke over the expensive incense. 
174:0:2 (1897.2) Final warning from Jesus.
177:4:5 (1925.2) Final decision to abandon Jesus and his fellow apostles.
177:4:7 (1925.4) Plotting with Caiaphas.
177:4:4 (1925.1) Betrayal for honor not money.
177:4:8 (1926.1) The plan for arresting Jesus.
177:4:11 (1926.4) Judas the coward.
177:4:10 (1926.3) Judas’ lovelessness.
178:2:3 (1932.6) Jesus knew Judas’ plot.
179:1:4 (1937.2) Judas takes the preferred seat at the Last Supper.
179:3:7 (1939.5) Washing Judas’ feet.
179:4:3 (1940.5) Judas asks “Is it I?
179:4:6 (1941.3) Jesus tells Judas to go and do what he has planned.
182:2:13 (1968.1) Judas confers with the temple guards.
183:3:4 (1974.2) Jesus’ attempt to save Judas from the betrayal.
183:3:5 (1974.3) Judas identifies Jesus with a kiss.
186:1:1 (1997.4) Judas comes to claim his reward.
186:1:2 (1997.5) Contempt for Judas.
186:1:4 (1998.2) Judas repents.
186:1:5 (1998.3) Judas is dismissed.
186:1:6 (1998.4) Throwing the 30 silver pieces on the temple floor.
192:0:2 (2045.2) Replacing Judas with Matthias.
193:4:2 (2055.5) Judas’s social isolation.
193:4:4 (2056.2) Seven reasons for the betrayal.
193:4:1 (2055.4) Lessons to be learned from Judas.
Untold Story of Jesus references | 121, 122, 123, 125, 127, 129, 133-134, 145, 159, 169, 177, 184, 202, 246, 265, 270, 271, 272, 273, 274, 276, 284, 289-291, 294, 295, **303**, 312, 331
Bible references: Matthew 10:4; 26:14,25,47; 27:3. Mark 3:19; 14:10,43. Luke 6:16; 22:3,47-48. John 6:71; 12:4; 13:2; 18:3. Acts 1:25.
---

## Summary 

Judas Iscariot was born in 5 BCE, in Kerioth, a village in southern Judea. He was the only child of Jewish parents. The family moved to Jericho when Judas was a boy. 

Judas’ parents were Sadducees and when their grown son joined John the Baptist’s group, they disowned him. One day, while Judas was with John’s group, he was asked by Nathaniel to become a follower of Jesus. He was thirty, unmarried, and the twelfth and last apostle to be selected.  He and the other apostles were ordained by Jesus on January 12th, 27 CE. His role was treasurer of the group, an assignment he faithfully discharged for four years.

Judas was a spoiled child who became a vengeful, intolerant man. He misunderstood Jesus’ mission and questioned Jesus’ wisdom and decisions. These factors, and others, led to the betrayal of Jesus. Upon recognizing his mistake, on the day of Jesus’ death, Judas committed suicide. 

## Early life

Judas Iscariot was the twelfth apostle. He was chosen by Nathaniel, and later confirmed in this election by Jesus. He was born in Kerioth, a small town in southern Judea. When he was a lad, his parents moved to Jericho, where he lived and had been employed in his father’s various business enterprises until he became interested in the preaching and work of John the Baptist. (139:6.2) (139:12.1-2)

Judas’s parents were Sadducees, and when their son joined John’s disciples, they disowned him. (138:2.9) (139:12.1)

When Nathaniel met Judas at Tarichea, he was seeking employment with a fish-drying enterprise at the lower end of the Sea of Galilee. He was thirty years of age in A.D. 26 and unmarried when he joined the apostles. He was probably the best-educated man among the twelve and the only Judean in the Master’s apostolic family. He was cultured, educated, and a good thinker, but he was not truly honest. (138:2.9) (139:12.1-2)

Judas was accepted by Jesus in the group of apostles along with Thomas, in Tarichea. When Jesus accepted Judas, he told him: “Judas, we are all of one flesh, and as I receive you into our midst, I pray that you will always be loyal to your Galilean brethren. Follow me.”. Judas was the only Judean. All the rest were from Galilee. (138:5)

## His work as treasurer

Andrew appointed Judas treasurer of the twelve, a position which he was eminently fitted to hold, and up to the time of the betrayal of his Master he discharged the responsibilities of his office honestly, faithfully, and most efficiently. He carried the bag. He paid all expenses and kept the books. He made budget estimates for Matthew from week to week and also made weekly reports to Andrew. Judas paid out funds on Andrew’s authorization. (138:8.1) (138:10.10) (139:12.3)

Judas really was a great executive, a farseeing and able financier. And he was a stickler for organization. None of the twelve ever criticized Judas. As far as they could see, Judas Iscariot was a matchless treasurer, a learned man, a loyal, though sometimes critical, apostle, and in every sense of the word a great success. (139:12.5) Judas carried in a bag with the apostolic funds, and used to keep that bag in a deep pocket (186:1.3) Judas wisely made a deposit of the surplus of funds in a Jericho bank run by a friend. This deposit was there until the last year of Jesus' life. (147:2.1) (163:2.11) (172:2.3)

David Zebedee turned over to Judas the funds realized from the sale of the equipment of the Pella encampment, and Judas placed the greater part of this money in Simon of Bethany's care. (172:2.3) Judas willingly gave all apostolic funds to David Zebedee before Jesus' death (178:2.10)

## His criticism

Judas did not get along with Nathanael. He once took his criticism of Nathanael to Jesus because he thought he didn't take his apostleship seriously, which earned him a rebuke from Jesus. (139:6.5) All the apostles, with the exception of Judas, succeeded in overcoming much of their prejudice against the Samaritans. (143:0.2)

Judas, along with Peter, John, and Simon Zelotes, was in favor of proclaiming Jesus king. When Jesus did not live up to these expectations, he thought that he would be oppressed with regrets that he did not have the courage to be made king. (152:2.5) (153:0.2) Judas, with Simon Zelotes, attempted to heal James of Safed’s son, unsuccessfully (158:4.6) Judas Iscariot thought that Jesus had fled in haste into Phoenicia because he feared the Jewish leaders and Herod Antipas. (162:1.3) Of all the apostles, Judas Iscariot was the most adversely affected by the processional entry of Jesus into Jerusalem. (172:5.12-13) Judas did not realize it, but he had been a subconscious critic of Jesus ever since John the Baptist was beheaded by Herod. (138:5.4) (177:4.11) While his companions hesitated, Judas took a seat of honor at the Last Supper. (179:1.4) The washing of the feet during the last supper was further proof to Judas that Jesus was not Israel's deliverer and would never qualify to be. (179:3.1,4)

## His relationship with Jesus

Jesus advised Andrew to continue to place the utmost confidence in Judas despite his last acts. (157:7.1) Jesus did everything possible to save Judas (179:4.7)

Judas was faith adventure to Jesus. From the beginning the Master fully understood the weakness of this apostle and well knew the dangers of admitting him to fellowship. (139:12.7) (177:4.10)

At the last supper Jesus addressed his last words to Judas. He first warned him in a veiled way: “Although it is necessary that I return to the Father, it was not necessary for one of you to become a traitor to fulfill the will of the Father.” In view of the fact that Judas was determined in his purpose, he simply told him: “What you have decided to do, do it immediately.” (179:4)

The words of encouragement in Bethany for Judas were: “Judas, I have loved you and have prayed that you would love your brethren. Be not weary in well doing; and I would warn you to beware the slippery paths of flattery and the poison darts of ridicule.” (174:0.2) Jesus warned the apostles of an impending betrayal, without indicating that it was Judas (153:5.4) (177:5.2) (179:3.6) (179:4) (180:6.1)

## The betrayal

Judas was always financially loyal to his Master and his fellow apostles. Money could never have been the motive for his betrayal of the Master. It was not for money that Judas went to the home of Caiaphas to arrange for the betrayal of Jesus. (139:12.5)(172:5.12)(177:4.4)

The day that Mary, Lazarus' sister, broke an expensive jar of incense at the feet of Jesus seemed to Judas such a waste that when Jesus so sweepingly disallowed his public protest, it was too much for him, and this event determined the mobilization of all the accumulated hate, hurt, malice, prejudice, jealousy, and revenge of a lifetime, and decided Judas to take revenge (139:12.10-13) (153:1.5) (172:1.5-7) (172:5.12)

Some relatives and Sadducees led Judas to believe that he would forthwith receive high honors from the Sanhedrin if he withdrew from the movement of Jesus and his “Galilean” followers. (177:4.2) In various situations that bothered Judas is when he began to seriously think about how to break with Jesus the apostles (172:5.12-13) (173:0.2) (175:4.1) (177:4.2) David Zebedee knew about Judas's plot to kill Jesus and so he tried to let the Master know, but he asked him to keep quiet. (178:2.3) The apostles only began to harbor suspicions of Judas' treachery when they were returning to the camp from the upper room (181:2.6) (182:0.2)

Judas really feared for his life when going to capture Jesus, and for this reason he dared to ask for a company of forty armed soldiers, which the Jews had to request from Pilate. (183:2.3) Judas betrayed Jesus with a kiss on the brow while greeting him in front of the captive guards (183:3.5) Both the temple guards and the Roman centurion showed deep contempt for Judas as the traitor (183:5.2-3)(186:1.2) Judas did not dare to enter the house of Annas but he was present at the trial of Jesus before the Sanhedrin and then before Pilate (184:2.1) (184:5.1) (185:0.1)

Throughout the trial of Jesus before Caiaphas and during his appearance before Pilate, Judas was pricked in his conscience about his traitorous conduct. (186:1.2) The Sanhedrin rewarded Judas with a bag containing 30 pieces of silver, the current price for a healthy slave. (186:1.2) Seeing Jesus raised on the crossbar where he was nailed to the cross, he felt strong repentance and ran to the temple to deliver his reward money. (186:1.4)

## Causes of downfall (157:7.2-4) (193:4)

When analyzing the causes of the fall of Judas, we are told:
* failed to love the truth with his whole soul; he let deceitful intellectual pride lead him to spiritual downfall (179:4.2)
* Judas was tremendously influenced by the ridicule of his Sadducean friends. (172:5.13)
* He was an isolated type of human being. He was highly individualistic and chose to grow into a confirmed “shut-in” and unsociable sort of person. (193:3.2) (193:4)
* his love grew cold, and he refused to trust his loyal brethren (193:3.2)
* Despite Jesus' prohibition to enter Jerusalem without him, Judas encountered Jesus' enemies, exposing himself to their clever insinuations and subtle taunts. (175:4.1) (177:4) (178:0.1) (182:2.13) (183:2.1)
* he persistently harbored grudges and fostered such psychologic enemies as revenge and the generalized craving to “get even” with somebody for all his disappointments; sought revenge for hurt feelings (139:6.5) (172:1.7) (177:4.4) (182:1.5) (193:4.2)
* Judas was an only son of unwise parents. When very young, he was pampered and petted; he was a spoiled child. (139:12.6) (177:2.4)
* He persistently refused to confide in, or freely fraternize with, his fellow apostles. (193:4.2-3)
* When he was impelled, by the accumulation of his emotional conflicts, to seek relief, he sought the advice and the unwise consolation of his unspiritual relatives or those chance acquaintances who were either indifferent, or actually hostile, to the heavenly kingdom. (193:4.3)
* Judas was self-satisfied and he dared to criticize Jesus often (139:12.4)
* Judas was a well-intentioned but cowardly and self-centered personality (177:4.9,11) (183:2.2) (193:4.14)

## His end

After the terrible disappointment with the reward from the Sanhedrin, Judas committed suicide by attempting to hang himself from a tree in the Valley of Hinnom. The belt he used came undone and he died when he hit the rocks of the precipice. (139:12.13) (186:1)

The worlds have found it difficult to forgive Judas, and his name has become eschewed throughout a far-flung universe. (139:12.14)
```