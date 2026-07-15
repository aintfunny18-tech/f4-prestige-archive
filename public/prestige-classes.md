# F4 Prestige Classes — Web Build Handoff

## Purpose

This document is the authoritative content handoff for a player-facing webpage presenting the F4's custom four-level prestige classes. The webpage should let a player select a character portrait and read that character's prestige-class option in a polished, rules-reference format.

The rules use 2014 fifth-edition D&D terminology as the primary baseline, while avoiding unnecessary incompatibility with revised fifth-edition terminology. Preserve the rules text rather than paraphrasing it during implementation.

## Required Website Structure

### Landing View

Display six character portraits/cards:

| Character | Route / Slug | Prestige Option |
|---|---|---|
| Konte Spatium | `konte` | Space-Time Savant |
| Thackeray A. M. Holmes | `thackeray` | Arcane Annotator |
| Vorn Don'eld | `vorn` | Two-option selector |
| Aicusa Ossya | `aicusa` | Arcano-Botanist |
| Wēt | `wet` | Tattooed Spellrager |
| Jacob / Vesper Palamer | `jacob` | Sanguine Assassin |

Each portrait should be keyboard accessible and have visible hover/focus states.

### Vorn's Two-Option Selector

Selecting Vorn should first display two large, labeled choices:

- **Sword icon — Duskblade Virtuoso**
- **Spell icon — Prismari Maestro**

Do not rely on icons alone. Each choice needs a text label and accessible name. Once an option is selected, show the full class entry with an easy way to return to Vorn's option selector.

### Prestige-Class Reading View

Each class page should include:

1. Character name and portrait.
2. Prestige-class title.
3. Introductory flavor text.
4. Feature progression table.
5. Hit points and proficiencies.
6. Full feature text in level order.
7. Spell or option appendices where applicable.
8. A persistent table of contents or collapsible section navigation on larger screens.
9. Responsive tables with horizontal scrolling on narrow screens.
10. A print-friendly view.

### Recommended Data Model

Store each prestige class as structured content rather than hard-coded page markup. At minimum:

```ts
interface PrestigeClassEntry {
  id: string;
  characterId: string;
  title: string;
  icon?: "sword" | "spell";
  summary: string;
  contentMarkdown: string;
  status: "approved" | "approved-with-editorial-note";
  editorialNotes?: string[];
}
```

The text below can be stored as Markdown and rendered through a controlled Markdown component that supports tables, headings, lists, and italicized spell names.

## Settled Corrections Applied in This Handoff

1. **Vorn — Bardic Continuance:** Both Vorn classes count prestige levels as bard levels for the Bardic Inspiration die and for any number of Bardic Inspiration uses that a bard-level progression would grant. Under the current 2014 Bard rules, uses remain tied to Charisma, but the language preserves future or campaign-specific level-based progression.
2. **Konte — Translation:** Translation can move a spell's origin around a corner or behind total cover. Konte must first select a legal origin under the spell's normal rules; the translated point need not be visible and need not have line of effect from Konte. Effects radiating from the translated point still obey cover and obstruction normally.
3. **Thackeray — Final Draft:** The redundant Omnipresent Margins subsection has been removed. Manifest Margins remains the meaningful origin-point feature.
4. **Thackeray — Master Revision:** Master Revision requires Thackeray's reaction.
5. **Wēt — Terminology:** The mechanics are approved. The labels **War-Marks** and **empowered** remain provisional and may be renamed during editorial cleanup without changing their mechanics.

## Global Prestige-Class Assumptions

- Each prestige class contains four levels.
- The expected entry point is character level 12.
- Prestige level 2 grants an Ability Score Improvement or feat.
- Linked spellcasting continues spell slots, maximum spell level, spells known or prepared, and other expressly listed progression.
- A prestige class does not grant unlisted base-class or subclass features.
- A character does not receive the maximum value of the prestige class Hit Die at prestige level 1.
- No formal prerequisites are included in the player-facing rules unless added later.

---

# Vorn Don'eld

Vorn has two mutually exclusive prestige-class options. The webpage must present the option selector before displaying either class.

---

# Duskblade Virtuoso

Some spellcasters regard steel as a last resort—a crude instrument used only when subtler magic has failed. A duskblade virtuoso rejects that division. To the virtuoso, the weapon is an arcane focus, a conductor’s baton, and the final movement of every spell.

Duskblade training fuses practiced swordplay with close-range spellcasting. A virtuoso does not merely strike and then cast, or cast and then strike. Spell and attack become one continuous act: magical power gathered along the weapon’s edge and released at the instant of impact.

For Vorn, this discipline grows from years of Prismari performance, College of Swords training, electrical experimentation, and practical work with a spell-storing blade. Each cut is choreography. Each spell is part of the performance.

## Duskblade Virtuoso Features

| Duskblade Level | Features | Duskblade Spells Known | Maximum Duskblade Spell Level | Arcane Flourishes Known |
|---:|---|---:|---:|---:|
| 1st | Bardic Continuance, Duskblade Magic, Arcane Channeling | 2 | 1st | — |
| 2nd | Ability Score Improvement, Arcane Flourish | 3 | 2nd | 2 |
| 3rd | Perfected Channel, Refined Flourish | 5 | 3rd | 3 |
| 4th | Grand Channel | 6 | 3rd | 4 |

## Hit Points

**Hit Dice:** 1d8 per duskblade virtuoso level

**Hit Points per Duskblade Virtuoso Level:** 1d8—or 5—plus your Constitution modifier

Because the duskblade virtuoso is a prestige class, you do not receive the maximum value of its Hit Die when you gain its first level.

## Proficiencies

The duskblade virtuoso grants no additional armor, weapon, tool, skill, or saving throw proficiencies.

## Bardic Continuance

Beginning when you take your first level in this prestige class, your duskblade studies continue the magical and inspirational progression of your bard training.

Add your duskblade virtuoso levels to your bard levels for the following purposes:

- Determining your spell slots on the Bard table.
- Determining your number of bard spells known.
- Determining your number of bard cantrips known.
- Determining the maximum level of bard spell you can learn.
- Determining the size of your Bardic Inspiration die.
- Determining the number of uses granted by your Bardic Inspiration feature, if that number is increased by your bard level.

Whenever your combined bard and duskblade virtuoso levels would increase your number of bard spells known or bard cantrips known, you learn new spells or cantrips as though you had gained a bard level. You can also replace one bard spell you know whenever the bard’s Spellcasting feature would ordinarily permit you to do so.

This feature does not grant any other bard class or subclass features. In particular, it does not grant Expertise, Magical Secrets, Song of Rest improvements, Blade Flourish improvements, or other College of Swords features.

## Duskblade Magic

At 1st level, you develop a specialized repertoire of close-combat spells.

### Spellcasting Ability

Charisma is your spellcasting ability for your duskblade spells. You use your bard spell save DC and bard spell attack modifier for them.

### Weapon as Arcane Focus

You can use any melee weapon with which you are proficient as a spellcasting focus for your bard and duskblade spells.

You can also use such a weapon to perform the somatic components of those spells, even when you have no free hand. You must still provide any material component that has a listed monetary cost, and you must still provide any component that the spell consumes.

### Shocking Grasp

You learn the *shocking grasp* cantrip. It counts as a bard spell for you and does not count against your number of bard cantrips known or duskblade spells known.

### Duskblade Spells Known

You learn two spells of your choice from the Duskblade Spell List presented at the end of this class. The Duskblade Virtuoso table shows when you learn additional duskblade spells.

A spell you choose must be of a level no higher than the Maximum Duskblade Spell Level shown for your duskblade virtuoso level. A cantrip is considered lower than a 1st-level spell for this purpose.

Your duskblade spells:

- Count as bard spells for you.
- Use Charisma as their spellcasting ability.
- Do not count against your number of bard spells known.
- Can be cast using your bard spell slots.

Whenever you gain a duskblade virtuoso level, you can replace one duskblade spell you know with another spell from the Duskblade Spell List for which you qualify.

The Duskblade Spell List includes both existing spells and spells developed specifically for this discipline. Not every spell on the list is eligible for Arcane Channeling. A spell must satisfy the requirements of that feature to be channeled.

## Arcane Channeling

At 1st level, you learn to cast a spell through the impact of a melee weapon.

Once on each of your turns, when you take the Attack action, you can replace one attack with an Arcane Channeling attack.

Choose a spell you know that meets all the following requirements:

- Its casting time is 1 action.
- It is a cantrip or is no higher in level than the Maximum Duskblade Spell Level shown for your duskblade virtuoso level.
- Its range is Touch, or its description requires you to make a melee spell attack as part of casting it.
- It targets only one creature at the level at which you cast it.
- The creature you intend to target is unwilling to be affected by the spell.

You cast the spell as part of the substituted attack and make one melee weapon attack against a creature within the weapon’s reach. For this casting, the spell’s range becomes the reach of the weapon.

You expend the spell slot and provide the spell’s components immediately before making the weapon attack. A cantrip does not expend a spell slot.

For all rules purposes, you cast the spell when you begin the Arcane Channeling attack. The spell can therefore be affected by *counterspell*, and it is subject to the normal restriction on casting a spell after casting a spell as a bonus action.

If the spell is countered, you still make the weapon attack, but the attack carries no spell.

### On a Hit

On a hit, the weapon attack deals damage normally, and the target is affected by the spell.

If the spell normally requires a melee spell attack, the weapon attack replaces that spell attack. Do not make a separate spell attack roll.

If the spell requires a saving throw, the target makes that saving throw after the weapon attack hits.

If the spell requires concentration, you must concentrate on it normally.

If the spell creates an effect that continues after its initial casting, that effect continues according to the spell’s normal rules.

### On a Miss

On a miss, the spell has no effect. The spell slot remains expended, and any component consumed by the spell is consumed.

### Critical Hits

If the Arcane Channeling attack is a critical hit, roll the weapon’s damage dice twice, as normal.

You also roll the spell’s damage dice twice only if the spell normally requires a melee spell attack as part of its casting.

If the spell normally deals damage after a saving throw, automatically deals damage without a spell attack, or applies damage through some other method, its damage dice are not doubled by the weapon’s critical hit.

### Ongoing Melee Spell Attacks

Some spells, such as *vampiric touch*, allow you to make additional melee spell attacks on later turns.

Arcane Channeling replaces only the melee spell attack made as part of the spell’s initial casting. Any later attacks granted by the spell are made normally as melee spell attacks and are not weapon attacks.

### Spell-Storing Weapons

A single weapon hit cannot both deliver an Arcane Channeling spell and release a spell stored within the weapon.

If you make more than one attack as part of the same Attack action, you can use one attack to deliver Arcane Channeling and a different attack to release the stored spell.

The special permission allowing Vorn’s Spell Storing Blade to store *lightning bolt* applies only to that item. It does not make *lightning bolt* eligible for Arcane Channeling.

## Ability Score Improvement

When you reach 2nd level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.

As normal, you cannot increase an ability score above 20 using this feature.

If your campaign permits feats, you can forgo this feature to take a feat for which you qualify.

## Arcane Flourish

At 2nd level, you learn to blend Arcane Channeling with your College of Swords flourishes.

You learn two Arcane Flourishes of your choice from the options below. You learn one additional Arcane Flourish at 3rd level and another at 4th level.

Whenever you gain a duskblade virtuoso level, you can replace one Arcane Flourish you know with another Arcane Flourish.

You can use an Arcane Flourish only on a weapon attack that successfully delivers a spell through Arcane Channeling or Grand Channel.

Arcane Flourishes are divided into two types:

- Flourish enhancements improve an existing Blade Flourish.
- Additional flourish options are new options for your Blade Flourish feature.

A flourish enhancement uses the same Bardic Inspiration die expended for the underlying Blade Flourish. It never requires a second Bardic Inspiration die.

An additional flourish option follows all the normal rules of Blade Flourish, including its limit of one Blade Flourish option on a turn.

### Arcane Bastion

**Flourish Enhancement: Defensive Flourish**

When you use Defensive Flourish on an attack that delivers a channeled spell, you also have advantage on Constitution saving throws made to maintain concentration until the start of your next turn.

### Elemental Sweep

**Flourish Enhancement: Slashing Flourish**

When you use Slashing Flourish on an attack that delivers a channeled spell, you can cause its additional damage to affect creatures of your choice within 5 feet of the attack’s target, rather than creatures within 5 feet of you.

You can also change the additional damage to one damage type dealt by the channeled spell.

### Phase Pursuit

**Flourish Enhancement: Mobile Flourish**

