export interface GuideSection {
  heading: string
  content: string
}

export interface Guide {
  id: string
  title: string
  titleShort: string
  tag: string
  image: string
  intro: string
  sections: GuideSection[]
  tips: string[]
}

export const bossGuides: Guide[] = [
  {
    id: 'kailok', title: 'Kailok the Hornsplitter — Complete Boss Guide', titleShort: 'Kailok the Hornsplitter', tag: 'CHAPTER 2', image: '/assets/guide-1.jpg',
    intro: 'Kailok is the first true boss you face — the Goblin King. His three-phase fight tests your fundamentals. Master his patterns to claim the Sword of the Lord.',
    sections: [
      { heading: 'Boss Overview', content: 'Kailok wields a massive battle axe and summons minions. The arena has pillars you can use to your advantage. Defeating him rewards the Sword of the Lord with Wind Slash.' },
      { heading: 'Phase 1: Melee Rampage', content: 'Kailok uses a triple axe combo: two horizontal sweeps followed by a ground slam shockwave. Roll sideways when he raises his axe — never roll backward. The shockwave range is larger than it looks. Maintain medium distance. You can safely Parry this phase — time your block as the axe descends for a large stagger window. Watch for Flame Surge: he jumps back and sends a flame wave along the ground. Chain-roll to avoid it.' },
      { heading: 'Phase 2: Minion Summon', content: 'At 60% HP, Kailok roars and summons 4-6 goblin adds. Kill the adds first! Use Turning Slash for AoE clear. Killing adds briefly stuns Kailok — use this window to deal damage.' },
      { heading: 'Phase 3: Enrage Mode', content: 'Below 30% HP, Kailok enrages — attack speed +50%, all attacks gain fire. Use a "hit and run" strategy: roll in, light attack 1-2 times, roll out. His slams now leave fire patches lasting ~5 seconds. Watch your footing.' },
      { heading: 'Recommended Gear', content: '- Weapon: One-handed sword + shield (buy Kite Shield from Hernand blacksmith)/n- Skills: Keen Senses Lv2, Turning Slash Lv1/n- Food: 15+ Grilled Meat, 10+ Clear Soup/n- Items: 2-3 Palmar Pills' },
    ],
    tips: ['Pillars block his charge attacks — use terrain wisely', 'His back is the safest damage spot — circle behind', 'Red-glowing attacks cannot be parried — must dodge', 'This boss tests patience and rhythm, not burst DPS', 'Defeating him rewards Sword of the Lord with Wind Slash'],
  },
  {
    id: 'reed-devil', title: 'Reed Devil — All 3 Phases Explained', titleShort: 'Reed Devil', tag: 'CHAPTER 3', image: '/assets/guide-2.jpg',
    intro: 'The Reed Devil is one of the most challenging bosses, a corrupted swordmaster with three distinct phases. Each phase demands a different approach.',
    sections: [
      { heading: 'Boss Overview', content: 'Once a legendary swordsman, corrupted by dark forces. He has extreme agility and varied attacks. Fight takes place on a wooden platform in the reed fields. You can learn Aerial Roll from him via Watch and Learn.' },
      { heading: 'Phase 1: Swordsman Form', content: 'The Reed Devil uses dual blades for rapid combos. His signature move is the Cross Slash — two intersecting sword waves. When you see him sheathe his blades, chain-roll sideways twice. Defend primarily and counter after his combo ends. Parry works well here as his attacks have clear tells.' },
      { heading: 'Phase 2: Clone Technique', content: 'At 50% HP, he splits into 3 copies. The real one briefly glows before attacking — watch carefully! Clones disappear in one hit, but do not waste time chasing them. Use Blinding Flash to interrupt clone summoning. The flash stuns him — unload your damage. Focus (time slow) is extremely effective here.' },
      { heading: 'Phase 3: Demon Form', content: 'The Reed Devil sheds his human form, becoming a true demon. Attack range increases massively, and he fires tracking dark orbs. Keep your distance. His ultimate "Death Cyclone" spins for ~8 seconds — stay away and throw projectiles. After the cyclone ends, he has a 5-second full stagger — your best damage window.' },
    ],
    tips: ['Learn Focused Force Palm to destroy his red totems', 'Bring anti-dark food to reduce shadow damage', 'Use Focus (time slow) to identify the real clone', '5-second full stagger after his ultimate — prepare your best combo', 'Learn Aerial Roll via Watch and Learn'],
  },
  {
    id: 'matthias', title: 'Matthias — Parry Tutorial Boss', titleShort: 'Matthias', tag: 'CHAPTER 1', image: '/assets/guide-1.jpg',
    intro: 'Matthias, the knight captain of Hernand, teaches you parrying and counter-attacking. He is also the easiest boss to "cheese".',
    sections: [
      { heading: 'Fight Overview', content: 'Matthias uses a standard sword-and-shield combo with predictable rhythm. Each attack has a clear tell, making him perfect for learning Parry. You can learn Pump Kick from him via Watch and Learn.' },
      { heading: 'Attack Patterns', content: 'Move 1: Thrust — pulls sword back then lunges forward. Roll sideways when you see the pullback./nMove 2: Rising Slash — upward swing with slight windup. Parry as the sword swings./nMove 3: Shield Bash — shield charge that causes stun. Do not block head-on — dodge./nMove 4: Spinning Slash — sword raised overhead, spins once. Roll back twice when you see the overhead raise.' },
      { heading: 'Cheese Method', content: 'Pump Kick makes this trivial. Learn Pump Kick via Watch and Learn, then repeatedly kick him toward the arena edges. He constantly hits houses, pillars, and bulletin boards and cannot fight back. This is an intentional built-in "tutorial cheese".' },
      { heading: 'Normal Strategy', content: 'The best boss for practicing Parry. Successful Parry shows a green flash and causes a large stagger. After each Parry, land 2-3 light attacks then retreat. Repeat until he falls. Do not get greedy — be patient.' },
    ],
    tips: ['Do not worry about failing — this is a tutorial boss', 'Get Keen Senses to Lv2 before fighting him', 'Shield bash has a long recovery — safest damage window', 'Pump Kick can easily "kick" him off the arena edge', 'If struggling, use pure dodge (no Parry, only rolls)'],
  },
  {
    id: 'kearush', title: 'Kearush the Slayer — Three Health Bar Ape', titleShort: 'Kearush the Slayer', tag: 'CHAPTER 5', image: '/assets/guide-1.jpg',
    intro: 'Kearush is the Chapter 5 boss — a giant ape with three health bars. He hits fast and hard, feeling like a late-game boss dropped into the mid-game.',
    sections: [
      { heading: 'Boss Overview', content: 'Kearush has three health bars / three phases, each more brutal than the last. His attacks are devastating, with multiple large AoE moves. The good news: he is extremely weak to fire!' },
      { heading: 'Attack Patterns', content: 'Five-hit Combo: Kearush has a five-hit combo string. Keep rolling until he stops, then attack quickly./nWall Jump Slam: He jumps to the walls, and ground markers appear. Leave the marked area immediately! Run to the room sides to block his angle./nBlue Aura: A blue aura (invincibility state) appears before his next combo. Do not attack during this.' },
      { heading: 'Fire Weakness', content: 'Kearush is EXTREMELY weak to fire! If you have a fire-enchanted weapon (e.g., Fire Spear from random bandit drops), his fur catches fire, causing several seconds of stun for free damage. Bring fire-enchanted food or items to trigger this weakness.' },
      { heading: 'Combat Strategy', content: '1. Be patient, do not get greedy/n2. Watch his tells and dodge/n3. Use room sides to avoid wall jump slams/n4. Prioritize fire weapons if available/n5. Stockpile food — this is a long fight/n6. Phase 3 attacks faster — stay calm' },
    ],
    tips: ['EXTREMELY weak to fire! Fire weapons are the best counter', 'Three health bars means a long fight — bring lots of food', 'Wall jump slam: run to room sides to avoid', 'Blue aura = invincible state, do not attack', 'His combo recovery is short — only 2-3 hits then retreat'],
  },
  {
    id: 'crowcaller', title: 'Crowcaller — Cemetery Three-Phase Boss', titleShort: 'Crowcaller', tag: 'CHAPTER 5', image: '/assets/guide-2.jpg',
    intro: 'You fight the Crowcaller twice in Chapter 5. The first cemetery fight is a prelude; the real battle comes after solving the Spire of Soaring and Crescent Skybridge puzzles.',
    sections: [
      { heading: 'Boss Characteristics', content: 'The Crowcaller darts around the arena with extreme speed. His patterns blend Kailok and Reed Devil styles. You can learn Aerial Roll from him via Watch and Learn.' },
      { heading: 'Phase 1', content: 'The Crowcaller\'s attacks can be parried and countered. Stay defensive and look for openings after his combos end.' },
      { heading: 'Most Dangerous Move: Dive Bomb', content: 'When he leaps high, he does a side-dodge then dive-bombs your position. This is his most dangerous attack!/n- Phase 1: 1 side dodge then dive/n- Phase 2: 2 side dodges then dive/n- Phase 3: 3 side dodges then dive/nWhen he jumps high, prepare to roll based on the current phase count.' },
      { heading: 'Combat Tips', content: 'Similar rhythm to Kailok but faster. Maintain medium distance and wait for his recovery windows. Focus skill helps you Parry his rapid attacks.' },
    ],
    tips: ['Dive bomb is the most dangerous move — watch side-dodge count', 'Side-dodge count matches the phase number (1/2/3)', 'Learn Aerial Roll via Watch and Learn', 'Focus skill helps against his high-speed attacks', 'Recovery windows are very short — stay patient'],
  },
  {
    id: 'awakened-ludvig', title: 'Awakened Ludvig — Lightning Mage', titleShort: 'Awakened Ludvig', tag: 'CHAPTER 7', image: '/assets/guide-3.jpg',
    intro: 'Ludvig is the first boss of Chapter 7, fought in the Pailune hall. Two phases, with the second being a lightning-empowered awakened form.',
    sections: [
      { heading: 'Boss Overview', content: 'Ludvig teleports around the room, then unleashes relentless melee combos. His combo: punch Kliff a few times, uppercut, then an electric explosion spreading across the entire room.' },
      { heading: 'Attack Patterns', content: 'Teleport Strike: Teleports near you then melee combo. Listen for the teleport sound and prepare to roll./nCombo String: Punch → uppercut → electric blast. After the first two hits, create distance to avoid the explosion./nLightning Skills: Phase 2 adds lightning to all attacks, applying a shock debuff on hit.' },
      { heading: 'Cheese Spot', content: 'Walk outside the fight room — Ludvig follows but his attack set becomes very limited outdoors. Hit him a few times, he walks back inside, then lure him out again. Repeat. You can also use building walls to reset the fight timer.' },
      { heading: 'Normal Strategy', content: 'Dodge his moves and only attack during clear openings. You will need to eat food frequently, especially if caught in his combo. Focus Lv2 helps you dodge his teleport attacks.' },
    ],
    tips: ['Walking outside "cheeses" the fight significantly', 'Teleport attacks have audio cues — listen and prepare to roll', 'Phase 2: do not stand in puddles — lightning conducts through water', 'His combo deals extreme damage — eat food immediately if caught', 'Defeating him rewards the Ignir Sword, the best one-handed sword in the game'],
  },
  {
    id: 'lava-myurdin', title: 'Lava Myurdin — Bear Power Meets Fire', titleShort: 'Lava Myurdin', tag: 'CHAPTER 7', image: '/assets/news-2.jpg',
    intro: 'You finally get a rematch with the Myurdin who defeated you in the prologue! Two phases, with Phase 2 gaining fire powers.',
    sections: [
      { heading: 'Boss Overview', content: 'Myurdin channels bear spirit — he hunches over and moves erratically while slashing wildly. Reading his movements is key, and dodging is essential.' },
      { heading: 'Phase 1: Bear Spirit', content: 'Myurdin uses bear form for fast claw strikes and charges. His attacks have short tells — stay alert. Parry works well against his heavy strikes.' },
      { heading: 'Phase 2: Fire Empowerment', content: 'Phase 2 adds fire element. Continue the dodge-and-counter strategy, but fire attacks apply a burn debuff. Getting hit consecutively causes Kliff to lose control for several seconds as he tries to extinguish the flames. Keep distance and look for openings.' },
    ],
    tips: ['Do not get hit consecutively — burn debuff is deadly', 'Bear form charges can be parried', 'Phase 2: prioritize dodging fire attacks', 'Keep moving, do not stay in one place', 'Bring fire-resistant food to reduce fire damage'],
  },
  {
    id: 'golden-star', title: 'Golden Star — Mechanical Dragon Epic Fight', titleShort: 'Golden Star', tag: 'CHAPTER 11', image: '/assets/guide-4.jpg',
    intro: 'Golden Star is a massive mechanical armored dragon. One of the most epic boss fights in the game. Defeating her unlocks the Blackstar Dragon mount!',
    sections: [
      { heading: 'Boss Skills', content: 'Fire Breath: Spews flame stream at your position. Keep lateral movement./nVolcano Burst: Launches multiple fireballs onto the battlefield. Watch ground markers and dodge./nFire Tornado: Creates a slowly pulling fiery vortex. Run against the pull to escape./nGolem Summon: Flies high, drops multiple golem adds. Clear adds quickly.' },
      { heading: 'Weakness Exposure Mechanic', content: 'Spear devices on both arena sides can be picked up and thrown at Golden Star. Spears deal significant damage and build her stagger bar. Once stagger is full, she becomes immobile for several seconds — your best window for maximum melee damage.' },
      { heading: 'Combat Strategy', content: '1. Pick up and throw spears to build stagger/n2. When stagger triggers, unload your best damage/n3. Dodge fire tornado and breath attacks/n4. Clear golems quickly during add phase/n5. Be patient — this is an endurance fight' },
      { heading: 'Rewards', content: 'Defeating Golden Star unlocks the Blackstar Dragon mount — the most powerful mount in the game! You also get materials to craft the Abyss Dragon Armor.' },
    ],
    tips: ['Spears are key to building stagger — do not waste them', 'Fire tornado pulls you in — run against the pull', 'Stagger window is short — have your best combo ready', 'Clear golems quickly during add phase', 'Defeating her unlocks the Blackstar Dragon mount!'],
  },
  {
    id: 'storm-crusher', title: 'Storm Crusher — Steam Tank Boss', titleShort: 'Storm Crusher', tag: 'CHAPTER 11', image: '/assets/guide-3.jpg',
    intro: 'The Storm Crusher is one of three bosses in Chapter 11\'s Brave New World section, located at the Aeronautical Research Base. It is a steam-powered tank.',
    sections: [
      { heading: 'Boss Characteristics', content: 'At close range it charges at you for extreme damage that can one-shot. At long range it fires homing flame missiles that Nature\'s Snare can block.' },
      { heading: 'Weakness Exposure Mechanic', content: 'Continuously attacking the top turret stuns it and blows open the hatch, exposing the weakness. You can then climb on top and attack the weakness for massive damage.' },
      { heading: 'Cheese Spot', content: 'A set of stairs on the left side of the arena — standing there causes homing missiles to hit the ground. Peek out to attack, then retreat to safety. Use Focused Shot and rapid fire from there.' },
      { heading: 'Quick Clear Tip', content: 'Although each fortress has hundreds of enemies and an enemy percentage bar, you only need to defeat the boss to get the quest item. You do not need to clear all adds.' },
    ],
    tips: ['Attack the top turret to expose weakness', 'Left-side stairs are a safe cheese spot', 'Only need to defeat the boss, not all enemies', 'Nature\'s Snare can block tracking missiles', 'Its charge attack can one-shot you — watch out'],
  },
  {
    id: 'master-du', title: 'Master Du — Yoda-Style Trial', titleShort: 'Master Du', tag: 'CHAPTER 9', image: '/assets/guide-6.jpg',
    intro: 'Master Du is a Yoda-like figure, but you play as Palpatine. The fight takes place in a room smaller than the Coruscant Senate Chamber.',
    sections: [
      { heading: 'Boss Characteristics', content: 'Master Du teleports and jumps between stone pillars, then dive-bombs when you least expect it. Due to awkward camera angles, it is hard to track his position. Focus helps you dodge before he crashes down.' },
      { heading: 'Laser Attacks', content: 'He periodically shoots laser bolts that can one-shot Kliff if your HP is low. Phase 2 fires even more beams. Keep moving and use pillars as cover.' },
      { heading: 'Environmental Factor', content: 'Stone pillars in the room push you back and deal damage. But you can try to make the Boss hit the pillars! Using his dive to crash into pillars causes stagger.' },
      { heading: 'Watch and Learn', content: 'Learn Blinding Flash Finisher from him — one of the strongest attacks in the game.' },
    ],
    tips: ['Use Focus to predict his dive position', 'Pillars are both a threat and a tool against him', 'Keep moving during laser attacks', 'Phase 2 doubles laser count — even more dangerous', 'Learn Blinding Flash Finisher via Watch and Learn'],
  },
]

