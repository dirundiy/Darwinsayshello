# Building this in Google Sites

## The honest version of how this works

Google Sites has no "paste in my HTML" option. It's a drag-and-drop block editor. So the process is:

1. **Text** — copy it section by section from the artifact page. Google Sites accepts pasted rich text and keeps your bold/bullets/headings.
2. **Quiz** — goes in as embed code (that part *does* accept HTML).
3. **Videos and images** — added natively, which is the whole reason to use Google Sites over the artifact.

Budget about 90 minutes.

---

## Page structure

Make these as separate pages, not one long scroll. Google Sites builds the top nav automatically from your page list.

| Page name | What goes on it |
|---|---|
| Home | Title, one-paragraph intro, the five-claims overview |
| Claim 1: Species Change | Antibiotic resistance, 3 evidence boxes |
| Claim 2: Common Ancestor | Fossils + DNA, 3 evidence boxes |
| Claim 3: Gradual Evolution | Finches, dogs, moths |
| Claim 4: New Species Form | Finches, cichlids, apple maggot flies |
| Claim 5: Natural Selection | Migration timing, coral, hares |
| Case Study | Urban wildlife camouflage and mimicry |
| Classification | Three domains + how species get named today |
| Quiz | The embed |
| Sources | The numbered list |

Put Claims 1–5 as **subpages** under a parent page called "Darwin's Five Claims" so the nav doesn't get crowded. In the page list, drag a page onto another to nest it.

---

## Theme setup

- **Themes panel → Impression or Diplomat.** Both are clean. Avoid Vision, it's got a heavy look that fights the content.
- **Color:** pick the green. It matches what's already written.
- **Font style:** whichever pairs the theme offers. Don't hunt for something custom.

Keep it simple. The rubric grades "well-organized with engaging multimedia," not visual daring.

---

## Adding the quiz

1. Open `google-sites-quiz-embed.html` in a text editor (right-click → Open with → Notepad).
2. Select all, copy.
3. In Google Sites: **Insert → Embed → Embed code** tab.
4. Paste, hit Next, then Insert.
5. Drag the bottom edge of the block down until nothing is cut off — around **900px tall**. Check it on the published site, not just the editor.

If the embed shows up blank, it's almost always because you pasted a URL into the "By URL" tab instead of the code into the "Embed code" tab.

---

## Videos to embed

**Insert → YouTube → search.** Search inside Google Sites rather than pasting links, that way you know the embed works.

Don't add more than four. Every video should sit next to the section it explains.

| Page | Search terms | Why |
|---|---|---|
| Claim 1 | `Harvard Medical School bacteria evolve antibiotics MEGA-plate` | Two-minute time-lapse of bacteria evolving resistance across a giant petri dish. Genuinely the best single piece of evolution footage that exists. |
| Claim 2 | `Your Inner Fish Tiktaalik Neil Shubin` | Shubin explaining the fossil he predicted and then dug up. |
| Claim 3 | `HHMI BioInteractive The Beak of the Finch` | The Grants' finch study, from the people who funded it. |
| Case Study | `Schoolyard mockingbird car alarm mimicry` or `PBS Deep Look urban wildlife` | Harder to find a perfect one. If nothing good turns up, skip it rather than padding. |

Also worth a look: **TED-Ed, "Myths and misconceptions about evolution"** — short, and it covers the same misconceptions your quiz does.

Add a one-line caption under each video saying what to watch for. That's the difference between "has multimedia" and "uses multimedia."

---

## Images

**Insert → Image → Search** pulls from Google Images with a license filter, but it's unreliable about attribution. Safer: go to **commons.wikimedia.org**, search, download, and upload it yourself. Everything there is free to use, and you can cite it properly.

Worth grabbing:

- `Archaeopteryx lithographica` — the Berlin specimen. Genuinely striking fossil.
- `Darwin's finches` — Gould's original 1845 beak illustration, public domain, and it's the actual historical image
- `Biston betularia` — get one showing the light and dark moths on the same bark
- `Darwin 1837 tree of life notebook` — the "I think" sketch. Put this on the Home page, it's the single best image in the whole story.
- `Anolis cristatellus` — for the case study
- `Lake Malawi cichlids` — for Claim 4, the color variety makes the point instantly

Under each image add a small caption line: what it is, plus "Image: Wikimedia Commons." Takes ten seconds and it's a direct hit on the credibility criterion.

---

## Formatting the text as you paste

Use Google Sites' built-in text styles rather than manually bolding things:

- Page title → **Title**
- "Claim 1: Nonconstancy of Species" → **Heading**
- "Evidence 1: The mutations are already there" → **Subheading**
- Everything else → **Normal text**

For the "Why this supports the claim" lines, drop each one into its own **text box on a colored background section** (click the section, then the paint-roller icon on the left edge → pick the light color option). That reproduces the green sidebar look without fighting the editor.

For the evidence boxes, the easiest match is a **two-column layout**: image on the left, evidence text on the right. Alternate the side each time so it doesn't get monotonous.

---

## Before you submit

- [ ] Your name is on the Home page
- [ ] **Publish** (top right) — an unpublished site 404s for your teacher
- [ ] Under Publish settings, set who can view to **anyone with the link**, not "restricted"
- [ ] Open the published link in a private/incognito window. This is the real test. If it asks you to sign in, the sharing setting is wrong.
- [ ] Click every nav link
- [ ] Check the quiz embed isn't cut off
- [ ] Look at it on your phone — Google Sites is responsive but embeds sometimes aren't
- [ ] Upload the link to Schoology before 8:30 AM Tuesday

The incognito check is the one people skip, and it's the one that costs points on Functionality & Submission.