When you use the reaction granted by Mobile Flourish to move toward the target of an attack that delivered a channeled spell, you can teleport instead of moving normally.

You teleport to an unoccupied space you can see within 5 feet of the target, provided that space is no farther away than the distance you could normally move with the reaction.

This teleportation does not provoke opportunity attacks.

### Disrupting Flourish

**Additional Blade Flourish Option**

When you hit a creature with a weapon attack that delivers a channeled spell, you can expend one use of your Bardic Inspiration to cause the attack to disrupt the target’s concentration.

Add the Bardic Inspiration die to the weapon’s damage. Until the start of your next turn, the target has disadvantage on the next Constitution saving throw it makes to maintain concentration.

### Resonant Flourish

**Additional Blade Flourish Option**

When you hit a creature with a weapon attack that delivers a channeled spell, you can expend one use of your Bardic Inspiration to undermine the target’s resistance to the spell.

Add the Bardic Inspiration die to the weapon’s damage. If the channeled spell forces the target to make a saving throw as part of its initial resolution, subtract half the number rolled on the Bardic Inspiration die, rounded down, from that saving throw. The minimum penalty is 1.

This penalty applies only to the saving throw caused by the spell delivered through that attack.

### Warding Flourish

**Additional Blade Flourish Option**

When you hit a creature with a weapon attack that delivers a channeled spell, you can expend one use of your Bardic Inspiration to draw residual magic around yourself as a ward.

Add the Bardic Inspiration die to the weapon’s damage. You gain temporary hit points equal to the number rolled on the die plus your Charisma modifier. These temporary hit points last for 1 minute.

## Perfected Channel

At 3rd level, your control over stored spell energy allows you to recover a spell when the weapon fails to find its target.

When an Arcane Channeling attack misses, you regain the spell slot expended for the channeled spell immediately after the attack.

Any material component that the spell would consume is not consumed when the attack misses.

You cannot attempt to channel that same spell again before the start of your next turn.

If the spell was countered, you do not regain the spell slot or preserve its consumed components, even if the weapon attack subsequently misses.

This feature has no effect on cantrips.

## Refined Flourish

Also at 3rd level, your spell and swordwork become a single rehearsed movement.

When you roll a Bardic Inspiration die for an Arcane Flourish used on an attack that delivers a channeled spell, you can reroll the die. You must use the new roll.

You decide to use this feature after seeing the first roll but before resolving any effect that depends on it.

## Grand Channel

At 4th level, you can carry a single spell through an entire sequence of attacks.

Once per long rest, when you take the Attack action on your turn, you can use Grand Channel.

Choose one spell you know that:

- Is eligible for Arcane Channeling.
- Is a cantrip or a spell of 3rd level or lower.

You cast the spell as part of the Attack action and expend its spell slot normally. Unlike Arcane Channeling, casting the spell does not replace any of your attacks.

Until the end of that Attack action, the first time you hit each different unwilling creature with a melee weapon attack, that creature is affected by the chosen spell.

The following rules apply:

- A creature can be affected by the spell only once during the Attack action.
- The spell is cast only once, regardless of how many creatures it affects.
- You concentrate on the spell normally if it requires concentration.
- If the spell normally requires a melee spell attack, each qualifying weapon hit replaces that spell attack for its target.
- A critical hit doubles the spell’s damage dice only if the spell normally requires a melee spell attack.
- If the spell requires a saving throw, each affected creature makes its own saving throw.
- If all your weapon attacks miss, the spell slot remains expended.
- You cannot also use ordinary Arcane Channeling during the same Attack action.

A spell released from a Spell Storing Blade can be released on one of the attacks made during Grand Channel. The stored spell affects only the creature struck by that attack and is not duplicated by Grand Channel.

Once you use Grand Channel, you cannot use it again until you finish a long rest.

## Duskblade Spell List

The following spells are available through the Duskblade Magic feature.

### Cantrips

- *Phase cut*
- *Shocking grasp*

### 1st Level

- *Frostbind*
- *Inflict wounds*
- *Resonant cut*
- *Searing smite*
- *Siphoning edge*
- *Thunderous smite*
- *Wrathful smite*

### 2nd Level

- *Arcane backlash*
- *Branding smite*
- *Enlarge/reduce*
- *Gravity lash*
- *Magic weapon*
- *Phase wound*
- *Shadow blade*

### 3rd Level

- *Bestow curse*
- *Blinding smite*
- *Dimensional reversal*
- *Elemental weapon*
- *Spellbreaker’s touch*
- *Vampiric touch*

A spell on this list need not be eligible for Arcane Channeling. For example, a smite spell has a casting time of 1 bonus action and must be cast normally.

## Duskblade Spells

### Phase Cut

*Conjuration cantrip*

**Casting Time:** 1 action  
**Range:** Touch  
**Components:** V, S  
**Duration:** Instantaneous

Your hand or weapon passes briefly through folded space as you strike.

Make a melee spell attack against one creature within range. On a hit, the target takes 1d6 force damage, and you can teleport to an unoccupied space you can see within 5 feet of the target. This teleportation does not provoke opportunity attacks.

The spell’s damage increases by 1d6 when you reach 5th level, 11th level, and 17th level.

### Frostbind

*1st-level evocation*

**Casting Time:** 1 action  
**Range:** Touch  
**Components:** V, S  
**Duration:** 1 round

You draw heat from a creature’s body and bind its movements in clinging frost.

Make a melee spell attack against one creature within range. On a hit, the target takes 2d8 cold damage. Until the start of your next turn, its speed is reduced by 10 feet, and it cannot benefit from any bonus to its speed.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.

### Resonant Cut

*1st-level evocation*

**Casting Time:** 1 action  
**Range:** Touch  
**Components:** V, S  
**Duration:** Instantaneous

You release a compressed note of elemental resonance through a close-range strike.

Make a melee spell attack against one creature within range. On a hit, the target takes 2d6 thunder damage, and you can push it up to 10 feet directly away from you.

A creature more than one size larger than you cannot be pushed by this spell.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.

### Siphoning Edge

*1st-level necromancy*

**Casting Time:** 1 action  
**Range:** Touch  
**Components:** V, S  
**Duration:** Instantaneous

You draw a measure of vitality from a wound and bind it around yourself as a temporary ward.

Make a melee spell attack against one creature within range. On a hit, the target takes 2d6 necrotic damage, and you gain temporary hit points equal to half the necrotic damage dealt, rounded down.

You gain no temporary hit points if the target is a Construct or Undead.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.

### Arcane Backlash

*2nd-level enchantment*

**Casting Time:** 1 action  
**Range:** Touch  
**Components:** V, S  
**Duration:** 1 round

You leave a vibrating knot of hostile magic in a creature’s thoughts, poised to recoil when the creature attempts to cast.

Make a melee spell attack against one creature within range. On a hit, the target takes 2d8 psychic damage.

If the target casts a spell before the start of your next turn, it takes an additional 2d8 psychic damage immediately after the spell is cast. This damage does not prevent the spell from taking effect.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the initial damage increases by 1d8 for each slot level above 2nd. The backlash damage does not increase.

### Gravity Lash

*2nd-level transmutation*

**Casting Time:** 1 action  
**Range:** Touch  
**Components:** V, S  
**Duration:** Instantaneous

You strike a creature with a sudden reversal of local gravity.

Make a melee spell attack against one creature within range. On a hit, the target takes 3d6 force damage, and you can move it up to 15 feet in a straight line toward or away from you.

A creature more than one size larger than you cannot be moved by this spell.

If the target strikes a solid surface before moving the full distance, it takes an additional 1d6 bludgeoning damage, and its movement ends.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the force damage increases by 1d6 for each slot level above 2nd.

### Phase Wound

*2nd-level conjuration*

**Casting Time:** 1 action  
**Range:** Touch  
**Components:** V, S  
**Duration:** 1 round

You tear at the spatial boundary surrounding a creature, leaving its body momentarily anchored to its current plane and position.

Make a melee spell attack against one creature within range. On a hit, the target takes 3d8 force damage.

Until the start of your next turn, the target cannot teleport, enter an extradimensional space, or leave its current plane by any means short of an artifact or divine intervention.

An effect that would forcibly teleport the target fails, but any resource used to create that effect is still expended.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.

### Dimensional Reversal

*3rd-level conjuration*

**Casting Time:** 1 action  
**Range:** Touch  
**Components:** V, S  
**Duration:** Instantaneous

You invert the space immediately around a creature and violently relocate it.

Make a melee spell attack against one creature within range. On a hit, the target takes 4d8 force damage and must make a Charisma saving throw.

On a failed save, you teleport the target to an unoccupied space you can see within 30 feet of you. The destination must be on a surface or in a space capable of supporting the target.

On a successful save, the target is not teleported.

A creature cannot be teleported into an object or into a space it could not ordinarily occupy.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.

### Spellbreaker’s Touch

*3rd-level abjuration*

**Casting Time:** 1 action  
**Range:** Touch  
**Components:** V, S  
**Duration:** Instantaneous

You drive disruptive force through a creature and unravel magic clinging to it.

Make a melee spell attack against one creature within range. On a hit, the target takes 4d6 force damage.

Choose one spell currently affecting the target.

If the chosen spell is 3rd level or lower, it ends.

If the chosen spell is 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 plus the spell’s level. On a successful check, the spell ends.

If the target is concentrating on a spell that is not ended by this effect, it has disadvantage on the Constitution saving throw made to maintain concentration because of this spell’s damage.

This spell cannot end an effect created by an artifact or a deity.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, you automatically end the chosen spell if its level is equal to or lower than the level of the spell slot you used.

### Special Rule: Vampiric Touch

When you deliver *vampiric touch* through Arcane Channeling, the weapon attack replaces the melee spell attack made as part of casting the spell.

On a hit, resolve the spell’s necrotic damage and healing normally in addition to the weapon’s damage.

For the remainder of the spell’s duration, you can use your action to make the melee spell attack described in *vampiric touch*. Those later attacks are ordinary melee spell attacks and cannot be replaced with weapon attacks through Arcane Channeling.

---

# Prismari Maestro

Prismari artists reject the notion that magic must be merely effective. A spell should seize the senses, command attention, and leave its audience fundamentally changed. The greatest Prismari performers do not separate elemental power, emotion, movement, and illusion; each is part of a single composition.

A Prismari maestro develops performances capable of imposing their emotional logic on the battlefield. Color, music, motion, and magic overwhelm a creature’s conscious defenses before erupting into a psychic aftershock. Allies witness a spectacle. Enemies become part of it.

For Vorn, this discipline is centered on **Fin**, a senior performance designed under Dean Uvilda Mistcoiler’s supervision. Fin combines the entrancing spectacle of *hypnotic pattern* with the cognitive violence of *synaptic static*, compressed into a precise two-part composition.

## Prismari Maestro Features

| Prismari Maestro Level | Features |
|---:|---|
| 1st | Bardic Continuance, Fin |
| 2nd | Ability Score Improvement, Encore |
| 3rd | Crescendo |
| 4th | Grand Finale |

## Hit Points

**Hit Dice:** 1d8 per prismari maestro level

**Hit Points per Prismari Maestro Level:** 1d8—or 5—plus your Constitution modifier

Because the prismari maestro is a prestige class, you do not receive the maximum value of its Hit Die when you gain its first level.

## Proficiencies

The prismari maestro grants no additional armor, weapon, tool, skill, or saving throw proficiencies.

## Bardic Continuance

Beginning when you take your first level in this prestige class, your Prismari studies continue the magical and inspirational progression of your bard training.

Add your prismari maestro levels to your bard levels for the following purposes:

- Determining your spell slots on the Bard table.
- Determining your number of bard spells known.
- Determining your number of bard cantrips known.
- Determining the maximum level of bard spell you can learn.
- Determining the size of your Bardic Inspiration die.
- Determining the number of uses granted by your Bardic Inspiration feature, if that number is increased by your bard level.

Whenever your combined bard and prismari maestro levels would increase your number of bard spells known or bard cantrips known, you learn new spells or cantrips as though you had gained a bard level. You can also replace one bard spell you know whenever the bard’s Spellcasting feature would ordinarily permit you to do so.

This feature does not grant any other bard class or subclass features. In particular, it does not grant Expertise, Magical Secrets, Song of Rest improvements, Blade Flourish improvements, or other College of Swords features.

## Fin

At 1st level, you complete Fin, a two-part performance that first arrests a creature’s senses and then causes the accumulated spectacle to collapse inward as psychic dissonance.

As an action, you can expend one use of your Bardic Inspiration to begin Fin. Choose a number of creatures up to your Charisma modifier within 30 feet of you. A creature can be chosen only if it can both see and hear you.

