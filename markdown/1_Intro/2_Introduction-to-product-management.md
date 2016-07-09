---
Title: Introduction to product management
Author: Saksham Uppal
Draft: false
Excerpt: Learn more about the practice of product management, the product team, and the PM role. Also, gain an introduction to the product and software development life cycles.
---

*Facebook. Google Search. TurboTax. Dropbox. These are software products you’ve all heard of or use, and products that were made mainstream successes through countless hours of planning, designing, building, and optimization. Product management plays a crucial role in this journey, and is both a rewarding and challenging discipline. So let’s get started exploring product management!*

*This section provides a high-level introduction to product management and is meant to give you a quick lay of the land. If you're new to the topics of software or product, it may seem like drinking out of a firehouse at first; however, the dots will connect as you progress through future modules where we explore many of the items mentioned below more deeply.*


## What is a product?

For our purposes, a **product** is simply a piece of software that tries to deliver value (e.g., utility, entertainment, etc.) to those people who interact with it, which we refer to as users (users who pay for a product are also called customers). Products can operate on one or more computing platforms (e.g., desktops, web browsers, mobile devices, etc.).

While there is [contention](https://people.csail.mit.edu/mjulia/publications/What_Is_A_Feature_2015.pdf) around an exact definition, to keep things simple, for our purposes a **feature** is a subset of a product that offers some notable functionality or benefit. A single product can have and usually has multiple features.

Additionally, you may hear of something being a **software** **platform**. In this case, the platform is a software product itself that allows others to build applications on top of it.

To share an example - Facebook, specifically the website and mobile app, is a social networking product. It operates on multiple platforms including web-browsers and mobile devices. Facebook is made up of multiple features, some of which include the News Feed, Search, Like button, Notifications, and Messages. Additionally, Facebook also offers the [Facebook Platform](https://developers.facebook.com/), which in the simplest terms offers tools that allow third-party Developers (these are Developers that don't work for Facebook) to create their own applications that access Facebook data. For instance, Zyanga's notoriously popular [Farmville](https://www.facebook.com/FarmVille/) game was built on the Facebook Platform.


## What is product management?

Simply put, product management is understanding what users (internal or external to the company) need, and then defining, delivering, measuring, and iterating on the solution to meet those needs.

Product management is an essential practice in software companies and can include both internal and external products. An example of an internal product could be a forecasting tool that a company such as [Plated](http://www.plated.com) builds for their operations team so that they have a sense of what future demand may be and can order inventory accordingly. An example of an external product could be the iPhone app that [Uber](http://www.uber.com) offers customers so they can order a cab.

In larger organizations, product management is usually a distinct function that works with other functions such as Engineering, Design, Marketing, etc. In much smaller companies, say a 5-person startup, functions may not be as well defined, as everyone is wearing multiple hats and duties are more fluid. In this case, product management duties could be done by one or more people.

**Further reading on product management and its role in an organization:**
-   [Why Companies Need Full-Time Product Managers](https://www.smashingmagazine.com/2014/09/why-companies-need-full-time-product-managers/) by Rian van der Merwe
-   [The Black Box of product management](https://medium.com/swlh/the-black-box-of-product-management-3feb65db6ddb#.6cj7ysbel) by Brandon Chu
-   [What is product management?](http://blog.sueraisty.com/what-is-product-management/) by Sue Raisty
-   [Introduction to Product Management](http://www.aha.io/roadmapping/guide/product-management) by Aha! Labs


## Product team overview

A product team is a group of people who work towards building a product. They are responsible for understanding customer needs, planning, designing, and delivering new products or features, and also improving existing products or features. Teams can vary in size, composition, and focus of team member roles, depending on what stage the organization is at and the nature of its product. For instance, a product team could focus on bringing a small new product to market, or a single product team could focus on launching a feature to improve on an existing product. It's worth noting that the Product Manager does not own the product and everyone else simply contributes - everyone on the product team owns the product.

The following individuals are usually a part of the core product team:
-   **Product Manager (PM)** - Leads the development of new products or features from ideation through to launch and maintenance. The role focuses on understanding customers and their needs through qualitative and quantitative means, defining product and feature requirements, and facilitating the product team's efforts to translate customer insights to build experiences that deliver customer value. Additionally, PMs focus on determining product strategy, setting and tracking product objectives, and delivering on business outcomes. Some PMs have P&L (profit and loss) accountability for their products - this means that they are also responsible for the financial success of their products. The PM role is expanded on in the next section below.

-   **Designer** - Leads interaction and visual design efforts. Interaction/user experience design focuses on understanding mental models and workflows to create an ideal user experience. The work involved with this includes planning and testing experiences, mapping out flows, and wireframing low-fidelity mock-ups. Visual design instead focuses on the actual look and feel of the product or feature. The work involved with this includes creating high-fidelity designs or prototypes, animations, etc. In some organizations, a single Designer may focus on both interaction and visual design as part of one team, while in other organizations there may be one Interaction/User Experience Designer supporting two teams, while one Visual Designer supports four teams.

<img src="/images/inter_visual_design.png" width="466" height="322" />
*[Interaction and visual design compared (Adapted from the work of Zia Su)](https://ziasu.wordpress.com/2016/05/01/seesaw/ "Caption")*

-   **Lead Engineer** - This is usually a Senior Engineer. They partner with the PM and lead the technical implementation and technical design (e.g., software architecture), manage Engineering resources, and provide a perspective effort for technical items. They may also be a key member in product discovery efforts (i.e., figuring out what the solution should be) as they can help contribute perspectives on technical possibilities and complexity.

-   **Software Engineering Team** - These are the Engineers on the team who work with the Lead Engineer to code the product. During team meetings, they also help provide input on technical implementation details, complexity, and technical tradeoffs. They should also be involved in product discovery efforts.

-   **QA Engineer(s)** - There is usually at least one QA Engineer on a team. They lead both the planning and execution of product testing. This can include both manual testing (i.e., going step-by-step through product flows to see if something is broken) and automated testing (i.e., writing and running code that tests whether aspects of the product are broken).

<br>
Additional roles may provide support to the core product team described above. These roles include:

-   **Project / Delivery Manager** - They help coordinate both across multiple product teams and within individual product teams; removing obstacles, tracking dependencies and progress towards milestones, and implementing process improvement efforts. It's worthwhile to note that people often confuse Product and Project Managers. Looking at them side-by-side, **Product Managers** focus on building the right product - and to do so focus on creating a product strategy, conducting customer research, ideating solutions, defining requirements, and helping their teams to develop the product. **Project Managers** focus on ensuring projects (i.e., time-boxed efforts such as a new product launch or the migration of user data to a new system) are completed on time and within budget; and to do so they focus on adjusting scope, managing resources, coordinating across-teams, tracking and reporting status, and mitigating risk. Read more about the difference between the two roles [here](https://www.productmanagerhq.com/2014/07/product-manager-vs-project-manager/).

-   **Analytics Analyst** - These are members of a larger analytics team that serve teams such as Product and Marketing, to provide analytics support. They help with tracking, processing, and analyzing analytics data. They often also help in making data visualizations (e.g., dashboards) and reports to share metrics that are of interest to the product team.

-   **Product Marketing Manager** - They work mainly with the Marketing and Sales teams, but also with PMs to ensure products are positioned correctly in the market, to appeal to target segments, while appropriately differentiating from competitors through messaging and promotion. Learn more about the role [here](http://labs.openviewpartners.com/role-of-product-marketing-in-your-startup/) and how it differs from product management [here](https://www.productmanagerhq.com/2015/02/difference-between-product-manager-and-product-marketing-manager/).

-   **Researcher** - They help facilitate research with a focus on qualitative efforts such as customer interviews and usability sessions. As part of a research study they can help recruit participants, provide input on research plans to ensure the desired learning is gained, and interpret results.

-   **Copywriter** - Frequent in larger companies, these individuals write or vet "copy", such as webpage text, text for email campaigns, etc. to ensure correctness of the language and consistency with the overall messaging style (e.g., tone).

Note: All of the above additional roles may not exist. For instance, a PM and Designer may share the responsibilities of a Researcher. Also, if the roles do exist, these individuals may be shared members of multiple product teams (i.e., one Researcher could support three PMs and their product teams).

<br>
It's worthwhile to note that PMs may also partner closely with the following teams:
-   **Customer Care/Support** - This is the customer support function and may go by different names in an organization. They support customers with their issues and help to resolve them. As a PM, customer support can provide you with valuable customer insight, especially into major customer frustration with your product.

-   **Business Operations** - Usually an internally-facing team focused on improving business outcomes (e.g., boosting profitability). They generally leverage data to provide advice to core teams, and help improve processes. PMs may work with members of this team to adjust and optimize product metrics that are tied to business success.

-   **Sales** - The nature of this team will differ significantly based on the product (e.g., an enterprise product will likely have a sizeable sales force behind it while a consumer app may not have any) but as you guessed, it's aimed at selling the product. Sales can offer PMs another perspective on customer needs and wants.

-   **Marketing** - Focuses on promoting the product to customers and may do so through a variety of online (e.g., email campaigns, paid search, etc.) and offline (e.g., conferences, direct mail, etc.) means. Marketing, similar to Sales, can offer PMs a perspective into the market and what customers want.

-   **Legal** - Strive to ensure the company operates legally through its practices and products (e.g., they may help carefully draft the Terms of Use Agreement for your product).

-   **Finance** - Focuses on managing, reporting, and projecting finances for the company (e.g., how many paid subscribers do we have, how much reoccurring monthly revenue do we project, and what are our expenses).

**Learn more about how others organize and adapt their product teams:**
-   [We’ve Changed Our Product Team Structure 4 Times: Here’s Where We Are Today](https://open.buffer.com/product-team-evolution/) by Courtney Seiter
-   [What Your Product Team Says About Your Company Values](http://www.producttalk.org/2015/10/ideal-product-team/) by Teresa Torres


## The PM role expanded

The software Product Manager role is unique and multi-faceted; straddling and at the intersection of business, design, and technology. It focuses on understanding customers through qualitative and quantitative means, defining requirements, and facilitating the product team's efforts to translate insights to build experiences that deliver customer value. In a nutshell, you're responsible for building the right product, delivering it, and continuing to improve it.

<img src="/images/what_is_pm.png" width="266" height="218" />
[*PMs are at the intersection (Source: Mind The Product)*](http://www.mindtheproduct.com/wp-content/uploads/2011/07/what_is_a_product_manager.png "Caption")

The PM role varies organization-to-organization due to differences such as company size, type of product, and culture. You need to consider both a high-level strategic view on what to do, but also the low-level tactical view on how to execute. In terms of scope, a PM may be responsible for an entire product (e.g., you might be the sole PM for the [Mint mobile app](https://itunes.apple.com/ca/app/mint-money-manager-budget/id300238550?mt=8)), a part of a product (e.g., the [News Feed](https://www.facebook.com/business/news/News-Feed-FYI-A-Window-Into-News-Feed) feature of Facebook), or at times possibly even several products.  As previously mentioned, some PMs also have P&L (profit and loss) accountability for their products.

As a PM, the major aspects you're responsible for include:

### Being the voice of the customer
**Learn:** Your greatest responsibility as a PM is to deliver value to customers through the product. To ensure you can do this you need to deeply understand customer needs, behaviours, and workflows and become the go-to expert on these.

> "No matter how good the team… if we’re not solving the right problem, the project fails."
> –Woody Williams

Customer learning is done in multiple ways, including but not limited to:
-   Site visits - this means visiting a customer at their place of work, home, etc. (whatever is relevant to your application) in order to: observe them in their environment, build empathy by understanding their experiences and needs, and better understand their workflow and behaviours
-   Surveys
-   Attending conferences - this may be less important for consumer facing applications and more helpful for B2B solutions in terms of connecting with customers
-   Listening in to Customer Care calls, reading support tickets, or reviewing monthly support data for key trends

Note that this doesn't mean you build exactly what a customer tells you they want. Instead when connecting with customers, you're trying to more deeply understanding aspects such as their behaviours, workflows, and pains to find insight into what will actually provide them value. [Henry Ford](https://en.wikipedia.org/wiki/Henry_Ford) perhaps said it best when he stated: "If I had asked people what they wanted, they would have said faster horses."

**Share:** To build the best possible product, the entire team - from Designers to Engineers - should be informed on customer needs. One way to do this is to bring along team members to customer sessions. However, it's not possible or advised to bring everyone along to every customer session (imagine 1 customer being interviewed by 7 of you!). You can also hold debriefs after customer sessions with your team to share, discuss, and synthesize learnings.

Beyond the product team, you  need to share throughout the organization. A key part of this is skillfully articulating how your solution addresses the customer pain and ensuring that others, all the way from senior leadership to front-line Customer Care agents, know too. This shared understanding across the organization helps ensure actions and decision-making are more aligned. Some ways to share broadly include sending out a Product Brief for an upcoming feature, or demoing a new feature during a Product Review session.

**Leverage:** Beyond learning and sharing, you need to ensure decision-making weighs the customer implication. For instance, if an unforeseen issue comes up during development and your Engineering team asks, “What should we do? Option A, B, or C?” One of the first things you should ask is, “What is the impact on the user for each option?”. A customer-first focus is what makes products great, and excellent Product Managers embed this focus in the entire team so when team members are making decisions or leading discussions they are always thinking: "what matters for the customer?".

### Being the voice of the business
Yes, customers always come first but you also need to consider business objectives because if you don't, you might just go out of business and then customers wouldn't get your intended benefit! In order for you to deliver value to customers long-term, ideally sooner rather than later you need to figure out how to do it in a feasible way. For this reason, it's vital that you understand your company's strategy and objectives, and ensure that your product efforts (e.g., planning what to build in the future, measuring product success, etc.) ladder up to these. For example, one of your company's key business metrics for the year might be to grow active users to 1 million users from the current 200,000 user mark. It's likely detrimental then if you commit most effort to building features to improve customer invoicing if it's never been demonstrated that this leads to any user growth or is a barrier in user adoption. Instead, you might explore promising opportunities such as streamlining the sign-up flow or testing a new refer-a-friend feature.

> "The essence of strategy is choosing what not to do."
> -Michael Porter

In this regard, you should be knowledgeable about the company's mission, vision, goals, business objectives, and business model. You should also understand the economics of your product. As you come up with ideas, you should craft a business case around it to consider and justify the investment of resources and time.

Note: It's possible to influence business objectives, and here is where excellent PMs know the customer problem, know the space, size the opportunity, and communicate this effectively to leadership so that they consider adapting their business objectives.

### Knowing the space
What are the trends? This can be broad and include things like:
-   **New technology adoption** - Are users adopting new technologies (e.g., smartwatches, VR devices, IOT, etc.) and what might be the implications and opportunities for you? Facebook was mindful of the rapid adoption of mobile devices and committed resources to creating a great mobile experience. By the end of 2014, 85% of monthly active users access Facebook through mobile and 70% of Facebook's ad revenue comes from mobile. [source](http://www.businessinsider.com/facebook-daily-active-users-q4-2014-2015-1 "More Than 80% Of Facebook's Daily Users Are Mobile")
-   **Policy** - Is relevant policy changing or possible to shift? For example, if you're AirBnB, something like [Prop F](http://www.latimes.com/business/technology/la-fi-tn-airbnb-prop-f-san-francisco-20151029-htmlstory.html) could have a significant impact on you.
-   **Consumer preferences** - How are relevant consumer preferences changing and what's driving them? Let's say you're in the business of selling clothes and data suggests that consumers are preferring to try clothing in-store to determine the right fit, and purchase online so they can explore designs and compare prices. You may want to then better facilitate this workflow through your product.
-   **Shifts in labor, practices, business models, etc.** - Are models in an entire space changing? For example, with the rapid growth in self-employed workers, Intuit has expanded the QuickBooks Online offering to include [QuickBooks Online Self-Employed](http://marketmadhouse.com/intuit-growing-with-the-freelance-economy/) so bookkeeping needs for these workers are met.

Beyond trends, what are direct and indirect competitors offering and what are the implications to your business? For example, if you're Uber, a direct competitor could be Lyft, and an indirect competitor could be other means of transportation such as mass transit or bikesharing.

If you let it, knowing the space can take up 100% of your working day. Smart PMs know how to efficiently keep a pulse on these things and filter for what's relevant to their company, product, and team. Additionally, as you become more senior, this may take up more of your job. For instance, a VP of Product Management would likely focus more on these items due to their strategic implications while junior PMs likely lean more towards execution.

### Ensure the team is doing the right things in the right way
A core part of the PM role is to help the team focus on the right things. This can seem like a daunting task - how should you know what should be investigated, prototyped, tested, or built? There are a few ways that you can figure this out. These are expanded on in future modules but at a high level include the following:

**Start with understanding the customer’s pain.** Then build a position on the corresponding customer benefit that you're trying to deliver. When doing so, it's helpful to ensure this ties into the business objectives (as described above).

**Dig deeper into the details**. Understand how you might deliver the value, how you'll know once you've succeeded, and how to realize this through a launched feature or product. When figuring these details outs, always try to (1) lead with a hypothesis and (2) validate with data (this is both quantitative and qualitative). Leading with a hypothesis means that instead of thinking of an idea (e.g., people want to be able to order pet food online and would pay a premium for it), believing that it's true without much substantiation, and moving forward to build, you instead come up with hypotheses first.

> "Data beats opinions."
> –Anonymous

For instance, you might start with hypotheses that: (1) I think people would like to order pet food online, and (2) assuming they do, they would be willing to pay a premium for it (since this is a likely way to make it a viable business). You would then test these hypotheses (we explore techniques at length in future modules) with a possible combination of qualitative and quantitative data, and running tests as necessary (e.g., gather data on price sensitivity from running a small test with users you recruit in a single city placing real orders using a simple web form). By doing this right, you would likely realize that it's a nice-to-have but not a need-to-have, especially when you consider the cost of shipping. Believe it or not, this may just help you [avoid a billion dollar meltdown in the future](http://www.cnet.com/news/pets-com-latest-high-profile-dot-com-disaster/)!

**Create a longer term plan on how to build this out (i.e., the Roadmap).** Now that you have a better sense of what will deliver value to a customer, start building the Roadmap to outline what the team will be working on for the foreseeable future, when features or iterations are targeted to release, and what intended outcomes/benefits will be. You should also realize that the roadmap is a living-and-breathing document meant to evolve, especially the further out you go in the future. It's expected that you have less confidence on the items in the more distant future and more confidence on the items closer to the present since you don't know what's going to happen between now and then. You might run tests in the future that will show a different solution than what you planned is more promising in delivering an intended outcome, and subsequently revise your Roadmap. When thinking about what to consider as part of the Roadmap, you should have some balanced criteria that considers things such as customer impact/benefit, business objectives, feasibility, effort required, and dependencies on other items.

**Get to building.** You might be thinking, "Great, I'll be done after deciding what we do for the next 6 months." That's far from reality. Now, you need to translate this into a more granular view of prioritized items (we often call these "stories") for your team to work on at least for the next several weeks. The prioritized list of these items is commonly referred to as the "backlog" and you're responsible for ensuring it's "groomed" (i.e., requirements are clearly written, stories are "sized" to reflect their complexity and are prioritized, etc.).

If that isn't enough, you not only need to do the right thing, you need to do it in the right way. This means, you ensure your core team (e.g., Designers, Engineers, etc.) and extended team (e.g., Leadership, Marketing, Customer Care, etc.) come along with you on the journey and that feedback is actively shared to improve the process. There are various ways to ensure greater communication, collaboration, reflection, and process improvement amongst teams. You might not be the only one responsible for ensuring things are done in the right way but you certainly play a key role in this.

### Delivering

You need to deliver. No, this doesn't mean your team should always be furiously working and shipping lots of features (i.e., output). It means instead that your team is committed to building and releasing things that deliver value to customers, and meet the intended outcomes of the company and product strategy. Revisiting our prior example, if one of your over-arching annual objectives is to grow active users to 1 million users from the current 200,000 user mark, and you keep on shipping features that don't improve on this, you have not delivered on your goal.

Often times, in order to deliver, you need to assume roles including:
-   **Cheerleader** - You get your team excited and energized. The development process is [not as glamorous](https://www.youtube.com/watch?v=uxKmDWDUZ5A) as it may seem, and can be filled with lots bumps, uncertainty, and in-frequent rewards. You need to keep your team excited and motivated to keep going.
-   **Obstacle remover** - You help remove obstacles for team members, whether it's a decision on what text to use or whether there are legal implications for tracking certain user data, you'll answer the question or help facilitate the process to do so with others in the organization.
-   **Connector** - You actively remain in the know about what's happening and connect dots across the team, product, and organization.
-   **Fortune-teller** - You foresee potential opportunities or risks, and work to pursue or mitigate them, respectively.
-   **Negotiator** - You win members of your team and company over to your side.

## Common PM misconceptions
Now that we've covered the responsibilities of a PM, there's also a variety of assumptions and misunderstandings about what a PM does. To clear up some of them, PMs:
-   **Do not manage people** - Unless you're senior and oversee a team of PMs (e.g., as a Group Product Manager, Product Lead, Senior Manager, Director, or VP), you generally don't manage any people. Members of the product team, including Engineers and Designers, are all your peers.
-   **Are not the sole source of ideas** - You walk in one day with an idea for what the ground-breaking product/feature, tell the team to work on it, and sit-back until it's launched to bask in the glory. This sounds nice but in reality product development is a highly iterative, collaborative process, where you're involved practically throughout. Ideas are often evolved through a hypothesis-driven approach and with various inputs.
-   **Do not throw requirements over the fence to Engineers** - Often times you will be collaborating with your Engineers to develop requirements. Requirements do change even when things are being built as you discover new things.
-   **Do not program code that's deployed to users** - This is not to say that this has never happened or will never happen in the future (e.g., you might need to be scrappy at a 3-person startup so you're part-time PM and part-time Developer). It's just that for most PMs, this is not the case. Being a PM is a meaty enough role that if you do it right, you'll have your hands full. Depending on your proficiency with coding and the organizational norm, you may from time to time pull together quick prototypes to convey an idea or scripts to analyze and share data internally.
-   **Do not tell Engineers how to solve problems** - You should be explaining to the team "what" needs to be done and allow the engineers to determine "how" to do it. Even if you have a technical background, trust them to own their domain.
-   **Are not finished once the product ships** - You're usually tasked with having a product or feature that you release meet some target outcome so your job doesn't end after you ship. Instead, after you ship, you usually iterate by reviewing how your product/feature is doing, and improving facets, such as functionality or quality.


If you want a chuckle about the PM role watch this short clip:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZiBeKrwfU90" frameborder="0" allowfullscreen></iframe>
<br>
**I encourage you to read these additional perspectives on the PM role:**
-   [A Product Manager’s Job](https://medium.com/@joshelman/a-product-managers-job-63c09a43d0ec#.ovrm5dp44) by Josh Elman
-   [Product Manager You Are… a janitor, essentially](https://medium.com/@matbalez/product-manager-you-are-664d83ee702e#.e39puajeh) by Mat Balez
-   [MVPM: Minimum Viable Product Manager](https://medium.com/swlh/mvpm-minimum-viable-product-manager-e1aeb8dd421#.va5bl12ef) by Brandon Chu
-   [We are Product Managers](https://venturegeneratedcontent.com/2013/07/11/we-are-product-managers/?utm_source=buffer&utm_campaign=Buffer&utm_content=bufferaceac&utm_medium=twitter) by Satya Patel
-   [The DNA of product management](https://www.linkedin.com/pulse/20121102003945-7298-the-dna-of-product-management) by Hunter Walk
-   [PM at Microsoft](https://blogs.msdn.microsoft.com/techtalk/2005/12/16/pm-at-microsoft/) by Steven Sinofsky
-   [So you want to manage a product?](https://productcoalition.com/so-you-want-to-manage-a-product-c664ba7e5138#.n0889n2as) by Rohini Vibha
-   [The Role of Product Managers](http://www.instigatorblog.com/the-role-of-product-managers/2012/06/08/) by Ben Yoskovitz
-   [Product Managers: Who are these ‘mini-CEOs’ and what do they do?](http://thenextweb.com/insider/2013/10/12/product-managers-mini-ceos/) by Ken Yeung
-   [What, exactly, is a Product Manager?](http://www.mindtheproduct.com/2011/10/what-exactly-is-a-product-manager/) by Martin Eriksson
-   [The Art of Product Management](http://www.sachinrekhi.com/the-art-of-product-management) by Sachin Rekhi


## A day in the life of a PM

No two PMs will have the same experience. What you can generally expect on any day is a combination of some of the following:
-   Sessions with customers - e.g., doing a site visit to learn more about customer behaviour and workflow)
-   Work sessions with your team - e.g., planning a prototype with your Designer for your next user research session
-   Unstructured time - e.g., getting pulled into an impromptu discussion with an Engineer on a new bug that surfaced
-   Meetings with various stakeholders (e.g., Customer Care, Marketing, Legal, etc.) to make decisions, share learnings, review plans, etc.
-   Time to yourself to focus on items such as: reviewing weekly product metrics and analytics, reviewing customer feedback, planning possible things for your team to work on next, keeping a pulse on the space, preparing a presentation for an upcoming meeting, and planning the next wave of user research
-   Training internal and outside parties on your product, or attending trade conferences or events to represent your company and share your product

The key takeaway is that there is a lot of variability and demands on your time. Savvy PMs know how to navigate this and strike a balance that ensures that urgent, non-important items don't suck up all of their time and instead important, non-urgent items are well addressed.

When I first started, I thought I needed to join every relevant meeting and speak to every stakeholder that wanted to speak with me. This led to meetings being the bulk of my day, and then me trying to work on my own tasks during the early mornings or nights. This is not recommended or sustainable in the long-term. I learned to be more effective by knowing (1) what was important (i.e., which actions would help me best deliver value to customers, empower my teams, and bring others along on the journey), and (2) what could be handled in other ways (e.g., responding with an email instead of a 30-minute meeting or nicely saying "no, I don't think this is a priority"). I also found that being very intentional about meetings helped cut down on them. Specifically, I needed to be confident that a meeting was needed and clear about necessary decisions/outcomes. I would prepare an agenda to share with attendees in advance and ensured that no necessary attendees were missed (which often results in a future follow-up meeting). As with any business owner, a PMs success is often dictated by what they say no to. Saying no to feature requests. Saying no to meetings. A good product manager is mindful of their time.

**Here are additional perspectives on the day-to-day PM experience:**
-   [So, What Do You Actually Do As A Product Manager?](https://medium.com/all-things-product-management/so-what-do-you-actually-do-as-a-product-manager-6baf424148c1#.ga3henb0d) by Catherine Shyu
-   [Day In the Life of a Product Manager](https://www.productmanagerhq.com/2014/06/day-in-the-life-of-a-product-manager/) on Product Manager HQ
-   [What is a day in the life of a Product Manager like?](https://www.quora.com/What-is-a-day-in-the-life-of-a-Product-Manager-like) on Quora

## PM characteristics for success

Yes, all PMs should have strong product sense and understand business fundamentals. Beyond that there are additional few characteristics that are vital for PM success. Don't worry if you feel you're lacking on any - I'm still nurturing these myself and even the best PMs can continue challenging themselves to grow. Some PMs are much stronger on certain attributes (e.g., hustle) and use it to their advantage to succeed. Whatever your strengths are, I've observed the following attributes need to be present in some capacity for a PM to succeed:

### Empathy
Successful PMs foster a deep sense of empathy towards customers and their team. At the end of the day, your aim is to build great products to benefit your customers and collaborating with your team is how you'll be able to deliver on this goal. You care about the customer’s pain points and aren't satisfied with a superficial understanding; instead you dig deeper to discover underlying insights. Likewise, you care about the well-being of your team and how the journey is going for them. It's not success if you ship a great product but your team feels undervalued or not invested in the outcomes; such scenarios usually decrease the chances that you even ship a great product. Great teams work together to deliver great products. As a PM, you should strive to create an environment where your team is able and excited to do their best work. It all starts with empathy.

### A willingness to ask questions
PMs are problem solvers and successful PMs don't assume that they know the answer. Instead, they ask questions and skillfully leverage their teams and data to fill in gaps in their understanding, and then proceed to make decisions. This could mean:
-   You ask Engineers about the relative effort of implementing a feature one way versus another and understand the pros and cons of each
-   You ask PM peers that are more knowledgeable on a topic for their opinion
-   You ask the analytics team why they think there might be a dip in a metric because to you there doesn't seem to be a reasonable cause. I've come across previously unknown data processing issues because I've been willing to ask a question!
-   Even if you have a personal hunch, unless it's a no-brainer (e.g., users don't like making 5 clicks to complete a possible 1 click action), you put in the effort to sufficiently validate your hypothesis through experimentation (e.g., using A/B testing)

Beyond just providing you with a more complete picture, asking questions can help challenge your teammates to more thoroughly consider their ideas. It could be as simple as asking your Engineering Lead, "what could enable us to decrease development for a feature?" You would be surprised how often I've witnessed that asking questions has prompted discussions that lead to better outcomes.

So remember, don't be shy about asking questions and leave your fear of looking stupid at the door. I'd much rather "risk" looking stupid then make a poor decision because I was too fearful to better understand the situation. A PM's role is not to come in with all of the answers - it's to gather and weigh the right information to arrive at good answers.

### Structured decision-making
A bulk of your role involves making weighing trade-offs (e.g., do we go with solution A or solution B), prioritizing items (e.g., do we work on feature A or feature B first), and making decisions (e.g., our launch date will be August 24th). It is invaluable then that you approach things in a repeatable and logical way because it will increase your likelihood of making more sound decisions. Yes, you may get lucky with a few impulsive decisions, but considering there's always a fair share of complex decisions to be made, this is not a strategy for success. Additionally, you're often going to need to communicate your thinking to others.

To make better decisions, you should try to come up with a set of relevant criteria and evaluate decisions against it. This comes with practice, and at first you'll likely need to invest thoughtful time upfront to do so. As you get better, this will become second nature and you'll find yourself doing it on the fly. It's worthwhile to note that structured decision making does not imply you make a 10-criteria matrix for every single decision and try to check off every box. For instance, if you're finding users are struggling to see a gray font on a white background, you likely don't need to over deliberate on what possible improvements may be. Use your judgement - if a non-obvious decision needs to be made, put on your structured decision-making hat!

**Read the following if you're interested in learning more about decision-making in a product context:**
-   [6 decision-making techniques all Product Managers should know](https://blog.pivotal.io/labs/labs/6-decision-making-techniques-product-managers-know) by Joanna Beltowska
-   [How To Turn Bad Ideas Into Good Ideas](http://www.producttalk.org/2014/02/how-to-turn-bad-ideas-into-good-ideas/) by Teresa Torres
-   [Don’t Make Snap Product Decisions](http://www.producttalk.org/2013/10/dont-make-snap-product-decisions/) by Teresa Torres
-   [The Art of Decision Making as a Product Manager](http://www.sachinrekhi.com/the-art-of-decision-making-as-a-product-manager) by Sachin Rekhi

### Strong communication skills
Oral and written communication is very important to your success as a PM. On the oral communication front, you will routinely be connecting with various stakeholders in meetings and work sessions (e.g., core team members, functional partners, leadership, etc.), running customer research sessions, or presenting. As a result, it's important for you to be able to both engage in and drive discussions, dig-deeper into others' ideas, and effectively communicate your own. On the written communication front, you will often be writing emails, requirements, or preparing presentations to convey your thinking. In order for you and your team to be on the same page, it's important that you can succinctly convey your ideas in a way that others can understand.

> "A great product manager has the brain of an engineer, the heart of a designer, and the speech of a diplomat."
> –Deep Nishar

### Strong leadership ability
PMs are leaders. They are vital to a product and company's success and can have significant impact on their core and extended teams. That said, they generally don't manage other people and must lead through influence. For example, you may have a strong leaning towards pursuing one of two options for a key design decision. Instead of forcing it through and potentially upsetting folks, you can win them over by supporting your position with customer input and data.

There is no single formula for successful leadership and every leader has his/her own strengths and preferences on how to lead. When it comes to product management, the most inspirational leaders I've seen often lead with a combination of the following:
-   **Inspiration** - These leaders routinely bring things back to the "why" and lead with a vision. This doesn't mean that they're all mythical figures like Oprah either. Often times what can inspire your teams are other traits such as consistency, a deep-customer focus, integrity, and a can-do attitude.
-   **Humility** - These leaders leave their ego at the door and put the interests of their customers and teams first. They go even further and generously share success with their teams but step up to take the burden of responsibility.
-   **Stewardship** - These leaders are focused on making those around them better. Through my experience, I've come to believe that excellent PMs should "be the rocket, not the battery." This means that they don't make their teams so dependent on them that without them things shut down. Instead they build their teams up so that they function well without much intervention. Instead, when they do intervene, it's to propel them much further.

### Hustle
Remember, you're responsible for delivering. This means that you have great hustle and do what's needed - be it removing obstacles for your team or getting your hands dirty (e.g., instead of getting a perfect breakdown of data from an analytics analyst you do some quick and dirty analysis yourself to get the ball rolling). Note, this doesn't mean you run around like a chicken with its head cut-off and focus on putting out fires or micromanaging others to get things done. Going hand-in-hand with first knowing what the right things are to focus on, hustle then ensures you are proactive in delivering on these commitments.

### A growth mindset
The PM role is extremely versatile and requires someone that is willing to learn and be challenged by new things. Technology is moving at breakneck speeds, and much of your role is to make progress through uncertainty and complexity. Likewise, you need to be a subject matter expert in your domain - this means knowing the customer, knowing the applications, and knowing the market. Understandably, we all need to start somewhere. When I joined Intuit I was not an expert in any way on the accounting or small business spaces; however, I invested in learning. Being knowledgeable on your relevant domain helps you make decisions that lead to better product outcomes. Since things are always changing, it requires a continued investment to stay up to speed. So as a PM navigating this, one of your most valuable assets is to be curious to learn new things. This includes being open to feedback and coaching, and a willingness to change your position.

<br>
Take a look at Medha Ghatikesh's infographic below - it captures many of the aspects that embody the PM craft and I feel are important to be successful in the role:

<img src="/images/pm_manifesto.png" width="371" height="529" />
[*The PM's Manifesto (Source: Medha Ghatikesh on Medium)*](https://medium.com/medha-ghatikesh/the-product-manager-s-manifesto-infographic-633527b2567e#.aqgorjr9u "Caption")
<br>
**This is my perspective. Here are additional thoughts on the common characteristics of successful PMs:**
-   [What distinguishes the Top 1% of Product Managers from the Top 10%?](https://www.quora.com/What-distinguishes-the-Top-1-of-Product-Managers-from-the-Top-10) on Quora
-   [Good Product Manager/Bad Product manager](http://www.khoslaventures.com/wp-content/uploads/Good_Product_Manager_Bad_Product_Manager_KV.pdf) by Ben Horowitz and David Weiden. Note: Horowitz recently suggested that having been written 15+ years ago, much of this likely isn't relevant; however, I feel there still many valuable points in it
-   [Why Companies Need Full-Time Product Managers - Characteristics Of A Good Product Manager](https://www.smashingmagazine.com/2014/09/why-companies-need-full-time-product-managers/#characteristics-of-a-good-product-manager) by Rian van der Merwe
-   [Good vs Bad product management](https://medium.com/@giffco/good-vs-bad-product-management-60d0d276f129#.x8gejwbyr) by Giff Constable
-   [What makes someone a great Product Manager at Google?](https://www.quora.com/What-makes-someone-a-great-product-manager-at-Google) on Quora
-   [The 3 Skillsets that Make Successful Product Managers](http://blog.kentonkivestu.com/3-skillsets-for-PM-success) by Kenton Kivestu
-   [What It Takes to Be a Great Product Leader: The Four Pillars](http://techproductmanagement.com/what-it-takes-to-be-a-great-product-leader-the-four-pillars/) by Daniel Elizalde
-   [What skills are needed to be an effective Product Manager?](https://www.youtube.com/watch?v=RNmOml4thdw) courtesy of Google Ventures


## The PM role varies based on context
Its valuable to reiterate that context matters and the what you focus on as a PM can vary significantly depending on the product you're working on. Is it a mature product, or an early-stage product? Is it a consumer facing product or a B2B enterprise product? Product Manager HQ has a great article on the different types of products PMs can manage [here](https://www.productmanagerhq.com/2014/11/6-types-of-products-that-pms-manage/) that you should read. Based on your product, certain tasks are more applicable and deliver more value. For instance, if you're a PM at a large company working on an established product (e.g., QuickBooks Online) more of your role may focus on maintenance, optimization (e.g., streamlining workflows in the product), and incremental improvement (e.g., new features) since often it's been validated that the core software provides value and has adoption. On the other hand, if you're a PM at a small startup, you may still be trying to figure out what the right product is to deliver value to customers. As a result, you may be focused much more on customer and product discovery efforts to determine what delivers the core value instead of maintenance, optimization, or incremental improvement efforts.


## Product life cycle

The product life cycle is a simple conceptual framework that describes the stages a product goes through from launch through it's eventual decline and what is important during stage. Read the well-prepared description [here](http://productlifecyclestages.com/) on the product life cycle and its stages.

<img src="/images/prod_lifecycle.jpg" width="377" height="320" />
[*Different stages of the product life cycle (Source: PR Newswire)*](http://photos.prnewswire.com/prnvar/20140806/134162?max=650 "Caption")

The framework has its origins in physical products (that's why you see references to manufacturing). However, it's still applicable in software development and the key learning is that products undergo a journey, and their adoption, sales (if applicable), and use vary throughout their lifetime and are influenced by a combination of internal (e.g., new feature development, marketing, etc.) and external (e.g., competitors, customer preferences, etc.) factors. As a PM, you need to think about products throughout different stages of their life and adopt a relevant focus at each stage. In future modules we delve deeper into what to consider at different stages.


## Software development life cycle

The software development life cycle refers to the process of planning, designing, and developing software. As expected, there are several different ways of doing so; each have their own pros and cons and are applicable in different product scenarios. Two major approaches to be familiar with are:

-   **Waterfall** (also called Traditional Development) has a sequenced approach to software development, where the key stages in the diagram below are completed one after another.
<img src="/images/waterfall.jpeg" width="475" height="177" />
[*The Waterfall approach is sequential and can span several months (Source: Screenmedia)*](http://www.screenmedia.co.uk/blog/2014/08/what-is-agile-development-a-brief-introduction/ "Caption")

-   **Agile** focuses on "adaptive planning, evolutionary development, early delivery, and continuous improvement". [source](https://en.wikipedia.org/wiki/Agile_software_development "Agile Software Development")

<img src="/images/agile.jpeg" width="452" height="169" />
[*The Agile approach is iterative and happens in small "sprints" usually lasting 1-2 weeks (Source: Screenmedia)*](http://www.screenmedia.co.uk/blog/2014/08/what-is-agile-development-a-brief-introduction/ "Caption")

Read through an expanded overview of each approach [here](http://www.screenmedia.co.uk/blog/2014/08/what-is-agile-development-a-brief-introduction/). Currently in software development, Agile practices are preferred over Waterfall since they allow product teams to illicit more customer feedback through frequent smaller releases, and make faster changes based on new learning. We cover how to employ Agile and SCRUM, one of the most popular ways in which Agile is employed, in a future module.

It may seem that Waterfall is a thing of the past. Back in the days of CD-ROM based desktop software, the Waterfall model made sense. It would be silly to ship millions of physical CDs of Microsoft Office that were a work-in-progress and then ship out new CDs every time new features were added or bugs were fixed. With the internet now mainstream, most consumer software has shifted away from Desktop-only products to either entirely web-based or hybrid (i.e., you have a desktop-based app but the content and storage is primarily done on the web - for example [Dropbox's desktop app](http://www.engineering.hku.hk/tecHKU/2015/06/01/wids15-hybridapps/)), and the Agile approach is often more appropriate. Being able to easily distribute updates over the internet provides the flexibility to rapidly iterate and improve software.

There are still applications though where Waterfall practices are more appropriate than Agile (e.g., think of mission critical software such as what's run in a Nuclear Plant). Beyond software, aspects of the Waterfall approach are also used in developing new technologies. For instance, companies like Fitbit don't release work-in-progress devices on a bi-weekly basis. Instead, they are more thoughtful upfront about their product roadmap and what physical components need to include in their devices for possible future development of new features. This way, they can sell a watch, build a new feature later, and then just get customers to update their software to receive the new functionality.

**In case you're interested, here is additional reading on software development approaches:**
-   More detailed comparison between Waterfall and Agile captured [here](http://www.seguetech.com/blog/2013/07/05/waterfall-vs-agile-right-development-methodology) and [here](http://covalentmarketing.com/blog/2015/10/19/software-development-lifecycle-waterfall-vs-agile-2/)
-   [What are the pros and cons of the waterfall and agile/scrum project management approach?](https://www.quora.com/What-are-the-pros-and-cons-of-the-waterfall-and-agile-scrum-project-management-approach) on Quora
-   History into the evolution of different software development approaches and an overview into several other variations on Wikipedia [here](https://en.wikipedia.org/wiki/Software_development_process)

### Further reading
To gain more of an overview on software product management, I recommend reading:
-   [Inspired: How to Create Products Customers Love](http://www.amazon.com/Inspired-Create-Products-Customers-Love/dp/0981690408/ref=sr_1_1?ie=UTF8&qid=1462323442&sr=8-1&keywords=inspired+marty+cagan) by Marty Cagan