export const combatGuides: Guide[] = [
  {
    id: 'combat-basics', title: 'Complete Combat System Guide — From Beginner to Master', titleShort: 'Combat System Guide', tag: 'COMBAT', image: '/assets/guide-3.jpg',
    intro: 'Crimson Desert\'s combat system is the core of the game. It is not a traditional RPG level-scaling system, but a physics-driven combat system emphasizing skill, timing, and strategy.',
    sections: [
      { heading: 'Basic Controls', content: 'Light Attack (left click): Fast, low damage, can combo. Holding the light attack button auto-combos, and the combo speed is FASTER than manual clicking!/nHeavy Attack (right click): Slow, high damage, has hyper-armor. Can be charged for more damage./nBlock (Ctrl/LB): Raises weapon/shield to defend. Sustained blocking consumes stamina./nDodge (Space/A): Consumes stamina to evade. I-frames are very short — timing must be precise.' },
      { heading: 'Parry', content: 'The most important combat skill! Press block just as an enemy attack lands — a green flash indicates success. After a successful Parry: enemy gets large stagger, your stamina and spirit fully recover, next counter-attack deals +250% damage./nPractice tip: Fight Matthias repeatedly until you reach 70%+ success rate.' },
      { heading: 'Perfect Dodge', content: 'Dodge exactly as an enemy attack lands — blue afterimage appears. After a perfect dodge, your counter deals bonus damage. Note: Red-glowing attacks (boss ultimates) CANNOT be parried — must be dodged. Keen Senses Lv2 unlocks this.' },
      { heading: 'Stamina Management', content: 'Stamina is the most critical combat resource. Attacking, blocking, dodging, and sprinting all consume stamina. When stamina is depleted, you cannot act at all!/nManagement tips:/n- Do not attack until stamina is empty — keep 30% in reserve/n- Successful Parry instantly recovers all stamina/n- Stamina cap can be increased via the blue skill tree branch/n- Stamina food temporarily boosts recovery speed' },
      { heading: 'Weapon System Overview', content: 'The game has 11 weapon types. You can equip 3 and freely swap mid-combat:/n/nS+ Tier — Bare Hands (knuckles): Universal combo connector for all weapons. Blinding Flash Finisher is one of the strongest attacks/n/nS Tier — Longsword: Most balanced, fits all scenarios/nS Tier — Lance: Attack and defense combined, excellent range/nS Tier — Pistol: Aerial combo powerhouse/nS Tier — Bow: Safe ranged damage/n/nA Tier — Sword: Beginner-friendly, versatile/nA Tier — Rapier: Extremely fast, technical weapon/n/nB Tier — Axe: Highest single-hit damage but heavy animation lock penalty/nB Tier — Hammer: Crowd control + combo starter/nB Tier — Hand Cannon: Only AoE firearm/nB Tier — Rifle: High single-target damage, very slow reload/n/nC Tier — Mace: Currently the weakest option' },
      { heading: 'Element System (Axiom Bracelet)', content: 'The Axiom Bracelet obtained later can enchant weapons with three elements:/nFire: AoE damage, ignites enemies for burn DoT. Counters furry bosses like Kearush/nIce: Slows enemies, stacks to freeze/nLightning: Pierces armor, triggers Overload chain damage/nElements can be swapped anytime — choose the counter element for each enemy type.' },
    ],
    tips: ['Keen Senses Lv2 is a must — unlocks perfect dodge', 'Do not over-extend combos — 3-4 hits then retreat', 'Killing an enemy briefly staggers nearby enemies — chain kills', 'Force Palm: Focused can destroy magic walls — useful for exploration', 'Bare Hands (knuckles) makes every other weapon better'],
  },
  {
    id: 'weapons-tier', title: 'All Weapons Ranked — S+ to C Tier', titleShort: 'All Weapons Ranked', tag: 'WEAPONS', image: '/assets/guide-3.jpg',
    intro: 'Choosing the right weapon completely changes your experience. This guide ranks all weapons from S+ to C tier based on damage, speed, versatility, and ease of use.',
    sections: [
      { heading: 'S+ Tier: Bare Hands (Knuckles)', content: 'Bare hands are rated S+ not as a standalone style, but as a universal connector that enhances ALL other weapons. You can use them to extend combos, land finishers, and transition between weapon swaps. Blinding Flash Finisher is one of the strongest attacks in the game, knocking back all nearby enemies. The range limitation does not apply here since the design philosophy favors combo architecture over raw range.' },
      { heading: 'S Tier: Longsword', content: 'Damage: Very High | Speed: Medium | Difficulty: Easy/nThe most versatile and powerful dedicated weapon. Excellent for strong players and group fights. How to get: South of Hernand castle at the crossroads — a longsword is stuck in the ground, free to grab (Balton Longsword).' },
      { heading: 'S Tier: Lance', content: 'Damage: Medium | Speed: Medium | Difficulty: Easy/nAttack and defense combined, length provides excellent safety distance. Kliff performs excellently with the lance. Warspike Spear (14 ATK) is an excellent early option.' },
      { heading: 'S Tier: Pistol', content: 'Damage: Medium | Speed: Fast | Difficulty: Medium/nAerial combo powerhouse, extremely effective with mobile builds. Great for agile playstyles.' },
      { heading: 'S Tier: Bow', content: 'Damage: Medium | Speed: Medium | Difficulty: Medium/nSafe ranged damage. Grey Wolf Bow is an easily upgraded early bow. Great for farming and hunting. With Charged Shot, you can one-shot animals.' },
      { heading: 'A Tier: Sword and Rapier', content: 'Sword is the most balanced choice, beginner-friendly. Rapier has extremely fast attack speed but lower damage, suited for technical players. The Ignir Sword (defeat Ludvig, Chapter 7) is the best one-handed sword — base 20 ATK upgradable to 45, with 5 Abyss Core slots.' },
      { heading: 'B Tier: Axe, Hammer, Hand Cannon, Rifle', content: 'Axe: Highest single-hit damage, but heavy animation lock penalty. Performs better with Oongka./nHammer: Crowd control weapon, charged attacks knock enemies flying. As a combo starter, far exceeds its ranking./nHand Cannon: Only AoE firearm, great for clearing groups. Best paired with axe/hammer stagger./nRifle: High single-target damage, very slow reload. Damiane performs better than Kliff.' },
      { heading: 'C Tier: Mace', content: 'Mace is the weakest option in the current version. Slower than a sword, relies on shield defense, and the armor-break/stagger niche is more effectively covered by other weapons. May need a future patch buff.' },
    ],
    tips: ['Equip 3 weapons and swap freely mid-combat — do not just bring one', 'Different characters get different weapon bonuses: Axes suit Oongka, Longswords are stronger with Damiane', 'Ignir Sword is the best one-handed sword — get it after defeating Ludvig in Chapter 7', 'Best early weapon is Hwando (19 ATK + 3 Abyss gear slots)', 'Bare Hands make every other weapon better'],
  },
  {
    id: 'early-weapons', title: 'Best Early Game Weapons — Hwando, Frozen Anguish, Vow of the Dead King', titleShort: 'Best Early Weapons', tag: 'EARLY', image: '/assets/guide-3.jpg',
    intro: 'Several of the strongest early-game weapons can actually be obtained right at the start! This guide details each weapon\'s location and why they are so powerful.',
    sections: [
      { heading: 'Hwando (Two-handed Blade) — Best Early Weapon', content: 'ATK: 19 | Type: Two-handed Blade/nWidely considered the strongest early-game weapon. Comes pre-installed with 3 Abyss gear: Crit Rate 1, Stamina Siphon Lv1, Attack 1, plus 5 total upgrade slots./nLocation: Lioncrest Manor northwest of Hernand. Need a mask and key (buy from Grimrak Back-Alley Shop southeast of Hernand, 10 copper + 30 copper). Climb through the manor\'s side annex window, go to the second floor — there is a locked door that auto-unlocks if you have the key. The chest contains Hwando and a Refined Palmar Pill (revives at 100% HP).' },
      { heading: 'Balton Longsword (Free Two-handed Sword)', content: 'Location: Crossroads south of Hernand Castle. A longsword is stuck in the ground — just walk up and grab it. No quest, combat, or key required. After upgrading at the blacksmith, it lasts 20+ hours. Upgrading to Lv4 only needs basic materials.' },
      { heading: 'Frozen Anguish', content: 'ATK: 25 + Attack Speed + Stamina Siphon Core/nBest all-around weapon./nLocation: Dead Fire Mountains north of Hernand. Enter the Spire of Frost — you will take continuous cold damage. A chest is in the basement. Warning: bring lots of recovery items!' },
      { heading: 'Vow of the Dead King', content: 'Type: Polearm | Fits ice builds/nHow to get: Complete a specific quest chain. Best paired with the Frost Curse Plate Armor set.' },
      { heading: 'Sword of the Lord', content: 'Comes with Wind Slash Abyss gear that fires wind blades. Automatically obtained after defeating Kailok in Chapter 2.' },
    ],
    tips: ['If you can only grab one weapon, make it Hwando', 'There is also a gold bar in the Lioncrest Manor fireplace worth 500 silver', 'Hwando\'s Stamina Siphon is crucial for two-handed weapons', 'Frozen Anguish is at Dead Fire Mountains — bring cold resistance items', 'Balton Longsword is a completely free alternative'],
  },
  {
    id: 'skills-guide', title: 'Skill Unlock Priority — Optimal Artifact Investment', titleShort: 'Skill Unlock Priority', tag: 'SKILLS', image: '/assets/guide-5.jpg',
    intro: 'Skills are unlocked via Abyss Artifacts. Artifacts are a limited resource — investing them wisely into core skills is critical for progression.',
    sections: [
      { heading: 'Priority 1: Health & Stamina', content: 'Invest your first Abyss Artifacts into Health and Stamina until upgrades cost two artifacts each./n- Stamina: Improves mobility, exploration, and blocking/n- Health: Provides margin for error in early and boss fights/nThese two are the foundation of your survival.' },
      { heading: 'Priority 2: Essential Combat Skills', content: '- Seize → Bodyslam: Deals solid damage and knocks down nearby enemies, creating breathing room/n- Charge: Knocks down multiple enemies and enables ground follow-ups/n- Insight Lv3: Slows time during parries, making boss fights much easier/n- Keen Senses Lv2: Greatly improves dodging against unblockable attacks' },
      { heading: 'Priority 3: Exploration & Utility', content: '- Aerial Maneuver: Fast movement and access to hidden areas, requires 200 stamina (4 points)/n- Swift Flight (Rank 2 Flight): Massively improves exploration/n- Gathering Wind Impact: Shoots wind arrows at puzzle discs — essential for certain puzzles' },
      { heading: 'Three Skill Branches', content: 'Blue (Stamina): Affects stamina cap and recovery — highest priority/nRed (Health): Affects HP cap — second priority/nGreen (Spirit): Affects spirit cap and recovery — third priority/nNote: Lines in the skill tree do NOT represent unlock order. Without explicit prerequisites, any skill can be unlocked directly.' },
    ],
    tips: ['Early on invest in survival skills, not flashy attack skills', 'Keen Senses Lv2 is a must — unlocks perfect dodge', 'Insight Lv3 reduces boss fight difficulty by 50%+', 'Do not waste artifacts on party members — prioritize Kliff', 'Forward Slash Lv3 unlocks Nature\'s Echo which copies your attack damage'],
  },
]