The performance occurs in two movements: **Entrancement** and **Aftershock**.

Fin is a magical effect but is not a spell. It requires no spell slot or concentration and cannot be countered by *counterspell*. A creature affected by Fin knows that you are the source of the effect.

### Entrancement

Each chosen creature must make a Wisdom saving throw against your bard spell save DC.

On a failed save, the creature is charmed by you until the end of its next turn. While charmed in this way:

- Its speed is 0 and cannot be increased.
- It cannot take reactions.
- On its turn, it can take either an action or a bonus action, not both.

The creature can otherwise act normally, subject to the effects of the charmed condition.

On a successful save, the creature suffers none of these effects. It nevertheless remains caught in the performance for the purpose of Fin’s Aftershock.

A creature immune to the charmed condition automatically succeeds on this saving throw, but it can still be affected by the Aftershock.

### Aftershock

At the end of each chosen creature’s next turn, the psychic refrain of Fin reaches its conclusion.

The Aftershock affects that creature only if all the following are true:

- The creature can still see you.
- The creature can still hear you.
- You are not incapacitated.
- The creature remains within 60 feet of you.

If any of these requirements are not met, the performance ends for that creature without producing the Aftershock.

Otherwise, the creature must make an Intelligence saving throw against your bard spell save DC.

On a failed save, roll your Bardic Inspiration die twice. The creature takes psychic damage equal to the total rolled. It must also roll a d4 and subtract the number rolled from the next attack roll, ability check, or Constitution saving throw it makes to maintain concentration before the end of its next turn.

On a successful save, the creature takes half as much psychic damage and suffers no additional penalty.

A creature immune to psychic damage automatically succeeds on this saving throw and suffers no effect from the Aftershock.

After the Aftershock is resolved, Fin ends for that creature.

### Sensory Interruption

A creature can prevent Fin’s Aftershock by depriving itself of either required sense before the end of its next turn. For example, it might enter an area of magical silence, move behind total cover, blind itself, deafen itself, or render you unable to continue the performance.

Merely closing its eyes or covering its ears without using an action or another effect sufficient to prevent sight or hearing does not render the creature blinded or deafened.

## Ability Score Improvement

When you reach 2nd level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.

As normal, you cannot increase an ability score above 20 using this feature.

If your campaign permits feats, you can forgo this feature to take a feat for which you qualify.

## Encore

At 2nd level, you learn to recover an audience’s attention when a movement of Fin initially fails to take hold.

When a creature succeeds on a saving throw against your Fin, you can use your reaction and expend one additional use of your Bardic Inspiration to force that creature to reroll the saving throw. The creature must use the new roll.

You can use Encore on either the Wisdom saving throw against Entrancement or the Intelligence saving throw against Aftershock.

You must decide to use Encore after learning that the saving throw succeeded but before resolving the consequences of that success.

Encore cannot force a creature to reroll an automatic success caused by immunity to the charmed condition or psychic damage.

Because Encore requires your reaction, you can normally use it against only one creature during each use of Fin.

## Crescendo

At 3rd level, you learn to expand Fin’s spectacle and carry its psychic dissonance into the spell that follows it.

Fin changes in the following ways.

### Expanded Performance

The range within which you can initially choose creatures increases from 30 feet to 60 feet.

You can choose a number of creatures up to twice your Charisma modifier, rather than up to your Charisma modifier.

### Intensified Aftershock

When a creature fails its Intelligence saving throw against Fin’s Aftershock, roll your Bardic Inspiration die three times, rather than twice, to determine the psychic damage.

A creature that succeeds on its saving throw still takes half as much damage.

### Lingering Dissonance

After all the Aftershocks from one use of Fin have been resolved, you can choose one creature that failed its Intelligence saving throw against the Aftershock.

Until the end of your next turn, that creature has disadvantage on the first saving throw it makes against a bard spell you cast.

If the spell forces the creature to make more than one saving throw, only the first saving throw is made with disadvantage.

If no creature failed its Intelligence saving throw against the Aftershock, this portion of Crescendo has no effect.

## Grand Finale

At 4th level, you can perform Fin at its complete scale: an overwhelming display that suspends an audience’s conscious thought before detonating as a prolonged psychic collapse.

As an action, you can perform your Grand Finale. This performance does not expend Bardic Inspiration.

Choose up to ten creatures within 60 feet of you. A creature can be chosen only if it can both see and hear you.

The Grand Finale occurs in two movements: **Arresting Spectacle** and **Psychic Collapse**.

Once you use Grand Finale, you cannot use it again until you finish a long rest.

Grand Finale is a magical effect but is not a spell. It requires no spell slot or concentration and cannot be countered by *counterspell*.

### Arresting Spectacle

Each chosen creature must make a Wisdom saving throw against your bard spell save DC.

On a failed save, the creature is charmed by you, incapacitated, and has a speed of 0 until the end of its next turn.

The effect ends early for a creature if:

- It takes damage.
- Another creature uses an action to shake it from its stupor.
- It can no longer see or hear you.
- You become incapacitated.

Ending Arresting Spectacle early does not prevent Psychic Collapse unless the creature cannot see or hear you when that movement would occur.

On a successful save, the creature suffers none of these conditions. It nevertheless remains caught in the performance for the purpose of Psychic Collapse.

A creature immune to the charmed condition automatically succeeds on this saving throw but can still be affected by Psychic Collapse.

### Psychic Collapse

At the end of each chosen creature’s next turn, it must make an Intelligence saving throw against your bard spell save DC, provided all the following are true:

- The creature can still see you.
- The creature can still hear you.
- You are not incapacitated.
- The creature remains within 60 feet of you.

If any of these requirements are not met, Grand Finale ends for that creature without producing Psychic Collapse.

On a failed save, the creature takes 8d6 psychic damage. In addition, roll a d6. For 1 minute, the creature subtracts the number rolled from all its attack rolls and ability checks, as well as its Constitution saving throws made to maintain concentration.

At the end of each of its turns, the creature can repeat the Intelligence saving throw, ending the penalty on itself on a success.

On a successful initial save, the creature takes half as much psychic damage and suffers no additional penalty.

A creature immune to psychic damage automatically succeeds on this saving throw and suffers no effect from Psychic Collapse.

### Encore and Grand Finale

You can use Encore when a creature succeeds on either saving throw imposed by Grand Finale, provided the success was not automatic because of an immunity.

Using Encore during Grand Finale still requires your reaction and expends one use of Bardic Inspiration.

### Grand Crescendo

After all Psychic Collapses from your Grand Finale have been resolved, you can apply your Lingering Dissonance to one creature that failed its Intelligence saving throw, as described in your Crescendo feature.

---

# Wēt

# Tattooed Spellrager

Most practitioners treat arcane spellcasting and barbarian fury as irreconcilable disciplines. Spellcraft demands control, precise notation, and uninterrupted concentration. Rage overwhelms conscious restraint in favor of instinct and raw physical power.

A tattooed spellrager resolves this contradiction by moving the spellwork out of the conscious mind.

Through enchanted inks, historical battle-signs, and arcane patterns inscribed directly into the body, the spellrager creates a second magical language: one written in muscle memory, pain, movement, and instinct. The tattoos hold the structures that conscious thought would ordinarily maintain, allowing spells to survive within the violence of a rage.

For Wēt, these techniques combine Bladesinging, wild magical fury, and Professor Tervis Sharpwing’s research into the fighting traditions of ancient warriors. Each tattoo contains both a magical theorem and the embodied memory of those who carried similar marks into battle.

> **Editorial note:** The mechanics below are approved. The labels **War-Marks** and **empowered** are provisional and can be replaced during terminology cleanup without changing the rules.

## Tattooed Spellrager Features

| Tattooed Spellrager Level | Features | War-Marks Known | War-Marks Empowered |
|---:|---|---:|---:|
| 1st | Arcane Continuance, Tattooed Focus, Inscribed Fury | — | — |
| 2nd | Ability Score Improvement, Runescar Arsenal | 4 | 2 |
| 3rd | Battle Weaving | 5 | 2 |
| 4th | Runescar Apotheosis | 6 | 2 |

## Hit Points

**Hit Dice:** 1d8 per tattooed spellrager level

**Hit Points per Tattooed Spellrager Level:** 1d8—or 5—plus your Constitution modifier

Because the tattooed spellrager is a prestige class, you do not receive the maximum value of its Hit Die when you gain its first level.

## Proficiencies

The tattooed spellrager grants no additional armor, weapon, tool, skill, or saving throw proficiencies.

## Arcane Continuance

Beginning when you take your first level in this prestige class, your tattoo research continues the spellcasting progression of your wizard training.

Add your tattooed spellrager levels to your wizard levels for the following purposes:

- Determining your spell slots under the multiclass spellcasting rules.
- Determining the number of wizard cantrips you know.
- Determining the number of wizard spells you can prepare.
- Determining the maximum level of wizard spell you can prepare.
- Determining the maximum level of wizard spell you can add to your spellbook when you gain a level in this class.

Whenever you gain a tattooed spellrager level, you add two wizard spells of your choice to your spellbook without paying their normal transcription costs. Each spell must be of a level you could prepare as a wizard whose wizard level equaled your combined wizard and tattooed spellrager levels.

For example, a 7th-level wizard who gains two tattooed spellrager levels prepares spells and adds spells to a spellbook as a 9th-level wizard.

This feature does not grant any other wizard class or subclass features. In particular, it does not improve Arcane Recovery, Bladesong, Extra Attack, Song of Defense, or another Bladesinging feature.

## Tattooed Focus

At 1st level, the arcane inscriptions worked into your body can serve as a spellcasting focus for your wizard spells.

You can perform the somatic components of a wizard spell using the movements of your inscribed body, even when you have a weapon in one or both hands. You must still provide any material component that has a listed monetary cost, and you must still provide any component that the spell consumes.

## Inscribed Fury

At 1st level, you learn to channel Rage through your magical tattoos rather than allowing it to overwhelm your spellcasting.

When you expend a use of your Rage and enter it, you can choose to enter an Inscribed Fury instead of an ordinary Rage. Entering Inscribed Fury requires the same bonus action normally required to enter Rage.

Inscribed Fury counts as Rage for the purpose of your barbarian features and other game effects. It has the same duration and ends under the same circumstances as your Rage, except as described below.

If you are not wearing heavy armor, you gain the following benefits while your Inscribed Fury lasts.

### Arcane Fury

You can cast spells and concentrate on them during your Inscribed Fury.

Casting a spell on your turn prevents your Inscribed Fury from ending at the end of that turn, as though you had attacked a hostile creature since your previous turn.

You must still make Constitution saving throws to maintain concentration when you take damage.

### Embodied Strength

You have advantage on Strength checks and Strength saving throws.

### Spellrage Damage

When you hit a creature with a weapon attack, you gain a bonus to the attack’s damage roll equal to the Rage Damage bonus shown for your barbarian level. The attack does not need to use Strength, and it can be either a melee or ranged weapon attack.

In addition, once on each of your turns when a spell you cast deals damage to one or more creatures, you can add your Rage Damage bonus to one damage roll against one creature damaged by the spell.

If the spell damages more than one creature, you choose which creature takes the additional damage. If the spell makes multiple damage rolls against that creature, you choose which roll receives the bonus.

The additional damage is of a type already dealt by the weapon attack or spell, chosen by you if the effect deals more than one damage type.

You can add your Rage Damage bonus to weapon attacks and to a spell during the same turn.

### Inscribed Resilience

When you enter your Inscribed Fury, you gain temporary hit points equal to twice your proficiency bonus. These temporary hit points disappear when your Inscribed Fury ends.

Inscribed Fury does not grant the resistance to bludgeoning, piercing, and slashing damage normally provided by Rage.

### Wild Surge

Entering Inscribed Fury triggers your Wild Surge feature as though you had entered an ordinary Rage.

Unless a Wild Surge effect specifically states otherwise, an effect that lasts until your Rage ends instead lasts until your Inscribed Fury ends.

### Bladesong

Nothing in Inscribed Fury prevents you from activating or benefiting from Bladesong, provided you otherwise satisfy the requirements of that feature. Inscribed Fury and Bladesong must each be activated separately and require their normal bonus actions and uses.

## Ability Score Improvement

When you reach 2nd level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.

As normal, you cannot increase an ability score above 20 using this feature.

If your campaign permits feats, you can forgo this feature to take a feat for which you qualify.

## Runescar Arsenal

At 2nd level, you complete a collection of magical tattoos called war-marks.

