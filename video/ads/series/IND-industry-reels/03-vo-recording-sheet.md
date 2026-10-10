# VO recording sheet

Voice: Founder for all ten (D-7). Spec: `video/ads/00-strategy/voiceover-guide.md` (quiet room, WAV 48 kHz mono, peaks near
-12 dB, 10 s of room tone at the start of each session, one block per take, 2 to 3 takes, clap at the start of each take).
Hinglish as spoken. Keep English product words crisp (Verity, Business Blueprint, ₹5,000). Delivery tags in square brackets
are directions for the speaker, not words (D-9). Edit the script here, not in the recording.

Files: `video/ads/series/IND-industry-reels/IND<NN>/vo/raw/IND<NN>_block<n>_take<n>.wav`, picked takes in `vo/picked/`,
word timings in `vo/words.json` (`verity-reel` `scripts/transcribe.py`).

Typos fixed from the source: "bnda pahucha" is "banda pahuncha", and a stray space before "raw material" is removed.

## A. Master tail (record once, reuse in all ten)

The tail is spoken identically in every reel except line T2, which is the one slot that names the reel's own nouns. The
recommended structure is the one already in R09's recording, because the four-card "Business map" visual is built on its
middle sentence (D-6). The GPT scripts use a shorter two-sentence version; that is the alternative if a shorter reel is
preferred (it saves about 3 seconds and the middle visual is dropped).

| Block | Line | Delivery |
|---|---|---|
| T1 | Verity mein hum pehle aapka business samajhte hain. | [confident] |
| T2 | Aapke workflows, teams aur actual requirements. (IND10: "Aapke sites, staff deployment, attendance aur salary workflows.") | [confident] |
| | *(short pause)* | |
| T3 | Phir aapke business ke hisaab se system build karte hain. | [confident] |
| T4 | Aur abhi… ₹5,000 ka Business Analysis Blueprint, FREE! | [excited] |
| | *(short pause)* | |
| T5 | Aap business ko systemise karne ka soch rahe hain… toh contact kijiye. | [quiet confidence] |
| T6 | Humare IITs aur IIMs se selected professionals aapke business ko analyse karke aapka Business Blueprint prepare karenge. | [quiet confidence] |
| T7 | Limited time offer. | [soft] |

Because T2 varies, **record T1, T3 to T7 once as the master tail and T2 as short one-line inserts**, or record T2 once in its
default form and re-record it only for IND10. Either way T2 is one sentence, so the splice stays in one place.

Alternative short tail: T1, then "Phir aapke tareeke se system build karte hain." in place of T2 and T3; T4 to T7 unchanged.

Splice rule: an opening ends on its "proper system" line, then the master tail begins on T1 after a 0.4 s breath. Listen to the
join once on a real reel before committing; if it is audible, re-record the tail once rather than every opening.

## B. The openings

Record each as one take per block. Tags and wording are as scripted; punctuation marks pauses.

### IND01 Retail & Commerce

| Block | Line |
|---|---|
| IND01-1 | [thoughtful] Ek baat batao? |
| IND01-2 | Aapki shop pe kitna stock hai, kya bik raha hai, aur kya reorder karna hai… sab ek jagah pata chal jaata hai? |
| IND01-3 | [sighs] Ya phir… |
| IND01-4 | "Bhaiya, woh stock check karna." |
| IND01-5 | "Sir, iska payment hua?" |
| IND01-6 | "Kal ki sales kitni thi?" |
| IND01-7 | [chuckles] Aur phir register, Excel aur WhatsApp pe alag-alag hisaab? |
| IND01-8 | [thoughtful] Problem aapki shop ki nahi hai. Business ka system ek jagah connected hi nahi hai. |

### IND02 Food & Hospitality

| Block | Line |
|---|---|
| IND02-1 | [thoughtful] Ek baat batao? |
| IND02-2 | Aapke restaurant mein kitchen, staff aur billing… sab perfectly coordinated chalta hai? |
| IND02-3 | [sighs] Ya phir… |
| IND02-4 | "Bhaiya, woh order bana?" |
| IND02-5 | "Table ka bill kahan hai?" |
| IND02-6 | "Aaj itna wastage kaise ho gaya?" |
| IND02-7 | [chuckles] Ek taraf orders, doosri taraf inventory, aur teesri taraf accounts! |
| IND02-8 | [thoughtful] Problem staff ki nahi hai. Operations ko manage karne ka proper system hi nahi hai. |

### IND03 Professional Services

| Block | Line |
|---|---|
| IND03-1 | [thoughtful] Ek baat batao? |
| IND03-2 | Aapki firm mein har client ka status, pending work aur payment… ek jagah track hota hai? |
| IND03-3 | [sighs] Ya phir… |
| IND03-4 | "Sir, client ko follow-up kiya?" |
| IND03-5 | "Woh deadline kab hai?" |
| IND03-6 | "Invoice abhi tak pending kyun hai?" |
| IND03-7 | [chuckles] Client ka kaam karne se zyada time uska status pata karne mein lagta hai! |
| IND03-8 | [thoughtful] Problem team ki nahi hai. Client work aur internal operations ka system connected nahi hai. |

### IND04 Healthcare

