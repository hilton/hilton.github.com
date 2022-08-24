---
title: Curation and storytelling for software documentation
description: Reflections on ‘Living Documentation’, by @cyriux
layout: hh
tags: documentation book
image: living-documentation.jpg
---

![Living Documentation - book cover](living-documentation.jpg)

{:.series}
1. [Principles of documentation](martraire-documentation-principles)
2. [Principles of living documentation](living-documentation-principles)
3. [Knowledge exploitation](knowledge-exploitation)
4. [Knowledge augmentation](knowledge-augmentation)
5. Curation and storytelling
6. [Glossaries and data dictionaries](living-glossary)

The book [Living Documentation](https://www.pearson.com/us/higher-education/program/Martraire-Living-Documentation-Continuous-Knowledge-Sharing-by-Design/PGM1724668.html),
by [Cyrille Martraire](http://cyrille.martraire.com/about/)
explores the concept of _living documentation_.
Chapter five introduces the idea that, like a museum collection, system knowledge needs active 
[curation](https://en.wikipedia.org/wiki/Curator).

## Active curation

Martraire explains that software system knowledge needs curation because of its volume:

> Remember that most of the knowledge related to system is already there in the system—and that there is a lot of it. (p135)

You might reasonably expect that you can understand a whole software system,
given how much knowledge it makes explicit, but overwhelming complexity makes that difficult, in practice.
Some advances in software architecture mitigate the problem, by reducing the scope that a development team must understand and focus on.
But teams can still effectively be faced with ‘a million lines of code’, even with smaller systems, when team members rotate faster than they can understand the whole system.

In this chapter, Martraire shares his insight that making sense of this information requires _art_ -
the a museum curator’s creativity:

> Adopt the mindset of a curator to tell a meaningful story out of all the available knowledge in the source code and artefacts.

A museum exhibition’s _story_ may seem abstract, but curators also produce more concrete artefacts.


## Exhibition catalogues and project documentation

‘The curator preparing an art exhibition’ (p153) explores the curation metaphor further,
including this comment:

> museums now sometimes offer expensive and heavyweight complete exhibition catalogues (p155)

I can understand wanting something tangible from a transient project, as an explicit knowledge representation in its own right, and also as a historical record that can help people understand prior work.
It also feels human to want a souvenir, to celebrate and remember a project.
Sadly, I don’t have a glossy coffee table book for each of the 40-something software projects I’ve worked on.

Personally, I’ve love to have an annual (yearbook) for the projects and products I’ve worked on, showcasing the people and processes, diagrams and decisions, bugs and features, screenshots code samples, and events.
I can’t judge the economics of the idea, either for its knowledge value or the team member happiness.
I also don’t know whether 
[museums’ exhibition catalogues](https://en.wikipedia.org/wiki/Exhibition_catalogue#Art_or_museum_exhibition_catalogues) 
make money, or only exist as vanity projects for museum patrons.

## Storytelling

Martraire introduces a more practical idea at the end of the previous chapter:

> Decisions belong to stories. Humans love stories and tend to remember them. (p122)

This suggests documenting along the _time_ dimension, instead of only system structure.
Documenting what history inspires ideas like ‘Commit messages as comprehensive documentation’ (p128) and other forms of timestamped write-only documentation, such as 
[architecture decision records](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions.html).

Martraire’s metaphor then steps out of the museum, recommending software documentation equivalents of guided tours and sightseeing maps, referencing Simon Brown’s work, and noting that ‘tourism guidance in a city is highly curated’. (p144)
Martraire then recommends:

> Provide curated guides of a code base, each with a big theme.

The subsequent example shows how you might annotate code to plot a route through it, but doesn’t say much about what to stay about each place of interest.
This is where development teams could learn a thing or two from product management, and apply more deliberate storytelling techniques to navigate the complexity of the knowledge they document.