You learn four war-marks of your choice from the War-Marks section at the end of this class. You learn one additional war-mark when you reach 3rd level and another when you reach 4th level.

Whenever you gain a tattooed spellrager level, you can replace one war-mark you know with another war-mark.

The tattoos representing every war-mark you know remain physically present on your body. At the end of each long rest, you empower two war-marks you know. Only empowered war-marks provide their features.

Each war-mark has three features:

- A **Dormant Effect**, which remains active while the war-mark is empowered.
- An **Awakened Effect**, which you can activate once and regain when you finish a long rest.
- A **Fury Effect**, which can become active during your Inscribed Fury.

Using a war-mark’s Awakened Effect does not cause its Dormant Effect to end or cause the war-mark to cease being empowered.

When you enter Inscribed Fury, choose one of your empowered war-marks. Its Fury Effect remains active until that Inscribed Fury ends. Activating the Fury Effect does not expend the war-mark’s Awakened Effect.

If a war-mark requires a saving throw, the save DC equals your wizard spell save DC. If it requires a spell attack, you use your wizard spell attack modifier.

War-mark effects are magical but are not spells. They cannot be countered with *counterspell*, though they are suppressed in an *antimagic field*.

## Battle Weaving

At 3rd level, your conscious spellcasting and instinctive attacks become part of the same movement.

While your Inscribed Fury is active, when you cast a wizard spell of 1st level or higher with a casting time of 1 action, you can make one weapon attack as part of the same action immediately after the spell resolves.

This weapon attack is not the Attack action and does not allow you to make additional attacks through Extra Attack or a similar feature.

You can move between resolving the spell and making the weapon attack if you have movement available.

You can use Battle Weaving a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest.

Because Spellrage Damage applies separately to weapon attacks and spells, you can apply your Rage Damage bonus to both the spell and the weapon attack produced by Battle Weaving during the same turn, provided each otherwise qualifies.

## Runescar Apotheosis

At 4th level, you can awaken your complete network of battle inscriptions simultaneously.

Whenever you enter Inscribed Fury, both of your empowered war-marks provide their Fury Effects for the duration of that Inscribed Fury.

In addition, when you enter Inscribed Fury, you can activate the Awakened Effect of one empowered war-mark without using the action, bonus action, or reaction normally required. Any other triggering condition of the Awakened Effect must still be satisfied, and activating it in this way expends its use normally.

### Spellrage Ascension

Once per long rest, when you enter Inscribed Fury, you can also cast one wizard spell as part of the same bonus action used to enter the Fury.

The chosen spell must meet all the following requirements:

- It is 3rd level or lower.
- Its normal casting time is 1 action.
- When cast, it targets only you.
- It does not create an area that targets or directly affects other creatures.

You expend a spell slot and provide the spell’s components normally. You must concentrate on the spell normally if it requires concentration.

A spell such as *haste*, *fly*, or *mirror image* can qualify if you cast it only on yourself. A spell whose range is Self but creates a cone, line, emanation, or another area affecting other creatures does not qualify.

For the purpose of the rule limiting spells cast as a bonus action, the spell cast through Spellrage Ascension is treated as a spell cast with a bonus action. During the same turn, you therefore cannot cast another spell except for a cantrip with a casting time of 1 action.

## War-Marks

### Ancestor’s Vigil

This tattoo depicts the eyes, weapons, or heraldry of warriors whose fighting traditions inform your spellrage.

#### Dormant Effect

You cannot be surprised while you are conscious.

You also have advantage on Intelligence (History) checks concerning warfare, military organizations, famous battles, weapons, armor, or martial traditions.

#### Awakened Effect

When you fail an Intelligence, Wisdom, or Charisma saving throw, you can use your reaction to add your Intelligence modifier to the saving throw, potentially causing it to succeed.

#### Fury Effect

You have advantage on saving throws against being charmed or frightened.

At the start of each of your turns, if you are charmed or frightened, you can repeat one saving throw against one effect imposing that condition, ending the condition on yourself on a success. You can make this saving throw even if the effect does not ordinarily allow another saving throw at that time.

### Binding Script

Interlocking bands and geometric knots transform your will into constricting arcane force.

#### Dormant Effect

When you make a Strength (Athletics) check to grapple or shove a creature, you can use your Intelligence modifier in place of your Strength modifier.

#### Awakened Effect

As a bonus action, choose one creature you can see within 30 feet of you.

The creature must succeed on a Strength saving throw or become restrained by spectral bands until the end of your next turn.

A creature more than one size larger than you has advantage on this saving throw.

#### Fury Effect

Once on each of your turns, when you deal damage to a Large or smaller creature with a weapon attack or spell, you can move that creature up to 5 feet directly toward or away from you.

If a spell damages more than one creature, you can move only one creature damaged by it.

This movement cannot move a creature into a space it could not ordinarily occupy.

### Chaosbrand

This unstable pattern shifts between historical battle-runes and spontaneous manifestations of wild magic.

#### Dormant Effect

You can use Intelligence in place of Charisma when making a Charisma (Intimidation) or Charisma (Performance) check that substantially incorporates your tattoos, spellcasting, or another display of magic.

#### Awakened Effect

When you or a creature you can see within 30 feet of you makes an attack roll, ability check, or saving throw, you can use your reaction to roll a d6.

You add or subtract the number rolled from the triggering roll. You choose whether to add or subtract after the d20 is rolled but before the outcome is determined.

#### Fury Effect

When entering Inscribed Fury causes you to roll on your Wild Surge table, roll twice and choose which of the two results occurs.

If both dice produce the same result, resolve that result normally.

### Counterglyph

Dense abjurative writing winds across your skin, reinforcing the concentration necessary to hold a spell together under pressure.

#### Dormant Effect

You have advantage on Intelligence (Arcana) checks made to identify a spell, magical effect, magical trap, or active enchantment.

#### Awakened Effect

When you are targeted by a spell or included in a spell’s area, you can use your reaction to raise the Counterglyph until the start of your next turn.

You have advantage on the first saving throw you make against the triggering spell, and you have resistance to all damage dealt to you by that spell.

If the spell requires no saving throw, you still gain resistance to its damage.

#### Fury Effect

You have advantage on Constitution saving throws made to maintain concentration on a spell.

### Gale-Step Mark

Sweeping lines modeled after aerial duelists and mobile skirmishers guide your body through openings in the battlefield.

#### Dormant Effect

Each of your speeds increases by 5 feet.

#### Awakened Effect

As a bonus action, you move up to your speed.

This movement:

- Does not provoke opportunity attacks.
- Ignores nonmagical difficult terrain.
- Can use any movement mode for which you have a speed.

You cannot end this movement in an occupied space.

#### Fury Effect

The speed increase provided by the Dormant Effect becomes 10 feet.

In addition, moving through nonmagical difficult terrain costs you no additional movement, and opportunity attacks against you are made with disadvantage.

### Stone-Sentinel Mark

Broad angular patterns reproduce the warding marks carried by shield-bearers, fortress guards, and battle-mages who survived by refusing to yield ground.

#### Dormant Effect

You have advantage on ability checks and saving throws made to resist being knocked prone or moved against your will.

#### Awakened Effect

When you take damage, you can use your reaction to gain resistance to that instance of damage.

#### Fury Effect

The first time you take damage after the start of each of your turns, reduce that damage by an amount equal to your proficiency bonus.

This reduction occurs after applying any resistance or vulnerability.

---

# Jacob / Vesper Palamer

# Sanguine Assassin

A soulknife ordinarily draws weapons from disciplined psychic power. A sanguine assassin gives that power physical substance, forcing thought, blood, and identity into the same terrible shape.

Through advanced sanguimancy, the assassin learns to perceive blood as more than living tissue. Blood is memory, location, vulnerability, and connection. A wound becomes a beacon. A marked vein becomes a passage. A creature’s own circulation becomes an entry point through which hostile magic can emerge.

For Jacob, this discipline grows from the intersection of Soulknife training, blood-wizard research, changeling identity, and techniques observed in Rampart Sooviij’s blood constructs. Its central implement is the Blood Whip: a psychic blade translated into living sanguine force and extended directly from the assassin’s body.

## Sanguine Assassin Features

| Sanguine Assassin Level | Features |
|---:|---|
| 1st | Arcane Continuance, Blood Whip, Sanguine Psionics |
| 2nd | Ability Score Improvement, Blood Trace, Vein Step |
| 3rd | Crimson Circuit |
| 4th | Hemic Echo |

## Hit Points

**Hit Dice:** 1d8 per sanguine assassin level

**Hit Points per Sanguine Assassin Level:** 1d8—or 5—plus your Constitution modifier

Because the sanguine assassin is a prestige class, you do not receive the maximum value of its Hit Die when you gain its first level.

## Proficiencies

The sanguine assassin grants no additional armor, weapon, tool, skill, or saving throw proficiencies.

## Arcane Continuance

Beginning when you take your first level in this prestige class, your sanguine research continues the spellcasting progression of your wizard training.

Add your sanguine assassin levels to your wizard levels for the following purposes:

- Determining your spell slots under the multiclass spellcasting rules.
- Determining the number of wizard cantrips you know.
- Determining the number of wizard spells you can prepare.
- Determining the maximum level of wizard spell you can prepare.
- Determining the maximum level of wizard spell you can add to your spellbook when you gain a level in this class.

Whenever you gain a sanguine assassin level, you add two wizard spells of your choice to your spellbook without paying their normal transcription costs. Each spell must be of a level you could prepare as a wizard whose wizard level equaled your combined wizard and sanguine assassin levels.

For example, a 6th-level wizard who gains two sanguine assassin levels prepares spells and adds spells to a spellbook as an 8th-level wizard.

This feature does not grant any other wizard class or subclass features.

Your sanguine assassin levels do not count as rogue levels for determining your Sneak Attack damage, number or size of Psionic Energy dice, or other rogue or Soulknife features.

## Blooded Creatures

Several sanguine assassin features affect only creatures that possess blood or an analogous circulating vital fluid.

For purposes of this class, Constructs, Elementals, Oozes, Plants, and Undead are not blooded creatures unless the DM determines that a particular creature possesses an appropriate vital fluid that can sustain sanguimancy.

Other creatures are blooded unless the DM determines otherwise.

## Blood Whip

At 1st level, you complete the Blood Whip, transforming the principles of your Psychic Blades into a persistent sanguine weapon.

As a bonus action, you can manifest the Blood Whip along either arm. You can dismiss it at any time without using an action. It also disappears if you are incapacitated or die.

The whip is a magical simple melee weapon with the following properties:

| Damage | Properties |
|---|---|
| 1d6 psychic damage plus 1d6 necrotic damage | Finesse, reach |

You are proficient with the Blood Whip.

The Blood Whip is an extension of your body rather than an object held in your hand. Consequently:

- It does not require a free hand.
- It cannot be disarmed.
- It cannot be given to another creature.
- It cannot be used while both of your arms are completely restrained or otherwise incapable of movement.

You use Dexterity for the Blood Whip’s attack and damage rolls.

### Psychic Blade

The Blood Whip counts as a Psychic Blade for your Soulknife features, but it uses the damage and properties given above instead of the normal statistics of a Psychic Blade.

When you use the Attack action to attack with the Blood Whip, you satisfy the requirement for making the bonus-action attack granted by your Psychic Blades feature. You must manifest a normal Psychic Blade for that bonus-action attack, and you must otherwise meet the feature’s requirements.

The Blood Whip persists after an attack. You can therefore use it to make opportunity attacks and other attacks made outside your own turn.

### Sneak Attack

The Blood Whip has the finesse property and therefore qualifies for Sneak Attack normally.

Psychic and necrotic damage dealt by the Blood Whip are both part of the weapon’s damage. Sneak Attack damage remains the same damage type as determined by the normal rules for the triggering attack. When Sneak Attack is applied through the Blood Whip, you choose whether its additional damage is psychic or necrotic.

### Sanguine Focus

The Blood Whip can serve as a spellcasting focus for your wizard and sanguimancy spells.

You can perform the somatic components of those spells through movements of the Blood Whip, even when you have no free hand. You must still provide any material component that has a listed monetary cost, and you must still provide any component that the spell consumes.

## Sanguine Psionics

Also at 1st level, you learn to convert psychic reserves into the vital force required by sanguimancy.

Whenever a sanguimancy spell or feature requires you to expend one or more Hit Dice as a Crimson Price, you can expend Psionic Energy dice in place of any number of those Hit Dice.

Each Psionic Energy die expended in this way counts as one Hit Die for all purposes of that Crimson Price.