| Block | Line |
|---|---|
| IND04-1 | [thoughtful] Ek baat batao? |
| IND04-2 | Aapke clinic mein appointments, billing aur staff coordination smoothly chalta hai? |
| IND04-3 | [sighs] Ya phir… |
| IND04-4 | "Patient ki appointment confirm hui?" |
| IND04-5 | "Sir, payment pending hai." |
| IND04-6 | "Next appointment kab schedule karni hai?" |
| IND04-7 | [chuckles] Calls, registers aur messages ke beech poora din nikal jaata hai. |
| IND04-8 | [thoughtful] Problem sirf workload ki nahi hai. Clinic operations ko manage karne ka proper system chahiye. |

### IND05 Real Estate

| Block | Line |
|---|---|
| IND05-1 | [thoughtful] Ek baat batao? |
| IND05-2 | Aapki firm mein kaunsi lead kis stage pe hai, site visit hui ya nahi, aur deal close hone wali hai ya nahi… sab clear hai? |
| IND05-3 | [sighs] Ya phir… |
| IND05-4 | "Sir, us client ko call kiya?" |
| IND05-5 | "Site visit kab hai?" |
| IND05-6 | "Woh property abhi available hai?" |
| IND05-7 | [chuckles] Leads WhatsApp pe, listings Excel pe, aur follow-ups dimaag mein! |
| IND05-8 | [thoughtful] Problem leads ki nahi hai. Unhe manage karne ka proper system nahi hai. |

### IND06 Manufacturing

| Block | Line |
|---|---|
| IND06-1 | [thoughtful] Ek baat batao? |
| IND06-2 | Aapki factory mein kaunsa order production ki kis stage mein hai, kis worker ne kaam kiya hai, raw material kitna bacha hai, aur dispatch kab hoga… sab clear hai? |
| IND06-3 | [sighs] Ya phir… |
| IND06-4 | "Sir, material aaya?" |
| IND06-5 | "Production complete hua?" |
| IND06-6 | "Order dispatch kyun nahi hua?" |
| IND06-7 | [chuckles] Sales ne order le liya, par production aur inventory ka coordination alag hi chal raha hai! |
| IND06-8 | [thoughtful] Problem sirf production ki nahi hai. Departments ke beech proper system hona chahiye. |

### IND07 Personal & Local Services

| Block | Line |
|---|---|
| IND07-1 | [thoughtful] Ek baat batao? |
| IND07-2 | Aapki service team kahan hai, kaunsa kaam complete hua, aur kis customer ka payment pending hai… sab pata rehta hai? |
| IND07-3 | [sighs] Ya phir… |
| IND07-4 | "Bhaiya, banda pahuncha?" |
| IND07-5 | "Sir, kaam complete hua?" |
| IND07-6 | "Customer se payment le li?" |
| IND07-7 | [chuckles] Din ka aadha time customers aur staff ko call karne mein nikal jaata hai! |
| IND07-8 | [thoughtful] Problem employees ki nahi hai. Service operations ko track karne ka proper system nahi hai. |

### IND08 Digital & Technology

| Block | Line |
|---|---|
| IND08-1 | [thoughtful] Ek baat batao? |
| IND08-2 | Aapki company mein kaunsa project on track hai, kiski deadline aa rahi hai, aur team ki actual capacity kitni hai… sab clear hai? |
| IND08-3 | [sighs] Ya phir… |
| IND08-4 | "Client ko update diya?" |
| IND08-5 | "Task complete hua?" |
| IND08-6 | "Is project ke hours itne zyada kaise ho gaye?" |
| IND08-7 | [chuckles] Tasks ek tool mein, client updates doosre mein, aur project profitability ka hisaab alag! |
| IND08-8 | [thoughtful] Problem tools ki kami nahi hai. Business operations ka proper system connected nahi hai. |

### IND09 Wholesale & Distribution

| Block | Line |
|---|---|
| IND09-1 | [thoughtful] Ek baat batao? |
| IND09-2 | Aapko turant pata chal jaata hai kis dealer ka kitna outstanding hai, kaunsa order dispatch hona hai, aur kis stock ki kami hai? |
| IND09-3 | [sighs] Ya phir… |
| IND09-4 | "Sir, party ka payment aaya?" |
| IND09-5 | "Woh maal dispatch hua?" |
| IND09-6 | "Dealer ka purana balance kitna hai?" |
| IND09-7 | [chuckles] Orders WhatsApp pe, stock godown mein, aur payment ka hisaab alag register mein! |
| IND09-8 | [thoughtful] Problem business ke volume ki nahi hai. Sales, inventory aur accounts ko connect karne wala proper system chahiye. |

### IND10 Security & Housekeeping Services

| Block | Line |
|---|---|
| IND10-1 | [thoughtful] Ek baat batao? |
| IND10-2 | Aapke security guards aur housekeeping staff ki attendance… head office se verify ho paati hai? |
| IND10-3 | [sighs] Ya phir… |
| IND10-4 | "Sir, site pe 20 guards deployed hain." |
| IND10-5 | "Par attendance mein 18 hi kyun hain?" |
| IND10-6 | "Sir, overtime bhi add hua hai." |
| IND10-7 | [short pause] |
| IND10-8 | Aur actual mein kitne log duty pe the… verify karna mushkil? |
| IND10-9 | [thoughtful] Problem sirf staff ki nahi hai. Problem hai ground pe jo ho raha hai, aur office ke records mein jo dikh raha hai… unke beech ka gap. |