export const beginnerGuides: Guide[] = [
  {
    id: 'beginner-master', title: '30 Essential Beginner Tips & Survival Guide', titleShort: '30 Beginner Tips', tag: 'BEGINNER', image: '/assets/news-1.jpg',
    intro: 'New to Pywel? This guide will help you master the core mechanics quickly, avoid common mistakes, and build a strong foundation.',
    sections: [
      { heading: 'Essential Settings', content: '1. Difficulty: Choose Normal (can be changed anytime)/n2. Controls: Controller recommended for better parry/dodge timing/n3. Enable auto-combo: In settings, turn on "hold attack for auto-combo" — damage is higher!/n4. Camera sensitivity: Set to Medium — too fast affects parry judgment' },
      { heading: 'Food Is Your Only Healing', content: 'The game has no traditional health potions! Food is your ONLY healing method./nEssential food list:/n- Clear Soup: Best value, heals 180HP, cheap materials/n- Grilled Meat: Heals 120HP, cheap materials/n- High-end dishes: Save for boss fights/nRecommended route: Tavern buy water → Yurt buy grain → Butcher buy meat → Campfire cook/nBring 15-20 food per outing, 30-50 for boss fights.' },
      { heading: 'Economy Management', content: 'Early money-making methods (by efficiency):/n1. Rob Hernand Bank: Mask + universal key, ~75 silver per 2 minutes/n2. Kill bandits and sell loot — bandits respawn fast/n3. Complete bounty quests — pink markers on the map/n4. Card gambling (Duo game, tavern 2nd floor)/n/nMoney-saving tips:/n- Buy all small backpacks from merchants (+1 inventory slot)/n- Sell learned recipes — they do not take bag space/n- Sell bounty posters after completion (10 copper each)' },
      { heading: 'Inventory Management', content: 'Inventory space is very limited! Tips:/n- Press L3 (keyboard T) to sort items by type/n- Prioritize NPC quests for medium backpacks (+3 slots)/n- Purple-background items do not take bag space/n- Use materials the same day, do not hoard/n- Bird meat should be made into soup (does not stack with grilled meat)' },
      { heading: 'Exploration Tips', content: 'Blinding Flash (hold Ctrl + left click): The most important exploration skill! Effects:/n- Reveals distant fast travel points (silver glow)/n- Reveals mysterious energy points (? markers) on the map/n- Discovers destructible vegetation and hidden passages/n- Fast travel points: step on them once to activate/n/nAbyss fast travel:/n- Mark destination on map → switch to Abyss layer → teleport to nearest Nexus → skydive' },
      { heading: 'Save & Revival', content: 'Palmar Pill: Auto-revives on death, restoring 30% HP. Obtained during main quests (glowing beads). Note: you can still be attacked during revival get-up!/nEscape: If stuck in terrain, pause menu → Other → Escape, teleports you to last stable position.' },
    ],
    tips: ['Main story to Chapter 5 before free exploring — many mechanics unlock later', 'Grindstones and anvils give free temporary buffs — always use them!', 'Pets auto-loot drops — tame a dog or cat early on', 'Horses level up — ride and feed often, double-jump is very useful', '100% trust with merchants unlocks exclusive items — interact daily (+5 trust)', 'Do not steal too much — lowers contribution points affecting gear purchases', 'Falling from height deals damage — manage stamina while gliding'],
  },
  {
    id: 'cooking-guide', title: 'Complete Cooking System Guide — From Survival to Feast', titleShort: 'Cooking System Guide', tag: 'LIFE', image: '/assets/news-3.jpg',
    intro: 'Cooking is the core of the survival system. Master cooking to always stay at full condition during your adventures.',
    sections: [
      { heading: 'Recommended Recipes', content: 'Clear Soup (most recommended): Water + any vegetable → heals 180HP, cheap materials/nGrilled Meat: Any meat → heals 120HP/nBird Meat Soup: Bird meat + water → heals 150HP, bird meat does not stack with regular meat, prioritize soup/nAdvanced Stew: Multiple meats + vegetables → heals 300HP, save for boss fights' },
      { heading: 'Hernand Optimal Shopping Route', content: '1. Tavern → buy water (and prepared food if you have money)/n2. Yurt → buy water, barley, oats/n3. Butcher → buy all meats (including bird meat)/n4. Cooking pot → up the slope, through the small arch/nMerchant stock refreshes every game day. Run this route regularly and you will never run out of food.' },
      { heading: 'No-Recipe Improvised Cooking', content: 'You do NOT need to obtain a recipe first! As long as you know the ingredients and recipe, choose Improvised Cooking. Cooking the same dish 3 times via improvisation auto-unlocks the recipe for quick selection. This means you can experiment with ingredient combinations to discover hidden recipes!' },
    ],
    tips: ['Clear soup has the best value — cheap materials, great healing', 'Grindstone and anvil buffs are completely free — use them!', 'Recipes can be sold for money — learn them, then sell', 'Improvised cooking unlocks recipes after 3 attempts of the same dish'],
  },
  {
    id: 'greymane-camp', title: 'Greymane Camp Complete Management Guide', titleShort: 'Greymane Camp', tag: 'CAMP', image: '/assets/news-1.jpg',
    intro: 'The Greymane Camp on Howling Hill is your headquarters. As it expands, you unlock expedition dispatch, farm/ranch, vehicle crafting, and more.',
    sections: [
      { heading: 'Camp Feature Unlock', content: 'Starting Chapter 3, establish camp on Howling Hill. As the main story progresses, you can:/n- Dispatch mercenaries on expeditions for resources/n- Build farms and ranches for ingredient harvesting/n- Craft carriages and hot air balloons/n- Recruit NPCs to change dyes and hairstyles/n- Manage camp morale and build new facilities' },
      { heading: 'Expedition Dispatch System', content: 'Manage expeditions via Ross at camp or faction tags on the map. Each mission requires: a certain number of mercenaries, specific skills, sometimes resources (usually food and silver)./nMission types:/n- Production: Collect food, wood, ore, and materials/n- Combat: Suppress enemy activity in regions, unlock trade rewards/n- Construction: Directly tied to camp improvements/n- Rumor: Recruit new Greymane members' },
      { heading: 'Mercenary Skill Matching', content: 'Each mercenary has skills: Builder, Hunter, Warrior, etc. Matching the right skill to the mission type significantly improves efficiency and rewards. Builders are irreplaceable for construction missions, while Hunters collect far more food than Warriors.' },
      { heading: 'Camp Upgrade Priority', content: 'Prioritize Kamu\'s request (Farm) and Ben\'s request (Ranch), each rewards a medium backpack. Build stable food sources early. Also complete Luke\'s request for another medium backpack. Well-Stocked Coffers requires donating silver — painful but important for camp development.' },
    ],
    tips: ['Prioritize farm and ranch quests for stable food income', 'Mercenary skill matching to mission type is crucial', 'You can visit mission sites to watch your mercenaries work', 'Camp features unlock gradually after Chapter 3 — be patient', 'Complete all Greymane Commissions for 7 medium backpacks'],
  },
]