If the Crimson Price instructs you to roll one or more expended Hit Dice, roll the substituted Psionic Energy dice instead and use their results.

You can combine Hit Dice and Psionic Energy dice as part of the same Crimson Price. For example, if a Crimson Price requires three Hit Dice, you could expend two Hit Dice and one Psionic Energy die.

A Psionic Energy die expended in this way is expended from the pool granted by your Psionic Power feature and is recovered according to that feature’s normal rules.

A **sanguimancy spell** is any spell expressly designated as sanguimancy or blood magic by the campaign’s rules.

## Ability Score Improvement

When you reach 2nd level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.

As normal, you cannot increase an ability score above 20 using this feature.

If your campaign permits feats, you can forgo this feature to take a feat for which you qualify.

## Blood Trace

At 2nd level, you can leave an arcane signature within a creature’s circulation.

When either of the following events occurs, you can place a Blood Trace on one blooded creature involved in that event:

- You deal Sneak Attack damage to the creature using your Blood Whip.
- The creature takes damage from a sanguimancy spell you cast.

Placing a Blood Trace requires no action.

A Blood Trace lasts for 1 hour. It ends early if:

- You dismiss it without using an action.
- The traced creature dies.
- You and the creature are no longer on the same plane of existence.

While a traced creature is within 1 mile of you on the same plane, you know:

- The direction of the creature from you.
- Its approximate distance from you.
- Whether it is conscious, unconscious, or dead.

A Blood Trace does not reveal the creature’s precise location, surroundings, identity, or current form.

You can maintain a number of Blood Traces equal to your Intelligence modifier, with a minimum of one. If you place a trace beyond this maximum, you choose one existing trace to end.

Placing another Blood Trace on a creature already bearing one refreshes its duration.

A Blood Trace is magical. It can be detected by *detect magic* and ended by *dispel magic*. For purposes of *dispel magic*, treat a Blood Trace as a 2nd-level spell.

## Vein Step

Also at 2nd level, you can use a Blood Trace as an anchor for short-range teleportation.

As a bonus action, expend one Psionic Energy die and choose one creature bearing your Blood Trace within 60 feet of you.

You teleport to an unoccupied space of your choice within 5 feet of the traced creature.

You do not need to see either the creature or the destination, but all the following restrictions apply:

- The destination must be able to support you.
- The destination cannot be occupied.
- You cannot teleport into a solid object.
- You cannot cross a magical barrier or effect that specifically prevents teleportation.
- If no legal destination exists, the teleportation fails, but the Psionic Energy die is not expended.

If you cannot see the destination, the DM determines the nearest legal space within 5 feet of the traced creature. If more than one space is equally near, you choose among them.

Vein Step does not provoke opportunity attacks.

## Crimson Circuit

At 3rd level, a Blood Trace becomes a complete magical circuit through which you can transmit hostile sanguimancy.

You gain the Hemorrhagic Origin and Severing Lash options below.

## Hemorrhagic Origin

When you cast a sanguimancy spell, you can cause the spell to originate from the body of a traced creature rather than from your own position.

To do so, expend either one Psionic Energy die or one Hit Die and choose one creature bearing your Blood Trace within 120 feet of you.

The spell must meet all the following requirements:

- It is 3rd level or lower.
- It has a casting time of 1 action.
- Its range is not Self.

For this casting:

- The traced creature’s space is the spell’s point of origin.
- Measure the spell’s range and area from the traced creature.
- Determine cover and line of effect from the traced creature’s space rather than your own.
- The spell can affect the traced creature if it would ordinarily affect a creature in its position.
- You need not see the traced creature.
- Cover and obstructions between you and the traced creature do not prevent the spell from originating there.

You still cast the spell. You provide its verbal, somatic, and material components from your own space, expend the spell slot normally, and maintain concentration normally if required.

You must still choose legal targets and spaces according to the spell’s description. Hemorrhagic Origin does not allow a spell to pass through cover or obstructions extending outward from the traced creature.

If the traced creature is inside an area too small to contain the spell’s effect, only the legal portion of the area is created.

## Severing Lash

Once on each of your turns, when you hit a blooded creature with the Blood Whip, you can pay a sanguine price to disrupt the creature’s body.

Choose one of the following costs:

- Expend one Psionic Energy die.
- Expend one Hit Die.

You do not roll the expended die unless another feature instructs you to do so.

Choose one of the following effects:

### Arrested Healing

The target cannot regain hit points until the end of your next turn.

### Cramping Veins

The target’s speed is reduced by 15 feet until the end of your next turn.

This reduction cannot reduce its speed below 5 feet.

### Disrupted Focus

The target has disadvantage on the next Constitution saving throw it makes to maintain concentration before the end of your next turn.

Once that saving throw is made, this effect ends.

### Sanguine Draw

If the target is Large or smaller, you pull it up to 10 feet directly toward you.

The target stops early if it would enter a solid object, another creature’s space, or terrain it cannot enter.

### Compound Severance

When you use Severing Lash, you can expend both one Psionic Energy die and one Hit Die to choose two different effects instead of one.

You cannot choose the same effect more than once.

## Hemic Echo

At 4th level, you can use a Blood Trace to produce a lesser version of the blood simulacra developed by more dangerous sanguimancers.

As a bonus action, choose one creature bearing your Blood Trace within 120 feet of you. A Hemic Echo appears in an unoccupied space within 5 feet of that creature.

If you cannot see the area, the echo appears in the nearest legal unoccupied space to the traced creature, determined by the DM.

The echo lasts for 1 minute. It disappears early if:

- You dismiss it without using an action.
- You are incapacitated or die.
- It ends its turn more than 120 feet from you.
- You create another Hemic Echo.
- It is destroyed.

Once you create a Hemic Echo, you cannot create another using this feature until you finish a long rest, except through Reconstitute Echo below.

### Nature of the Echo

The Hemic Echo is a translucent duplicate of you formed from psychic force and living blood. It bears your general shape but can display altered facial features, coloration, clothing, or other superficial details of your choice when created.

The echo is a magical object with the following properties:

- Its Armor Class equals your wizard spell save DC.
- It has 1 hit point.
- It is immune to poison and psychic damage.
- It is immune to all conditions.
- It occupies its space but does not obstruct movement.
- It does not provide cover.
- It cannot manipulate objects, make attacks, speak, or take actions independently.

If the echo takes any damage to which it is not immune, it is destroyed.

### Moving the Echo

Whenever you move on your turn, you can also move the echo up to 30 feet. This movement requires no action.

The echo:

- Can move through the spaces of creatures.
- Cannot move through solid objects.
- Cannot end its movement in an occupied space.
- Must end its movement on a surface or in a space capable of supporting it.

The echo does not provoke opportunity attacks.

### Projected Blood Whip

Whenever you make an attack with your Blood Whip, you can cause the attack to originate from your space or the echo’s space.

For an attack originating from the echo:

- Measure the Blood Whip’s reach from the echo.
- Determine cover, visibility, advantage, and disadvantage from the echo’s position.
- The attack is still made by you using your normal attack modifier.
- Any Sneak Attack or Severing Lash applied to the attack functions normally.

The echo can serve as the origin of an opportunity attack if a creature you can perceive leaves the Blood Whip’s reach as measured from the echo. You use your reaction normally to make that opportunity attack.

The echo itself is not a creature and does not count as an enemy adjacent to a target for the purpose of Sneak Attack.

### Projected Sanguimancy

When you cast a sanguimancy spell, you can cause the spell to originate from your space or the Hemic Echo’s space.

When the spell originates from the echo:

- Measure its range and area from the echo.
- Determine cover and line of effect from the echo’s space.
- You still provide all components from your own space.
- You expend the spell slot normally.
- You maintain concentration normally if required.

Unlike Hemorrhagic Origin, this use of Hemic Echo is not limited to spells of 3rd level or lower and does not require an additional Psionic Energy die or Hit Die.

You must be able to perceive any target the spell requires you to see. You can satisfy this requirement through the Echoed Senses feature.

### Blood Exchange

As a bonus action, you can teleport, magically swapping places with your Hemic Echo.

Both you and the echo must be able to occupy the destination spaces. If either destination is illegal, the swap fails and the bonus action is wasted.

This teleportation does not provoke opportunity attacks.

### Echoed Senses

As a bonus action, you can transfer your sight and hearing to the Hemic Echo until the start of your next turn.

During this time:

- You see and hear from the echo’s space.
- You are blinded and deafened with regard to your own surroundings.
- You can use the echo’s senses when choosing targets for attacks and spells originating from it.
- You can perceive normally through the echo regardless of superficial alterations to its appearance.

You can end Echoed Senses early without using an action.

### Reconstitute Echo

If your Hemic Echo is destroyed or disappears while its 1-minute duration remains, you can recreate it as a bonus action.

To do so:

- Expend either one Psionic Energy die or one Hit Die.
- Choose a creature bearing your Blood Trace within 120 feet.
- Create the echo in an unoccupied space within 5 feet of that creature.

The recreated echo lasts only for the remainder of the original 1-minute duration.

Reconstituting the echo does not expend another use of Hemic Echo.

---

# Konte Spatium

# Space-Time Savant

Most spellcasters understand range, area, and duration as immutable properties of a spell. A line proceeds straight ahead. An explosion begins at a fixed point. A creature occupies one location at one moment and another location the next.

A space-time savant recognizes these rules as conventions rather than necessities.

Through advanced metamagical theory, the savant treats a spell as an equation whose spatial and temporal variables can be revised during its casting. Lines bend through open space, magical areas slip beyond their expected boundaries, and missed attacks are redirected along alternate trajectories. With greater mastery, the savant can restore a creature to an earlier position or borrow an action from a moment that has not yet occurred.

For Konte, this discipline combines Clockwork Soul magic, Quandrix abstraction, advanced teleportation, and Professor Renald Rothon’s theories of gravity and spatial measurement. His magic does not break reality. It persuades reality that a different geometry was always correct.

## Space-Time Savant Features

| Space-Time Savant Level | Features |
|---:|---|
| 1st | Sorcerous Continuance, Spatial Warp |
| 2nd | Ability Score Improvement, Recalled Position |
| 3rd | Second-Order Geometry |
| 4th | Borrowed Moment |

## Hit Points

**Hit Dice:** 1d6 per space-time savant level

**Hit Points per Space-Time Savant Level:** 1d6—or 4—plus your Constitution modifier

Because the space-time savant is a prestige class, you do not receive the maximum value of its Hit Die when you gain its first level.

## Proficiencies

The space-time savant grants no additional armor, weapon, tool, skill, or saving throw proficiencies.

## Sorcerous Continuance

Beginning when you take your first level in this prestige class, your space-time research continues the magical progression of your sorcerer training.

Add your space-time savant levels to your sorcerer levels for the following purposes:

- Determining your spell slots under the multiclass spellcasting rules.
- Determining your number of sorcerer spells known.
- Determining your number of sorcerer cantrips known.
- Determining the maximum level of sorcerer spell you can learn.
- Determining your maximum number of Sorcery Points.
- Determining your number of Metamagic options known.
- Determining the spells granted by your Clockwork Magic feature.

Whenever your combined sorcerer and space-time savant levels would increase your number of sorcerer spells or cantrips known, you learn new spells or cantrips as though you had gained a sorcerer level. You can also replace one sorcerer spell you know whenever the sorcerer’s Spellcasting feature would ordinarily permit you to do so.

When your combined sorcerer and space-time savant levels reach 7th level, you learn the Clockwork Magic spells normally granted at 7th sorcerer level. When those combined levels reach 9th level, you learn the Clockwork Magic spells normally granted at 9th sorcerer level.

Whenever you gain a space-time savant level, you can replace one spell gained through Clockwork Magic as though you had gained a sorcerer level. The replacement spell must satisfy the normal restrictions of that feature.

This feature does not grant any other sorcerer or Clockwork Soul features. In particular, it does not grant additional Sorcerous Origin features, additional uses of Restore Balance, or improvements to Bastion of Law.

Your space-time savant levels do not advance your Pact Magic spell slots, warlock spells known, Eldritch Invocations, or other warlock features.

### Unified Sorcery

For you, Sorcery Points granted by different features form a single magical reservoir.

You can spend Sorcery Points granted by any source on any feature that requires Sorcery Points, including Flexible Casting, Metamagic, Spatial Warp, and Recalled Position.

You regain those Sorcery Points according to the normal recovery rules of the feature that granted them.

## Spatial Warp

At 1st level, you complete your senior research into the spatial properties of spells and learn the Spatial Warp Metamagic option.

Spatial Warp does not count against your number of Metamagic options known.

When you cast a spell that qualifies for one of the spatial theorems described below, you can spend 1 Sorcery Point to apply that theorem to the spell.

Spatial Warp counts as a Metamagic option. You cannot apply another Metamagic option to the same spell unless that option expressly allows itself to be combined with another Metamagic option.

You can apply only one Spatial Warp theorem to a spell until you gain the Second-Order Geometry feature.

### Refraction

When you cast a spell that produces a line, you can bend the line once.

Choose a point along the line that you can see. The line travels from its point of origin to the chosen point, changes direction by an angle of your choice no greater than 90 degrees, and then continues for its remaining length in the new direction.

The following rules apply:

- The total length of the line is unchanged.
- The line’s width is unchanged.
- The line must follow a continuous path.
- The line cannot pass through total cover.
- No space can be included in the line more than once.
- A creature cannot be affected by the spell more than once because of the bend.
- Each segment of the line is blocked by cover and obstructions normally.

For example, a 100-foot line could travel 40 feet, turn up to 90 degrees, and then continue for its remaining 60 feet.

### Translation

When you cast a spell that creates a sphere, cylinder, or cube at a point of origin you choose within the spell’s range, you can translate that point through space.

First choose a legal point of origin according to the spell’s normal rules. You can then move that point of origin up to 10 feet to another point.

The translated point becomes the spell’s point of origin.

The following rules apply:

- The original point of origin must be within the spell’s normal range and must satisfy the spell’s normal visibility and line-of-effect requirements.
- The translated point need not be visible to you and can be behind total cover from your position.
- The translated point cannot be inside a solid object or in another location where the spell could not physically originate.
- The translated point can be outside the spell’s normal range, but only by the distance it was moved through this theorem.
- The spell’s area is determined normally from the translated point.
- Cover and obstructions extending outward from the translated point affect the spell normally.
- Translation does not cause the spell to treat you as though you occupied the translated point for any other purpose.
- A spell whose point of origin is fixed on a creature or object cannot be translated away from that creature or object.
- A spell with a range of Self does not qualify for Translation.

For example, you could choose a legal point near the edge of a corridor as the origin of a *fireball* and translate that point around the corner before resolving the spell.

### Ricochet

When you miss a creature with a spell attack made as part of casting a spell, you can redirect that attack along an alternate trajectory.

Choose a different creature that meets all the following requirements:

- It is within 10 feet of the original target.
- It is within the spell’s normal range.
- It would have been a legal target of the spell when the attack was made.
- You can see it.

Reroll the spell attack against the new target.

You must use the new attack roll.

You can use Ricochet only once during a single casting of a spell. If the spell creates multiple spell attacks, such as *eldritch blast* or *scorching ray*, Ricochet redirects only the attack that missed.

Ricochet applies only to a spell attack made as part of the spell’s casting. It does not apply to attacks granted by the spell on later turns.

You decide to use Ricochet after the original spell attack misses.

## Ability Score Improvement

When you reach 2nd level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.

As normal, you cannot increase an ability score above 20 using this feature.

If your campaign permits feats, you can forgo this feature to take a feat for which you qualify.

## Recalled Position

At 2nd level, you can restore a willing creature to coordinates it occupied only moments earlier.

When you or a willing creature you can see within 60 feet of you meets either of the following triggers, you can use your reaction to invoke this feature:

- The creature changes its position for any reason, including movement, forced movement, falling, teleportation, being carried, or being moved into another creature’s space.
- The creature ends its turn.

Choose one unoccupied space the creature occupied since the start of the current turn. If the feature is used when the creature ends its turn, choose a space it occupied since the start of the turn that just ended.

The chosen space must be able to support the creature, and the creature must be able to fit within it.

The creature magically teleports to the chosen space.

The Sorcery Point cost depends on the target:

- **Yourself:** 1 Sorcery Point.
- **Another creature:** 2 Sorcery Points.

You cannot use Recalled Position unless a legal destination exists.

### Positional Revision

Recalled Position changes only the creature’s location.

It does not:

- Reverse damage the creature has taken.
- Restore expended spell slots, abilities, movement, actions, or other resources.
- Undo attacks, spells, or other effects produced before the teleportation.
- Restore an object the creature dropped or lost.
- Return another creature that moved with or inside the target.
- Reverse any other consequence of the creature’s previous position.

A grapple, restraint, swallowing effect, or similar condition ends only if the normal rules of that effect would cause it to end when the creature teleports to the chosen space.

Recalled Position does not provoke opportunity attacks.

## Second-Order Geometry

At 3rd level, you learn to solve multiple spatial variables within the same spell.

Your Spatial Warp theorems improve as described below, and you learn the Aperture theorem.

### Improved Refraction

When you use Refraction, you can bend the spell’s line up to twice rather than once.

Each bend:

- Can change the line’s direction by no more than 90 degrees.
- Must occur at a point along the line that you can see.
- Uses part of the spell’s unchanged total length.

The line must otherwise obey all the normal restrictions of Refraction.

### Improved Translation

When you use Translation, you can move the spell’s point of origin up to 20 feet rather than 10 feet.

### Improved Ricochet

When you use Ricochet, the second target can be within 20 feet of the original target rather than 10 feet.

### Aperture

When you cast a spell that fills a cone, cube, cylinder, line, or sphere and affects creatures within that area, you can create a protected opening within the spell.

Choose up to two contiguous 5-foot cubes within the spell’s area. The cubes must share at least one face with each other if you choose two.

The chosen cubes are excluded from the spell’s area.

A creature is unaffected by the spell while every space it occupies lies entirely within the excluded cubes. If any portion of the creature’s space remains within the spell’s area, the creature is affected normally.

Aperture applies to all effects the spell would produce within the excluded spaces, including:

- Damage.
- Conditions.
- Obscurement.
- Difficult terrain.
- Forced movement.
- Other magical effects applied to creatures in the area.

Aperture does not:

- Create an opening in a wall, object, barrier, or physical structure created by the spell.
- Remove material created by the spell.
- Suppress an effect that enters an excluded space from outside the spell’s original area.
- Alter a spell that does not affect an area.

If the spell has a duration longer than instantaneous, the excluded cubes remain in the same positions relative to the spell’s point of origin for the spell’s duration. If the spell’s area moves, the apertures move with it.

### Combined Theorems

When you use Spatial Warp, you can apply two different Spatial Warp theorems to the same spell by spending a total of 2 Sorcery Points.

The following rules apply:

- You cannot apply the same theorem twice.
- Applying two theorems counts as a single use of the Spatial Warp Metamagic option.
- You cannot apply a different Metamagic option to that spell unless the other option expressly allows itself to be combined with another Metamagic option.
- You need not choose both theorems at the same time if one has a later trigger. For example, you can apply Translation when casting a spell and later apply Ricochet if one of that spell’s initial attacks misses.
- If the trigger for the second theorem never occurs, you do not spend the additional Sorcery Point.

For example, you could:

- Refract a line twice and create an Aperture around an ally.
- Translate the origin of a *fireball* and exclude two adjacent spaces from its area.
- Translate a spell’s area and later redirect one missed spell attack, if the spell contains both an area and an attack that qualifies.
- Create an Aperture in a line while preserving its full length elsewhere.

## Borrowed Moment

At 4th level, you can take an action from a creature’s immediate future and place it in the present.

When you or a willing creature you can see within 60 feet of you ends its turn, you can use your reaction to grant that creature a Borrowed Moment.

The creature immediately takes a special turn before the next creature in the initiative order begins its turn.

During this special turn, the creature:

- Can move up to half its speed.
- Can take one action.
- Cannot take a bonus action.
- Cannot take a reaction.

The action can be used normally. For example, the creature can:

- Take the Attack action, including any additional attacks granted by Extra Attack.
- Cast a spell with a casting time of 1 action.
- Dash, Disengage, Dodge, Help, Hide, Ready, Search, or Use an Object.
- Use a class feature or other ability that requires an action.

### Special-Turn Timing

For purposes of actions, movement, and features usable once on each turn, the Borrowed Moment is a separate turn.

Consequently:

- A creature can use a feature during the Borrowed Moment even if it used that feature during its previous turn, provided the feature can normally be used once on each turn.
- A spell cast as a bonus action during the creature’s previous turn does not prevent it from casting a spell of 1st level or higher with its action during the Borrowed Moment.
- A spell cast during the Borrowed Moment does not restrict spellcasting during the creature’s next normal turn.

The Borrowed Moment does not cause effects that ordinarily occur at the start or end of a turn to occur.

It also does not count as the start or end of a turn for:

- The duration of spells or conditions.
- Regeneration.
- Repeated saving throws.
- Ongoing damage.
- Recharge effects.
- Any other effect tied specifically to the start or end of a creature’s turn.

### Temporal Debt

The borrowed action is taken from the creature’s next normal turn.

During that next normal turn:

- The creature cannot take any action.
- The creature cannot take additional actions granted by spells, Action Surge, *haste*, or similar features.
- The creature cannot take reactions until the end of that turn.
- The creature retains its movement.
- The creature can take a bonus action normally.
- Effects that occur at the start and end of its turn occur normally.

After that turn ends, the Temporal Debt is discharged.

Once you use Borrowed Moment, you cannot use it again until you finish a long rest.

---

# Thackeray A. M. Holmes

# Arcane Annotator

Most wizards understand spellcraft as a completed act. Once the incantation is spoken and the final gesture made, the magic has been written into reality.

An arcane annotator disagrees.

To an annotator, no spell is beyond revision, no attack is free from criticism, and no disastrous outcome is necessarily the final version. Through living ink, awakened spellbooks, and defensive countermagic, the annotator inserts corrections into hostile magic as it unfolds. An attacker’s vision is blotted out. A lethal wound is redacted. An ally escapes through a hastily written footnote. Even a failed *counterspell* can become the beginning of a more limited rebuttal.

For Thackeray, this discipline grows from the defensive application of Silverquill ink magic, his mastery of countermagic, and his bond with Maximilian—the awakened mind of his spellbook and the enduring voice of the Holmes family’s faithful butler.

## Arcane Annotator Features

| Arcane Annotator Level | Features | Annotation Die |
|---:|---|---:|
| 1st | Arcane Continuance, Annotation Dice, Think Ink | d6 |
| 2nd | Ability Score Improvement, Living Marginalia | d6 |
| 3rd | Manifest Margins, Counterargument | d8 |
| 4th | Final Draft: Living Manuscript | d10 |

## Hit Points

**Hit Dice:** 1d6 per arcane annotator level

**Hit Points per Arcane Annotator Level:** 1d6—or 4—plus your Constitution modifier

Because the arcane annotator is a prestige class, you do not receive the maximum value of its Hit Die when you gain its first level.

## Proficiencies

The arcane annotator grants no additional armor, weapon, tool, skill, or saving throw proficiencies.

## Arcane Continuance

Beginning when you take your first level in this prestige class, your annotation research continues the magical progression of your wizard training.

Add your arcane annotator levels to your wizard levels for the following purposes:

- Determining your spell slots under the multiclass spellcasting rules.
- Determining the number of wizard cantrips you know.
- Determining the number of wizard spells you can prepare.
- Determining the maximum level of wizard spell you can prepare.
- Determining the maximum level of wizard spell you can add to your spellbook when you gain a level in this class.
- Determining the number and combined level of spell slots you can recover through Arcane Recovery.

Whenever you gain an arcane annotator level, you add two wizard spells of your choice to your spellbook without paying their normal transcription costs. Each spell must be of a level you could prepare as a wizard whose wizard level equaled your combined wizard and arcane annotator levels.

For example, an 11th-level wizard who gains two arcane annotator levels prepares spells, adds spells to a spellbook, and uses Arcane Recovery as a 13th-level wizard.

This feature does not grant any other wizard class or subclass features. In particular, it does not grant additional Order of Scribes features or improvements to features other than those expressly listed above.

## Annotation Dice

At 1st level, you learn to condense corrective magic into a reservoir of animated arcane notation represented by Annotation Dice.

You have a number of Annotation Dice equal to your proficiency bonus. Your Annotation Die begins as a d6 and changes as shown in the Arcane Annotator Features table.

An Annotation Die is expended when you use it. You regain all expended Annotation Dice when you finish a long rest.

You cannot expend more than one Annotation Die in response to the same triggering attack, spell, saving throw, or damage roll unless a feature expressly states otherwise.

If an Arcane Annotator feature requires a saving throw, the save DC equals your wizard spell save DC.

Arcane Annotator features are magical but are not spells. They cannot be interrupted by *counterspell*, though they are suppressed within an *antimagic field*.

## Think Ink