export const explorationGuides: Guide[] = [
  {
    id: 'abyss-guide', title: 'The Abyss — Complete Exploration Guide', titleShort: 'The Abyss', tag: 'EXPLORATION', image: '/assets/guide-5.jpg',
    intro: 'The Abyss is a mysterious floating realm of countless islands, each containing unique puzzles and rewards. The most rewarding exploration content in the game.',
    sections: [
      { heading: 'How to Enter the Abyss', content: 'Besides main story entrances, you can investigate Spires on the ground to enter the Abyss./nKnown Spires:/n- Spire of Stars/n- Spire of Soaring/n- Spire of the Sun/n- Spire of Frost/n- Spire of Insight/nEach Spire has its own puzzle/mechanic that leads to different Abyss regions.' },
      { heading: 'Abyss Island Puzzle Types', content: 'Each Abyss island is essentially a large self-contained puzzle:/n- Platforming: Use Force Palm triple-jump to cross gaps/n- Mechanism puzzles: Push blocks, activate runes, connect energy lines/n- Combat trials: Defeat all enemies to unlock portals/n- Environment interaction: Use Blinding Flash to discover hidden paths/nSolving puzzles rewards Abyss Artifacts and unlocks paths to the next island.' },
      { heading: 'Abyss Skydive Fast Travel', content: 'The fastest ground travel method:/n1. Teleport to any Abyss Nexus/n2. Jump down into freefall/n3. Use sword light reflection to discover ground points of interest during descent/n4. Deploy glider as you approach the ground/n5. If falling, press Axiom Force to grapple the sky and pause/n6. Pause menu → Escape to return to last safe position' },
    ],
    tips: ['Abyss exploration consumes no resources — infinite retries', 'Certain element skills can only be obtained through Abyss exploration', 'Abyss chests contain unique equipment', 'Skydiving from the Abyss is the best way to discover hidden locations'],
  },
  {
    id: 'mounts-guide', title: 'Mount System Guide — From War Horse to Blackstar Dragon', titleShort: 'Mount System', tag: 'MOUNTS', image: '/assets/guide-4.jpg',
    intro: 'Pywel is vast — without a mount, progress is painfully slow. This guide covers all mount acquisition, training, and the coveted Blackstar Dragon.',
    sections: [
      { heading: 'Starter Mount: Herspia War Horse', content: 'Automatically obtained early game. Horses gain experience through riding distance, improving speed, defense, and stamina./nTraining tips:/n- Ride often — experience is distance-based/n- Feed hay (drop on ground or feed from inventory menu)/n- Pet horse daily for +5 affinity (max 5 times/day)/n- Leveling up unlocks skills like double-jump/n- If horse falls, use Force Palm: Healing on the body to revive' },
      { heading: 'Wild Horse Taming', content: '1. Find wild horses in the open world — they are skittish and will run/n2. Sprint and quickly mount them/n3. Minigame: push left stick in the direction of the horse\'s tail to maintain balance/n4. Fill the yellow bar completely to tame successfully' },
      { heading: 'Horse Equipment', content: 'Horse gear boosts stats:/n- Bardings: Boost defense/n- Saddles: Boost speed/n- Horseshoes: Boost stamina recovery/nRare horse equipment is available at contribution shops and high-level merchants.' },
      { heading: 'Blackstar Dragon', content: 'The most coveted mount in the game!/nHow to get: Automatically unlocked after defeating Golden Star in Chapter 11./nAbilities: Can shoot fireballs and flame breath; flies extremely fast, crossing the continent in minutes./nNotes: Dragon can only be summoned in specific areas; combat attacks are powerful but have long cooldowns; Abyss Dragon Armor can be crafted to further boost power.' },
    ],
    tips: ['Do not rely solely on fast travel — riding discovers many secrets', 'Horse armor and saddles are at contribution shops — save contribution points', 'Wild horse stats are random — you can farm for high-stat rare breeds', 'Besides horses and dragons, mechanical vehicles can also be unlocked'],
  },
  {
    id: 'fishing-guide', title: 'Complete Fishing Guide — All 56 Fish & 5 Legendaries', titleShort: 'Complete Fishing Guide', tag: 'FISHING', image: '/assets/guide-5.jpg',
    intro: 'Crimson Desert has 56 fish species and 5 legendary fish. Fishing is relaxing, certain fish are used in high-end potion recipes, and completing the collection unlocks the Natural Collector trophy.',
    sections: [
      { heading: 'Best Fishing Rod: The Claw', content: 'The Claw is the best rod — auto-reels, no manual spinning required./nHow to get:/n1. Secret Merchant Patrigio: Only appears on roads between midnight and 4am. Easiest to find on the road from Howling Hill to Hernand. At 100% trust he gives you The Claw./n2. Steal: Go to Bounty\'s Nest east of Vellua — an "Item Fisher" NPC is using this rod. Attack nearby to scare him or use your own rod to make him drop The Claw, then steal it.' },
      { heading: 'Small Freshwater Fish (13 types)', content: 'Recommended spots:/n- The Witchwoods (Hernand central) / Rodbel Fishing Dock (Hernand east)/n- Skoghorn Dock (Pailune southwest) / Odeck Pier (Pailune north)/nKey fish:/n- Piranha: Talk to female NPC at Dewhaven Logging Camp/n- Crucian Carp: Claggy Chasm waterfall west of Longbranch/n- Ricefish, Small Spirlin: Various Pailune docks' },
      { heading: 'Medium Freshwater Fish (10 types)', content: '- Salmon/Sockeye Salmon: Dewhaven Logging Camp west coast/n- Trout: Lake south of Demeniss/n- Catfish: Red river at Bursada Temple Ruins, southeast Crimson Desert/n- Freshwater Eel: West of Horseshoe Lake/n- Carp: Skallcove (requires faction quest completion)' },
      { heading: 'Large Freshwater Fish (2 types)', content: '- Electric Eel: Same location as Catfish (Bursada Temple Ruins red river)/n- Giant Pond Loach: Same location as Crucian Carp (Claggy Chasm waterfall)' },
      { heading: 'Saltwater Fish (21 types)', content: '- Vellua Coast (Hernand south): Red Tonguesole, Threeline Grunt, Blackhead Seabream/n- Stoneward Harbor (Delesyia south): Opaleye, Barred Knifejaw/n- Delesyia northeast coast near Marni\'s Drilling Rig: Striped Marlin, Sailfish/n- Demeniss south coast, Steel Mountains south: Sturgeon/n- Crimson Desert southeast coast: Anglerfish' },
      { heading: 'Aquatic Creatures (11 types)', content: '- Blue Whale: Boat to map edge and it will ram you back/n- Seahorse, Shrimp, Squid: Vellua / Silvermoon Tradehouse/n- Wharf Roach, Blue Crab, Starfish: Delesyia southeast coast/n- Crayfish, Freshwater Crab, Freshwater Clam: River between Hernand and Demeniss/n- Razor Clam: Complete Dewhaven Keep research project' },
      { heading: 'Legendary Fish (5 types)', content: '5 legendary fish worth ~10 silver each, required for the Natural Collector trophy:/n- Golden Tench/n- Coelacanth/n- Golden Coelacanth/n- Golden Carp/n- Clockwork Fish/nEach legendary fish requires multiple reel phases. Using the Porin rod is mandatory. After hooking, repeatedly cycle: "pull back → wait for fish to tire → reel in" multiple times.' },
    ],
    tips: ['Visit all fishing merchants to auto-learn their fish', 'Mercenary expeditions have a small chance to bring back new fish', 'For large fish, cast and immediately fish at your feet — check what approaches, cancel if not the target', 'NPCs with white minimap markers sometimes grant fishing knowledge'],
  },
  {
    id: 'crafting-guide', title: 'Forge & Equipment Upgrade Complete Guide', titleShort: 'Forge & Upgrade', tag: 'CRAFTING', image: '/assets/guide-5.jpg',
    intro: 'Crimson Desert has NO traditional RPG leveling. Your base stats come entirely from equipment. If you die in two hits, it is not because your level is low — your armor and weapon are too weak.',
    sections: [
      { heading: 'Refinement System', content: 'Find a blacksmith (locate the anvil icon in Hernand for Blacksmith Turnali). Choose "Refine" (not "Upgrade"). Refining boosts weapon ATK or armor DEF./nLevels 1-4: Only need basic materials (iron ore, copper ore, thin hide, etc.)/nLevels 5-10: Start requiring Abyss Artifacts!/nCRITICAL TRAP: At Lv4→5 the blacksmith stops asking for ore and starts asking for Abyss Artifacts — which are ALSO used for skills and HP upgrades. Early game: NEVER use artifacts on equipment refinement! Push weapons and armor to Lv4 and STOP.' },
      { heading: 'Material Gathering', content: 'Ore: Find veins on mountainsides, mine while climbing using Force Palm or Mining Knuckledrill. After mining, it is marked on your map and regrows over time./nWood: Use a logging axe (or Turning Slash) to chop trees in forests./nHide and Bones: Hunt wild animals. Small animals drop small bones, large animals drop large bones. Different animals drop different hide types./nMisc: Camp expansion rewards (e.g., ranch wool), enemy drops, merchant purchases.' },
      { heading: 'Complete Material List', content: 'Wood: Timber, Fine Timber, Flawless Timber (for wooden shields)/n/nOre & Gems: Iron Ore, Copper Ore, Bloodstone, Scolecite Ore, Gold Ore, Silver Ore, Bismuth Ore, Azurite, Garnet, Epidote, Diamond (for plate armor, weapons, metal shields, accessories)/n/nBones: Small Bone, Large Bone, Thin Hide, Thick Hide, Short Hair Hide, Long Hair Hide, Sturdy Hide, Fang (for leather armor, accessories)/n/nMisc: Cloth Pieces, Fleece, Feather, Ivory, Spider Web (for soft armor, cloaks, accessories)/n/nLv10 Refinement Special: Aeserion\'s Scale' },
      { heading: 'Blueprint Acquisition', content: 'By default you can only craft arrows and bullets. All other gear requires blueprints or crafting manuals./nRhett\'s equipment shop (in front of the blacksmith) sells "One-handed Weapons of the World, Vol.1" (2.50 silver), unlocking Timberham Axe, Pailunese Riteblade, and Grace Rapier./nSpecial armor sets: Some of the best gear is locked behind side quests and research quests. Complete the "Trembling Woods" quest in Pororin village to unlock the local research institute, invest in "Getting Closer to Nature" research to get the Shadowleaf Disguise recipe.' },
      { heading: 'Item Duplication Trick', content: 'During refinement, you can use an exact DUPLICATE of the same item as material instead. If upgrading a White Wood Bow, a second White Wood Bow can substitute material costs. Very useful when looting many identical low-tier swords from bandit camps — junk that would only sell for copper becomes free refinement material.' },
    ],
    tips: ['Equipment refine to Lv4 and stop — do not waste artifacts on Lv5+', 'Chopping trees requires a logging axe or Turning Slash', 'Mining ore requires a Mining Pick or Force Palm', 'Item duplication trick saves huge amounts of materials', 'Different region blacksmiths specialize in different equipment types'],
  },
  {
    id: 'fast-travel', title: 'Fast Travel Complete Unlock Guide', titleShort: 'Fast Travel', tag: 'EXPLORATION', image: '/assets/guide-5.jpg',
    intro: 'Master the fast travel system to move through Pywel with ease.',
    sections: [
      { heading: 'Abyss Nexus', content: 'The most common fast travel point — looks like a circular stone platform. Step on it to activate. Distributed throughout the continent, usually near major landmarks.' },
      { heading: 'Abyss Cresset', content: 'Also serves as a travel point, but acquisition differs: some Cressets only need interaction to obtain artifacts and activate; many are in Ancient Ruins requiring puzzle-solving first.' },
      { heading: 'Map Unlock Methods', content: '1. Ring Bell Tower bells for a panoramic zoom-out that unlocks the regional map/n2. Use Blinding Flash to discover Mysterious Energy points/n3. ? markers on the map usually hide Abyss Nexus or Cresset/n4. Solving puzzles auto-unlocks the corresponding area' },
    ],
    tips: ['No fast travel near early camp — use Abyss skydive to return quickly', 'No distance limit between travel points — travel anywhere', 'Some travel points only appear after completing nearby main quests', 'Cannot use fast travel while carrying bounty prisoners'],
  },
  {
    id: 'pvp-guide', title: 'PvP Arena Guide — Multiplayer Combat & Techniques', titleShort: 'PvP Arena', tag: 'PvP', image: '/assets/guide-3.jpg',
    intro: 'PvP mode adds lasting competitive fun. Master these advanced strategies to stand out in the arena.',
    sections: [
      { heading: 'Animation Canceling', content: 'In all Pearl Abyss games, animation canceling separates average players from top-tier players. Use movement input, dodge, or secondary skills to interrupt main attack recovery animations, massively increasing DPS. Practice the exact frame window where attack damage has registered but the animation can still be canceled.' },
      { heading: 'Vertical Terrain Advantage', content: 'Pywel is highly vertical with advanced climbing, gliding, and dive attacks. In open-world or varied-terrain PvP, high ground is both a tactical AND mechanical advantage. Dive attacks break enemy defense, and environmental cover forces ranged opponents into unfavorable melee range.' },
      { heading: 'Crowd Control Diminishing Returns', content: 'Control effects (stun, knockdown, bind) likely follow diminishing returns (DR) to prevent infinite stunlock. Competitive players must learn these DR cooldowns. Knowing when opponents are immune to knockdown and when they are vulnerable lets you optimize combos for maximum efficiency instead of wasting your strongest CC on immune targets.' },
      { heading: 'Weapon Loadout Recommendation', content: 'Recommended: Melee weapon (longsword/sword) + ranged weapon (bow/pistol) + knuckles as combo connector. Melee for pressure, ranged for zoning, knuckles for combo linking. Adjust your weapon choices based on opponent build.' },
    ],
    tips: ['Animation canceling is an essential advanced technique — requires extensive practice', 'High ground advantage is critical in Pywel\'s vertical terrain', 'Learn CC diminishing returns mechanics — do not waste control skills', '3-weapon loadout is more flexible than a single weapon', 'Observe opponent habits and predict their attack patterns'],
  },
]