Also at 1st level, you complete Think Ink, a defensive technique in which animated script lashes across an attacker’s eyes and weapon.

When a creature you can see within 60 feet of you makes an attack roll against you or another creature you can see, but before the attack roll is made, you can use your reaction and expend one Annotation Die.

The attacker must make a Constitution saving throw against your wizard spell save DC.

### Failed Save

On a failed save, animated ink covers the attacker’s eyes. The attacker is blinded until the end of the current turn.

The triggering attack and any other attacks the creature makes during that turn are resolved subject to the blinded condition.

### Successful Save

On a successful save, roll the expended Annotation Die and subtract the number rolled from the triggering attack roll.

A creature immune to the blinded condition automatically succeeds on this saving throw, allowing you to subtract the Annotation Die from its attack roll.

You must use Think Ink before the triggering attack roll is made. Once the attack has been rolled, it is too late to use this feature.

## Ability Score Improvement

When you reach 2nd level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.

As normal, you cannot increase an ability score above 20 using this feature.

If your campaign permits feats, you can forgo this feature to take a feat for which you qualify.

## Living Marginalia

At 2nd level, your annotations become a complete defensive vocabulary capable of revising attacks, movement, saving throws, and damage.

You gain all the annotations described below.

Unless an annotation states otherwise, using it requires your reaction and the expenditure of one Annotation Die. You must be able to see the affected creature or effect, and it must be within 60 feet of you.

### Clarify

When a creature you can see makes a saving throw, you can use your reaction after the d20 is rolled but before the DM determines whether the saving throw succeeds.

Expend and roll one Annotation Die, adding the number rolled to the saving throw.

The creature must use the revised result.

### Emend

When a creature you can see would take acid, cold, fire, lightning, necrotic, radiant, or thunder damage, you can use your reaction before the damage is applied.

Expend and roll one Annotation Die.

The creature gains resistance to the triggering damage, and after that resistance is applied, reduce the remaining damage by the number rolled on the Annotation Die.

If the creature already has resistance to the triggering damage, do not apply resistance a second time. Reduce the damage by the Annotation Die as normal.

### Footnote

When a willing creature you can see is targeted by an attack or spell, or is included in the area of a spell or other effect, you can use your reaction before the attack roll, saving throw, or effect is resolved.

Expend one Annotation Die. The creature immediately moves up to 10 feet to an unoccupied space it can see.

This movement:

- Does not provoke opportunity attacks.
- Does not expend the creature’s movement.
- Can use any movement mode for which the creature has a speed.
- Cannot move the creature through a space it could not ordinarily enter.

If this movement places the creature beyond the reach or range of the triggering attack, the attack misses.

If this movement places the creature entirely outside the triggering area, the creature is unaffected by that instance of the area’s effects.

If the creature remains a legal target or remains within the area, the attack, spell, or effect resolves normally.

Footnote cannot move an unwilling creature.

### Redact

When a creature you can see takes damage, you can use your reaction after the damage is rolled but before it is applied.

Expend and roll one Annotation Die. Reduce the triggering damage by the number rolled plus your Intelligence modifier, to a minimum of 0 damage.

Redact applies after any resistance or vulnerability affecting the damage.

### Strikeout

When an attack hits a creature you can see and would impose one of the following additional effects as part of that attack, you can use your reaction and expend one Annotation Die to negate one such effect:

- The target is knocked prone.
- The target is grappled or restrained.
- The target is pushed, pulled, or otherwise moved.
- One or more of the target’s speeds are reduced.
- The target is prevented from taking reactions.

Strikeout can negate an effect that occurs automatically on a hit or after a failed saving throw caused directly by the attack.

Strikeout does not:

- Reduce or negate the attack’s damage.
- Negate poison, disease, curses, or magical possession.
- Negate a condition other than grappled, prone, or restrained.
- End an effect that was already affecting the creature before the attack.
- Negate a separate spell or feature merely triggered by the attack.

## Manifest Margins

At 3rd level, Maximilian and your Awakened Spellbook become active participants in your annotations.

When you use Think Ink, Living Marginalia, or Counterargument, you can determine the feature’s range, line of sight, and line of effect from either:

- Your space; or
- The space occupied by your Manifest Mind.

You choose the point of origin each time you use the feature.

You can perceive a valid trigger through the senses of your Manifest Mind if it can see or hear that trigger and communicates the information to you through your Manifest Mind feature.

Using your Manifest Mind as the origin of an annotation:

- Does not move you or the mind.
- Does not allow the feature to pass through total cover extending from the chosen origin.
- Does not grant additional reactions.
- Does not allow you to use the same feature more than once in response to the same trigger.

## Counterargument

Also at 3rd level, you learn to revise a hostile spell without attempting to erase it completely.

When a creature you can perceive within 60 feet casts a spell, you can use your reaction and expend one Annotation Die after the spell’s targets and area have been declared but before any attack rolls, saving throws, or damage rolls caused by the spell are resolved.

Choose one of the following counterarguments.

### Exception Clause

Choose one willing creature that is either:

- Within the spell’s area; or
- One of two or more creatures targeted by the spell.

The chosen creature is unaffected by the spell’s initial resolution.

If the spell creates a persistent area or effect, the creature can be affected normally if it enters or remains within that effect on a later turn.

Exception Clause cannot remove the only target of a spell that targets only one creature.

### Favorable Reading

Choose one creature targeted by the spell or included within its area.

Roll the expended Annotation Die.

The creature adds the number rolled to the first saving throw it makes against the spell. It also has resistance to all damage dealt by the spell until the start of the caster’s next turn.

If the spell does not require a saving throw, the creature still gains resistance to its damage.

### Revised Aim

Choose one spell attack roll made as part of the spell’s initial casting.

Roll the expended Annotation Die and subtract the number rolled from that spell attack.

You can choose Revised Aim only before the chosen attack roll is made.

### Counterspell Rebuttal

When you cast *counterspell* and fail the ability check required to interrupt the spell, you can expend one Annotation Die as part of the same reaction used to cast *counterspell*.

You then apply one Counterargument option to the triggering spell.

This does not require another reaction.

The spell is not countered and otherwise resolves normally, subject to your chosen Counterargument.

You cannot apply Counterargument to a spell successfully interrupted by *counterspell*.

## Final Draft: Living Manuscript

At 4th level, you can transform the battlefield into an active extension of your Awakened Spellbook—a living document over which you and Maximilian exercise limited editorial authority.

As a bonus action, you cause spectral pages, animated ink, and shifting annotations to unfold in a 30-foot-radius sphere.

Choose one of the following as the field’s center:

- Yourself; or
- Your Manifest Mind, provided it is currently manifested.

The Living Manuscript lasts for 1 minute and requires no concentration. It moves with its chosen center.

If the Manifest Mind is the field’s center and it disappears, is suppressed, or travels to another plane, the field immediately recenters on you.

Once you use Final Draft, you cannot use it again until you finish a long rest.

### Nature of the Manuscript

The spectral pages and animated writing are translucent and intangible.

They:

- Do not create lightly or heavily obscured areas.
- Do not provide half cover, three-quarters cover, or total cover.
- Do not block movement.
- Do not occupy spaces.
- Do not interfere with attacks, spells, or perception except through the features described below.

The Living Manuscript is unmistakably magical and can be suppressed by an *antimagic field*, but it is not a spell and cannot be ended by *counterspell*.

### Maximilian’s Annotation

Once per round, when the trigger for one of your Living Marginalia annotations occurs within the Living Manuscript, you can apply that annotation:

- Without expending an Annotation Die.
- Without using your reaction.

You regain the ability to apply this free annotation at the start of each of your turns.

You can use only one free annotation between the start of one of your turns and the start of your next turn.

Maximilian’s Annotation can apply only Clarify, Emend, Footnote, Redact, or Strikeout. It cannot apply Think Ink, Counterargument, Counterspell Rebuttal, or Master Revision.

If the chosen annotation would normally require you to roll an Annotation Die, roll your current Annotation Die normally.

### Master Revision

Once before the Living Manuscript ends, you can use your reaction to declare that a harmful outcome within the manuscript was merely a preliminary draft.

Choose one of the following revisions when its trigger occurs.

#### Revised Attack

When an attack roll succeeds against you or a creature within the Living Manuscript, cause that attack to miss instead.

#### Revised Saving Throw

When you or a creature within the Living Manuscript fails a saving throw, cause that saving throw to succeed instead.

#### Revised Target

When a spell targets a creature within the Living Manuscript or includes it within the spell’s area, remove that creature from the spell’s targets or area for that casting.

The spell otherwise resolves normally.

If the spell creates a persistent area, the creature can be affected normally by that area on a later turn.

#### Revised Counterspell

When you fail the ability check required by *counterspell*, cause that ability check to succeed instead.

Invoking this revision is part of the same reaction used to cast *counterspell* and does not require a second reaction.

#### Revised Harm

When an attack, spell, or other effect would deal damage to you or a creature within the Living Manuscript, reduce the damage dealt to that creature by the triggering effect to 0.

Any non-damage effects produced by the triggering attack, spell, or effect occur normally.

Once you use Master Revision, you cannot use it again during that Living Manuscript.

---

# Aicusa Ossya

# Arcano-Botanist

Druids often cultivate relationships with the plants already present in an ecosystem. An arcano-botanist takes a more interventionist approach.

Through magical horticulture, planar theory, and experimental ecology, an arcano-botanist cultivates species that could not survive under ordinary natural conditions. Some require incompatible temperatures. Others feed on magical radiation, grow roots through extradimensional space, or exist only as carefully maintained hybrids of plant, spell, and elemental force.

These specimens are preserved within an extradimensional conservatory: a private greenhouse containing specialized soils, artificial weather systems, seed archives, living cultures, and controlled magical habitats. The conservatory is not a place the arcano-botanist physically visits. It is a cultivated extension of the druid’s magic, accessible through temporary apertures that allow mature specimens to be retrieved and deployed directly into the field.

For Aicusa, this discipline combines advanced arcane herbology, Witherbloom growth theory, scientific experimentation, and the adaptive transformations of a Moon Druid. Her plants are not merely tools she carries. They are a living catalogue of solutions.

## Arcano-Botanist Features

| Arcano-Botanist Level | Features |
|---:|---|
| 1st | Druidic Continuance, Extradimensional Conservatory, Field Specimens |
| 2nd | Ability Score Improvement, Rare Specimens |
| 3rd | Symbiotic Grafting |
| 4th | Conservatory Unbound |

## Hit Points

**Hit Dice:** 1d8 per arcano-botanist level

**Hit Points per Arcano-Botanist Level:** 1d8—or 5—plus your Constitution modifier

Because the arcano-botanist is a prestige class, you do not receive the maximum value of its Hit Die when you gain its first level.

## Proficiencies

The arcano-botanist grants no additional armor, weapon, tool, skill, or saving throw proficiencies.

## Druidic Continuance

Beginning when you take your first level in this prestige class, your arcano-botanical research continues the magical and transformative progression of your druid training.

Add your arcano-botanist levels to your druid levels for the following purposes:

- Determining your spell slots under the multiclass spellcasting rules.
- Determining the number of druid cantrips you know.
- Determining the number of druid spells you can prepare.
- Determining the maximum level of druid spell you can prepare and cast.
- Determining the duration of your Wild Shape.
- Determining the maximum challenge rating of a beast form available through Circle Forms.
- Determining any movement restrictions imposed by Circle Forms.

Your combined druid and arcano-botanist levels also count as your druid level when using Combat Wild Shape, Primal Strike, and Elemental Wild Shape.

This feature does not grant any other druid or Circle of the Moon features. In particular, it does not grant Thousand Forms, Beast Spells, Archdruid, additional uses of Wild Shape, or other features not expressly listed above.

## Extradimensional Conservatory

At 1st level, you establish a private extradimensional greenhouse containing magical plants, seed cultures, spores, cuttings, grafts, and carefully maintained habitats.

The conservatory is the source of your Field Specimens. It is not a traversable demiplane, and creatures cannot enter or occupy it.

### Prepared Specimens

At the end of each long rest, choose a number of different specimens from the Arcano-Botanist specimen list equal to your Intelligence modifier, with a minimum of two.

The chosen specimens are prepared until the end of your next long rest.

Preparing a specimen represents cultivating enough healthy stock within your conservatory to deploy that species during the coming day. It does not create a discrete physical item.

You can deploy a prepared specimen multiple times, provided you have sufficient Harvests to do so.

### Harvests

You have a number of Harvests equal to your proficiency bonus.

You expend Harvests to deploy prepared specimens:

- A basic specimen costs one Harvest.
- A rare specimen costs two Harvests.

You regain all expended Harvests when you finish a long rest.

### Arcano-Botanical Magic

Your specimens use your druid spell save DC and druid spell attack modifier when they require a saving throw or attack roll.

Deploying a specimen is magical but is not casting a spell. It therefore:

- Does not require verbal, somatic, or material components.
- Cannot be interrupted by *counterspell*.
- Does not prevent you from casting a bonus-action spell or another spell during the same turn.
- Is suppressed within an *antimagic field*.

Unless a specimen states otherwise, you must be able to see its target or point of emergence.

### Retrieving a Specimen

Retrieving a specimen from your conservatory is part of the action, bonus action, or reaction used to deploy it.

You do not require:

- A free hand.
- A physical container.
- Speech.
- The ability to manipulate an object.

You can therefore deploy specimens while Wild Shaped, provided you can perceive the target or point required by the specimen.

A retrieved specimen exists only as part of its deployment. It cannot be handed to another creature, stored outside the conservatory, sold, stockpiled, or activated by another creature.

### Persistent Specimens

Some specimens create plants that remain for a stated duration.

Unless a specimen states otherwise, a persistent specimen is a magical object with the following statistics:

- **Armor Class:** 15
- **Hit Points:** Five times your proficiency bonus
- **Damage Immunities:** Poison and psychic
- **Condition Immunities:** All conditions

A persistent specimen automatically fails Strength and Dexterity saving throws.

When a persistent specimen is reduced to 0 hit points, its effect ends and the plant withers.

A persistent specimen also withers when its duration ends, when you dismiss it without using an action, or when you finish a long rest.

## Field Specimens

At 1st level, the following basic specimens become available for preparation.

### Binding Bur

**Activation:** 1 action  
**Range:** 60 feet  
**Cost:** 1 Harvest

Choose one Large or smaller creature you can see within range. A hooked seed casing bursts beneath it and grows into constricting roots.

The creature must succeed on a Strength saving throw or become restrained until the end of your next turn.

A creature that is Huge or larger is unaffected.

### Blinkroot

**Activation:** 1 bonus action  
**Range:** 30 feet  
**Cost:** 1 Harvest

Choose yourself or one willing creature you can see within range.

Roots briefly close around the creature and draw it through the conservatory. The creature teleports to an unoccupied space you can see within 30 feet of its original position.

The destination must be able to support the creature, and the creature must be able to fit within it.

### Ironbark Cutting

**Activation:** 1 reaction, taken when you or a creature you can see within 30 feet takes bludgeoning, piercing, or slashing damage  
**Cost:** 1 Harvest

Protective bark spreads across the creature immediately before the damage is applied.

Roll 2d8 and add your Wisdom modifier. Reduce the triggering damage by the total rolled, to a minimum of 0 damage.

Apply any resistance or vulnerability before reducing the damage through this specimen.

### Lantern Lily

**Activation:** 1 bonus action  
**Range:** 30 feet  
**Duration:** 10 minutes  
**Cost:** 1 Harvest

A luminous flower emerges in an unoccupied space you can see within range.

The Lantern Lily sheds bright light in a 30-foot radius and dim light for an additional 30 feet.

Within its bright light:

- Invisible creatures and objects gain no benefit from being invisible.
- Creatures have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to identify visual illusions, disguises, or magically altered appearances.

The Lantern Lily is a persistent specimen.

### Mending Moss

**Activation:** 1 bonus action  
**Range:** 30 feet  
**Cost:** 1 Harvest

Choose yourself or one creature you can see within range. Restorative moss spreads briefly across the creature before dissolving.

The creature regains hit points equal to 2d8 plus your Wisdom modifier.

This specimen has no effect on Constructs or Undead.

### Mistcap Colony

**Activation:** 1 action  
**Range:** 60 feet  
**Duration:** 1 minute  
**Cost:** 1 Harvest

A colony of pale mushrooms emerges at a point you can see within range and releases dense spores.

A 15-foot-radius sphere centered on the colony becomes heavily obscured.

The cloud spreads around corners. A moderate or stronger wind disperses the spores and ends the effect.

The Mistcap Colony is a persistent specimen.

### Springvine

**Activation:** 1 reaction, taken when a willing creature you can see within 60 feet falls, would be knocked prone, or would be moved against its will  
**Cost:** 1 Harvest

A powerful vine erupts from an extradimensional aperture and catches the creature.

Resolve the effect according to the trigger:

- **Falling:** Move the creature to an unoccupied space you can see within 15 feet of its current position. The creature takes no falling damage from the triggering fall.
- **Knocked Prone:** The creature is not knocked prone.
- **Forced Movement:** Reduce the triggering forced movement to 0 feet.

Springvine cannot prevent movement caused by teleportation or planar travel.

### Thornburst Pod

**Activation:** 1 action  
**Range:** 60 feet  
**Cost:** 1 Harvest

Choose a point you can see within range. A bulbous pod appears and immediately detonates into a storm of magically hardened thorns.

Each creature in a 15-foot-radius sphere centered on that point must make a Dexterity saving throw.

A creature takes 5d8 piercing damage on a failed save, or half as much damage on a successful one.

The thorns disappear immediately after the damage is resolved.

## Ability Score Improvement

When you reach 2nd level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1.

As normal, you cannot increase an ability score above 20 using this feature.

If your campaign permits feats, you can forgo this feature to take a feat for which you qualify.

## Rare Specimens

Also at 2nd level, you cultivate more complex organisms requiring substantially greater resources to deploy.

The following rare specimens are added to the specimens available for preparation.

Each rare specimen costs two Harvests to deploy.

### Bastion Tree

**Activation:** 1 action  
**Range:** 60 feet  
**Duration:** 1 minute  
**Cost:** 2 Harvests

A broad-trunked tree rapidly grows from an unoccupied 5-foot space on a solid surface within range.

The tree occupies its space and is a persistent specimen.

Its roots and canopy create a defensive area extending 10 feet from it. A creature within that area has half cover against ranged attacks originating outside the area.

The tree is sturdy enough to be climbed. Its branches can support a number of Medium creatures equal to your proficiency bonus, or an equivalent number of smaller or larger creatures as determined by the DM.

When the tree withers, a creature supported by it descends harmlessly to the nearest unoccupied space beneath it.

### Gatewood Pair

**Activation:** 1 action  
**Range:** 60 feet  
**Duration:** 1 minute  
**Cost:** 2 Harvests

Choose two unoccupied spaces on solid surfaces that you can see within range. The spaces must be no more than 60 feet apart.

A root arch appears in each space. Both arches are persistent specimens, and they share a single pool of hit points. Damage dealt to either arch is dealt to that shared pool.

You and creatures of your choice can use the arches.

A qualifying creature adjacent to one arch can spend 5 feet of movement to enter it and teleport to an unoccupied space adjacent to the other arch.

A creature can use the Gatewood Pair only once during a turn.

The arches cannot transport objects that are not being worn or carried, and they cannot cross planar boundaries or magical barriers that prevent teleportation.

### Nurseflower

**Activation:** 1 action  
**Range:** 30 feet  
**Duration:** 1 minute  
**Cost:** 2 Harvests

A tall, many-petaled flower emerges in an unoccupied space you can see within range.

The Nurseflower is a persistent specimen and contains three restorative pulses.

While you are within 60 feet of the Nurseflower, you can use a bonus action to expend one pulse and choose one creature you can see within 30 feet of it.

The chosen creature regains hit points equal to 2d8 plus your Wisdom modifier.

The Nurseflower withers when it expends its final pulse.

Its healing has no effect on Constructs or Undead.

### Strangler Fig

**Activation:** 1 action  
**Range:** 60 feet  
**Duration:** 1 minute  
**Cost:** 2 Harvests

Choose one Large or smaller creature you can see within range.

A strangler fig erupts around the target. The creature must make a Strength saving throw.

On a failed save, the creature is restrained for the duration. While restrained in this way:

- Its speed cannot be increased.
- It cannot teleport.
- It cannot travel to another plane.
- It cannot be moved against its will.

At the end of each of its turns, the creature can repeat the saving throw, ending the effect on itself on a success.

The restrained creature or another creature within reach can also use an action to make a Strength (Athletics) check against your druid spell save DC, ending the effect on a success.

A creature that is Huge or larger automatically succeeds on its initial saving throw.

The strangler fig is a persistent specimen occupying the target’s space. Destroying it ends the effect.

## Symbiotic Grafting

At 3rd level, you learn to merge cultivated organisms from your conservatory with the body of a Wild Shape form.

Whenever you assume a form using Wild Shape, choose one Symbiotic Graft from the options below.

The graft:

- Appears as a visible botanical alteration to the form.
- Lasts until that use of Wild Shape ends.
- Requires no Harvest.
- Functions in Beast and Elemental Wild Shape forms.
- Is magical but is not a spell.

You cannot select the same graft more than once.

### Concentration Safeguard

Once during each use of Wild Shape, when you fail a Constitution saving throw to maintain concentration on a spell, you can cause one active Symbiotic Graft to wither.

That graft immediately ends, and you succeed on the saving throw instead.

You cannot use this benefit if you have no active graft.

### Graspvine Symbiote

Vines extend from the form’s limbs, jaws, horns, or natural weapons.

The reach of the form’s melee attacks increases by 5 feet.

Once during each of your turns, when you hit a Large or smaller creature with a melee attack, you can pull that creature up to 5 feet directly toward you.

### Ironbark Symbiote

Dense bark reinforces the form’s hide, scales, feathers, or elemental structure.

The first time you take bludgeoning, piercing, or slashing damage during a round, reduce that damage by your proficiency bonus.

This reduction occurs after applying resistance or vulnerability.

### Mending Colony

Restorative moss, lichen, and fungal cultures grow across the form.

At the start of each of your turns, if the form has fewer than half its hit points remaining, you gain temporary hit points equal to your proficiency bonus.

These temporary hit points disappear when the Wild Shape ends.

### Puffcap Mantle

Spore-filled growths cover the form.

Once during each turn when a creature hits you with a melee attack, you can force that creature to make a Constitution saving throw.

On a failed save, the creature is poisoned until the start of its next turn.

A creature that does not need to breathe has advantage on this saving throw.

### Wayroot Network

Extradimensional roots extend beneath the form as it moves.

Once during each of your turns, after you move at least 10 feet, you can teleport up to 10 feet to an unoccupied space you can see.

This teleportation does not require an action and does not provoke opportunity attacks.

## Conservatory Unbound

At 4th level, you can temporarily remove the boundary between your extradimensional greenhouse and the surrounding world.

As a bonus action, choose a point you can see within 60 feet. A 30-foot-radius sphere centered on that point becomes an extension of your conservatory for 1 minute.

The sphere is filled with luminous roots, impossible flowers, suspended spores, translucent greenhouse structures, and plants adapted to dozens of incompatible climates.

The feature requires no concentration.

Once you use Conservatory Unbound, you cannot use it again until you finish a long rest.

### Unbound Terrain

Surfaces within the conservatory become overgrown with roots, moss, and shifting plant life.

The ground within the area is difficult terrain for hostile creatures.

You and creatures of your choice ignore difficult terrain created by Conservatory Unbound.

The vegetation does not create obscurement or provide cover unless a specimen deployed within it expressly does so.

### Field Emergence

When you deploy a prepared specimen while you are within 60 feet of Conservatory Unbound, you can cause that specimen to emerge from any point within the area that you can see.

Determine the specimen’s range, target, and area from its point of emergence rather than from your own space.

You still use the specimen’s normal activation time and must satisfy its other requirements.

### Abundant Harvest

Once per round, you can deploy one prepared basic specimen whose target or point of emergence is within Conservatory Unbound without expending a Harvest.

You regain the ability to do so at the start of each of your turns.

Each prepared basic specimen can be deployed without expending a Harvest only once during a particular use of Conservatory Unbound.

You can continue to expend Harvests to deploy any prepared specimen normally, including a basic specimen that has already benefited from Abundant Harvest.

Rare specimens always require their normal Harvest cost.

### Complete Symbiosis

While Conservatory Unbound lasts, you can maintain two different Symbiotic Grafts simultaneously during Wild Shape.

If you are already Wild Shaped when you activate Conservatory Unbound, immediately choose a second graft.

If you assume Wild Shape while the feature lasts, choose two different grafts instead of one.

When Conservatory Unbound ends, choose one active graft to remain. The other immediately withers.

Using Concentration Safeguard still allows you to preserve concentration only once during a particular use of Wild Shape, even if you have two active grafts.

---

# End of Player Material