export const userGuides: Guide[] = [
  {
    id: 'fast-travel-system', title: 'Fast Travel System Complete Guide', titleShort: 'Fast Travel System', tag: 'SYSTEM', image: '/assets/guide-5.jpg',
    intro: 'Pywel is vast — walking everywhere wastes precious time. Here is how to master the fast travel system, from unlocking the Abyss to using sword light reflection to discover hidden points.',
    sections: [
      { heading: 'Step 1: Unlock the Abyss', content: 'During Chapter 1 Part 2, your first fast travel point unlocks automatically when you enter the Abyss. From then on, you can select it as a destination from anywhere on the map.' },
      { heading: 'Step 2: Using Abyss Nexus Points', content: 'Open your map and switch to Abyss view using the indicated button. Select your destination to teleport instantly. White question marks on the map indicate hidden Abyss Nexus points — visit once to unlock permanently.' },
      { heading: 'Step 3: Abyss Cresset', content: 'Besides the Nexus, Abyss Cressets also serve as travel points. Some Cressets only need interaction to obtain artifacts and activate; many are in Ancient Ruins and require puzzle-solving first.' },
      { heading: 'Pro Tip: Sword Light Reflection', content: 'Hold L1+R1 (or LB+RB) to reflect light with your sword, revealing hidden Abyss elements and making Nexus points appear as glowing markers in the world. This is the best method for discovering hidden travel points.' },
      { heading: 'Abyss Skydive Travel Method', content: 'The fastest ground travel method:/n1. Teleport to any Abyss Nexus/n2. Jump down into freefall/n3. During descent, use sword light reflection to discover ground points of interest/n4. Deploy glider as you near the ground/n5. If falling, press Axiom Force to grapple the sky and pause' },
    ],
    tips: ['No fast travel near early camp — use Abyss skydive to return quickly', 'White ? markers on the map usually hide Abyss Nexus or Cresset', 'Some travel points only appear after completing nearby main quests', 'Cannot use fast travel while carrying bounty prisoners'],
  },
  {
    id: 'skill-tree-build', title: 'Skill Tree & Character Building Guide', titleShort: 'Skill Tree & Builds', tag: 'SYSTEM', image: '/assets/guide-3.jpg',
    intro: 'Do not rush to unlock new abilities. The game provides plenty of tools early on, and boss fights are challenging. Proper skill point allocation is key to progression.',
    sections: [
      { heading: 'Priority 1: Health & Stamina', content: 'Invest your first Abyss Artifacts in Health and Stamina until upgrades cost two artifacts each./n- Stamina: Improves mobility, exploration, and blocking/n- Health: Provides margin for error in early and boss fights/nThese two are the foundation of your survival.' },
      { heading: 'Priority 2: Core Combat Skills', content: '- Seize → Bodyslam: Deals solid damage and knocks down nearby enemies, creating breathing room in group fights/n- Charge: Knocks down multiple enemies and enables ground follow-up attacks/n- Insight Lv3: Slows time during parries, making boss fights much easier/n- Keen Senses Lv2: Significantly improves dodging against unblockable attacks' },
      { heading: 'Priority 3: Exploration & Utility', content: '- Aerial Maneuver: Fast movement and access to hidden areas, requires 200 stamina (4 points)/n- Swift Flight (Rank 2 Flight): Massively improves exploration experience/n- Gathering Wind Impact: Shoots wind arrows at puzzle discs — essential for certain puzzles' },
      { heading: 'Three Skill Branches', content: 'Blue (Stamina): Affects stamina cap and recovery — highest priority/nRed (Health): Affects HP cap — second priority/nGreen (Spirit): Affects spirit cap and recovery — third priority/nNote: Lines in the skill tree do NOT represent unlock order. Without explicit prerequisites, any skill can be unlocked directly.' },
    ],
    tips: ['Early on, invest in survival skills, not flashy attack abilities', 'Keen Senses Lv2 is a must — unlocks perfect dodge', 'Insight Lv3 reduces boss fight difficulty by 50%+', 'Do not waste artifacts on party members — prioritize Kliff'],
  },
  {
    id: 'boss-strategies-all', title: 'General Boss Battle Strategies', titleShort: 'Boss Strategies', tag: 'BOSS', image: '/assets/news-2.jpg',
    intro: 'Crimson Desert boss fights require pattern recognition and strategic skill usage. This guide covers universal strategies for all bosses.',
    sections: [
      { heading: 'Core Mechanic: Parry & Counter', content: 'Hold CTRL (or LB on controller) to raise guard. Press just as an attack lands to parry — a green flash indicates success. After a successful Parry: enemy gets large stagger, your stamina and spirit fully recover, next counter deals +250% damage. Upgrade Keen Senses to Lv2 for enhanced dodge against unblockable attacks.' },
      { heading: 'Reed Devil', content: 'Learn attack patterns and telegraphs. Stay mobile and use AoE attacks. Phase 1 uses Watch and Learn to unlock the Stab skill. Watch his dive bomb — side-dodge count matches the phase number (1/2/3).' },
      { heading: 'Queen Stoneback Crab', content: 'Target the underbelly weak points. Use piercing weapons to break armor. Dodge powerful claw attacks. Recommended to fight on horseback for speed advantage.' },
      { heading: 'Staglord', content: 'Stay to the sides to avoid charges. Attack legs to stagger. Use ranged attacks during charge sequences.' },
      { heading: 'White Horn', content: 'Dodge horn charges carefully. Break ice formations quickly. Use fire-based attacks to counter ice abilities.' },
      { heading: 'Special Boss Mechanics', content: '- Kailok: Extremely weak to fire, fire weapons deal bonus damage/n- Matthias: Can be kicked off arena edge with Pump Kick/n- Reed Devil: Learn Aerial Roll via Watch and Learn/n- Ludvig: Walking outside the room drastically reduces difficulty/n- Golden Star: Attack top turret to build stagger bar' },
    ],
    tips: ['Every boss has fixed attack patterns — observation is key', 'Red-glowing attacks cannot be parried — must dodge', 'After a successful Parry, land 2-3 hits then retreat, do not get greedy', 'Many bosses have "cheese" strategies — use terrain and mechanics wisely'],
  },
  {
    id: 'horse-taming-mounts', title: 'Horse Taming & Mount System Guide', titleShort: 'Horse Taming', tag: 'SYSTEM', image: '/assets/guide-4.jpg',
    intro: 'Instead of buying expensive horses from the market, tame wild ones for free! This guide covers the taming process, horse training, and all mount types.',
    sections: [
      { heading: 'Taming Process', content: '1. Find wild horses in the open world — they are skittish and will run/n2. Sprint and quickly mount them/n3. Minigame: point the left analog stick in the direction of the horse\'s tail to maintain balance/n4. Fill the yellow bar completely to tame successfully' },
      { heading: 'Horse Care & Skills', content: '- Pet and feed your horse to increase its level and unlock skills like double-jumping (similar to Torrent in Elden Ring)/n- Use Force Palm: Healing to restore your horse\'s health, or simply punch it to heal (seriously!)/n- Register tamed horses at stables or ride them immediately/n- Horses gain experience through riding distance' },
      { heading: 'Horse Equipment', content: 'Horse gear boosts stats:/n- Bardings: Boost defense/n- Saddles: Boost speed/n- Horseshoes: Boost stamina recovery/nRare horse equipment available at contribution shops and high-level merchants.' },
      { heading: 'Blackstar Dragon', content: 'The most coveted mount in the game!/nHow to get: Automatically unlocked after defeating Golden Star in Chapter 11./nAbilities: Can shoot fireballs and flame breath; flies extremely fast, crossing the continent in minutes./nNotes: Dragon can only be summoned in specific areas; combat attacks are powerful but have long cooldowns; Abyss Dragon Armor can be crafted to boost power.' },
    ],
    tips: ['Wild horse taming minigame requires practice — you will get the hang of it', 'Higher horse level unlocks more skills — double-jump is extremely useful', 'Pet daily max 5 times, feed daily max 3 times', 'Besides horses and dragons, mechanical vehicles can also be unlocked'],
  },
  {
    id: 'abyss-puzzles', title: 'Abyss Puzzle Solutions Guide', titleShort: 'Abyss Puzzles', tag: 'SYSTEM', image: '/assets/guide-5.jpg',
    intro: 'Abyss puzzles reward valuable Abyss Artifacts for character progression. This guide covers all puzzle types.',
    sections: [
      { heading: 'Secret Garden Abyss', content: 'Reflect light with your sword to align beams with receptors. Stand on pressure plates to redirect beams. Time your movements with rotating platforms. Use Blinding Flash to burn vegetation blocking paths and reveal powered cables.' },
      { heading: 'Altar of Solitude', content: 'Navigate floating ruins using wind currents. Activate pillars to create pathways. Watch for hidden chests containing Faded Abyss Artifacts.' },
      { heading: 'General Puzzle Tips', content: '- Use Blinding Flash to burn vegetation blocking paths and reveal powered cables/n- Hold your lantern while riding or flying — Sealed Abyss Artifacts emit white circles showing their location/n- Learn Gathering Wind Impact to shoot wind arrows at puzzle discs in the correct order' },
      { heading: 'Abyss Artifact Acquisition', content: 'Solving puzzles rewards Abyss Artifacts for unlocking skills and upgrading stats. Certain artifacts are sealed and require completing additional challenges. Use your lantern to reveal sealed artifact locations (white glow).' },
    ],
    tips: ['Each Abyss island puzzle is independent — infinite retries on failure', 'Blinding Flash is the core puzzle-solving skill — prioritize unlocking it', 'Hold lantern while riding/flying to discover hidden artifacts', 'Gathering Wind Impact is required for certain puzzles'],
  },
  {
    id: 'cooking-crafting', title: 'Cooking & Crafting System Complete Guide', titleShort: 'Cooking & Crafting', tag: 'SYSTEM', image: '/assets/news-3.jpg',
    intro: 'Cooking and crafting are essential for sustaining your journey through Pywel. Master these life skills to always stay at full condition.',
    sections: [
      { heading: 'Cooking Basics', content: '- Gather ingredients from the world (meat from hunting, vegetables from foraging)/n- Find recipe scrolls in taverns and residential areas (look for scroll icons on the minimap)/n- Cook at campfires or cooking stations/n- Different meals provide various buffs and healing effects' },
      { heading: 'Recommended Recipes', content: 'Clear Soup (most recommended): Water + any vegetable → heals 180HP, cheap materials/nGrilled Meat: Any meat → heals 120HP/nBird Meat Soup: Bird meat + water → heals 150HP, bird meat does not stack with regular meat, prioritize soup/nAdvanced Stew: Multiple meats + vegetables → heals 300HP, save for boss fights' },
      { heading: 'Cooking Pro Tips', content: '- Clean fish by holding X/A over them in inventory to turn them into fillets for recipes/n- Sell learned recipes for surprising amounts of coin — early game money-making strategy/n- Equip food to quick-consumption wheel (F3 / Right D-pad) for mid-combat healing/n- You do NOT need to obtain a recipe first! As long as you know the ingredients, choose Improvised Cooking' },
      { heading: 'Crafting System', content: '- Collect materials from defeated enemies and environment/n- Upgrade equipment at smithies using copper, iron ore, and Bloodstone for max level refinement/n- Use grindstones and anvils found in the world for temporary weapon damage and armor protection buffs (free buffs!)' },
      { heading: 'Hernand Optimal Shopping Route', content: '1. Tavern → buy water (and prepared food if you have money)/n2. Yurt → buy water, barley, oats/n3. Butcher → buy all meats (including bird meat)/n4. Cooking pot → up the slope, through the small arch/nMerchant stock refreshes every game day. Run this route regularly and you will never run out of food.' },
    ],
    tips: ['Clear soup has the best value — cheap materials, great healing', 'Grindstone and anvil buffs are completely free — always use them!', 'Recipes can be sold for money — learn them, then sell', 'Improvised cooking unlocks recipes after 3 attempts of the same dish'],
  },
  {
    id: 'pet-companion', title: 'Pet & Companion System Guide', titleShort: 'Pet & Companion', tag: 'SYSTEM', image: '/assets/guide-6.jpg',
    intro: 'Despite the tutorial quest coming much later, you can get a pet almost immediately. Pets are not just cute companions — they provide huge help in combat and exploration.',
    sections: [
      { heading: 'Taming Pets', content: '- Pet animals to increase trust by 5 points (5 times per day max)/n- Feed meat to increase trust by 20 points (3 feeds per day max)/n- Reach 100 Trust to unlock the animal as a companion' },
      { heading: 'Pet Benefits', content: '- Pets automatically loot items from the ground — extremely handy when mining ore/n- Dogs will bark at bounty targets even if you have not collected their flyer/n- Be careful: auto-loot fills inventory quickly with junk after large battles' },
      { heading: 'Special Interactions', content: '- Use R2/RT/RMB to pet cats you pick up in the open world/n- Pet and feed your horse to unlock new mount skills/n- Different animals have different interaction methods — experiment to discover hidden interactions' },
      { heading: 'Pet Management', content: 'You can manage your pet companions at camp. Name them, check stats, equip gear. Certain pets have special exploration abilities — for example, dogs can discover hidden treasures.' },
    ],
    tips: ['Prioritize taming a dog — auto-loot is extremely practical', 'Remember to pet and feed daily — trust takes time to build', 'Dog barking alerts help you discover bounty targets', 'Cats can be picked up and petted — a cute interaction'],
  },
  {
    id: 'combat-mastery', title: 'Combat Mastery & Advanced Techniques', titleShort: 'Combat Mastery', tag: 'COMBAT', image: '/assets/guide-3.jpg',
    intro: 'The path from beginner to combat master. Master these advanced techniques to become unstoppable in Pywel.',
    sections: [
      { heading: 'Environmental Combat Tactics', content: '- Almost everything in the environment is breakable and climbable — use this for tactical advantage/n- Use Push and Shield Bash to send enemies off cliffs or through bridge railings/n- Sprint and press F (Y on controller) to kick enemies, knocking them down' },
      { heading: 'Advanced Techniques', content: '- Force Palm: Shockwave ability, Lv3 kills entire herds. Also heals companions/n- Free Skills: Watch enemies and bosses to learn new skills without spending artifacts/n- Grindstones/Anvils: Temporary weapon damage and armor protection buffs (free!)' },
      { heading: 'Stealth & Crime', content: '- Find a mask to begin stealing. Be cautious — stealing reduces Contribution points whether caught or not/n- Hide from search guards in hay piles around farmland/n- Complete bounties before picking up flyers for surprise rewards' },
      { heading: 'Watch and Learn Mechanic', content: 'Hold the observation key (default V) for ~2 seconds to observe an NPC or boss using a specific move, unlocking it for free./nFocus slows time for easier observation. Recommended targets:/n- Pump Kick (Matthias)/n- Evasive Roll (Kailok)/n- Aerial Roll (Crowcaller)/n- Blinding Flash Finisher (Master Du) — one of the strongest attacks in the game' },
    ],
    tips: ['Animation canceling is an essential advanced technique — requires extensive practice', 'Force Palm Lv3 can one-shot entire groups of enemies', 'Watch and Learn saves huge amounts of artifacts', 'Hay piles are the best hiding spots from guards'],
  },
  {
    id: 'exploration-secrets', title: 'Exploration & World Secrets Guide', titleShort: 'Exploration & Secrets', tag: 'EXPLORATION', image: '/assets/news-1.jpg',
    intro: 'Maximize your exploration of Pywel to discover hidden treasures and secrets. This guide covers map unlocking, hidden loot, and time management.',
    sections: [
      { heading: 'Map Unlocking', content: 'Ring the bell in each city\'s Bell Tower for a panoramic zoom-out that unlocks the regional map and points of interest.' },
      { heading: 'Hidden Treasures', content: '- Look for Strongboxes in wealthy areas — wooden boxes on shelves rewarding 4.8+ Silver/n- Mysterious Energy areas (white question marks) hide fast travel points or puzzles rewarding Abyss Artifacts/n- Use your lantern to reveal hidden paths and Sealed Abyss Artifacts' },
      { heading: 'Time Management', content: '- Each in-game hour equals 5 real-time minutes/n- Rest at beds to pass time and restore health, but there is a 10 in-game hour (50 real minutes) cooldown between rests/n- Use this to time your Greymanes missions strategically' },
      { heading: 'Environmental Interaction', content: '- Cut down trees in one blow with R1+R2 (RB+RT)/n- Mine ore while clinging to cliff faces using the Mining Knuckledrill/n- Get behind waterfalls using the Stab ability (R1+Triangle/RB+Y)/n- Almost everything in the environment is breakable and climbable' },
    ],
    tips: ['Ring the bell in every city to unlock the map', 'Strongboxes are an important early money source', 'Rest has a cooldown — plan accordingly', 'Almost everything in the environment is interactable'],
  },
  {
    id: 'chapter1-walkthrough', title: 'Main Story Walkthrough — Chapter 1: First Encounters', titleShort: 'Chapter 1 Walkthrough', tag: 'STORY', image: '/assets/news-1.jpg',
    intro: 'Complete Chapter 1 guide from the prologue to arriving at Hernand City, including every key step and boss fight.',
    sections: [
      { heading: 'Prologue: Midnight Raid', content: '- Follow the firelight down to the wooden cabin/n- Speak with Onka (the orc with the giant axe) to trigger the story/n- Talk to Marius and Ruso near the gravestone/n- Enter the cabin — Drunken Black Bear faction attacks' },
      { heading: 'Rescue Mission', content: 'Save three companions during the raid:/n- Onka: Right side of the slope near the cabin/n- Neyla: Up the slope, immediately visible/n- Yarn: Left-down from Neyla\'s position, somewhat hidden in darkness' },
      { heading: 'Boss: Moldir', content: 'This is a scripted loss — win or lose, you are captured and thrown into the sea. Do not waste food and items, the outcome is fixed.' },
      { heading: 'Temple Escape', content: '- Use "Gaze" to reveal blue light points on the ground for precise jumping/n- Climb the patterned wall on the right, crawl through the small hole at the top/n- Reflect light with your sword — when the orb turns blue, the door unlocks/n- Cross the three platforms when they align (middle platform pauses)' },
      { heading: 'Arriving at Hernand City', content: '- Follow Sebastian, defeat two soldiers/n- Mount your horse and ride to the city outskirts/n- Chapter 1 "First Encounters" officially begins/n- You can now freely explore Hernand City — recommend familiarizing yourself with the layout first' },
    ],
    tips: ['Moldir is a scripted loss — do not waste resources', 'Rescuing all three companions is required for the main story', 'Temple jumping: watch the blue light point positions', 'After reaching Hernand, explore the city first — learn merchant locations'],
  },
]

export const allGuides = [...bossGuides, ...combatGuides, ...beginnerGuides, ...explorationGuides, ...userGuides]

export function getGuideById(id: string): Guide | undefined {
  return allGuides.find(g => g.id === id)
}

export function getGuidesByTag(tag: string): Guide[] {
  return allGuides.filter(g => g.tag === tag)
}
