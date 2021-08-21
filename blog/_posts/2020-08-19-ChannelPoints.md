---

 title:         "How to set up Cool Channel Point Rewards"

 description:   "A guide on how to setup some Channel Point rewards"

 headerImage:   "/assets/images/channelpoints.jpg"

---

<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@mmattbtw" />
<meta name="twitter:creator" content="@mmattbtw" />
<meta property="og:url" content="https://mmatt.net/blog/2020/08/19/ChannelPoints.html" />
<meta property="og:title" content="How to set up Cool Channel Point Rewards" />
<meta property="og:description" content="A guide on how to setup some Channel Point rewards" />
<meta property="og:image" content="https://mmatt.net/assets/images/channelpoints.jpg" />

*originally written: https://www.reddit.com/r/Twitch/comments/iw13xu/cool_channel_point_reward_ideas_and_how_to_set/*

Hello everyone! I come to you with some Channel Point reward ideas, based on some of the ones on my personal channel. Here we go!

Before I start I'm gonna leave a quick disclaimer:

**u/mmattbtw is NOT a developer, staff member, or affiliated in any means with these software / programs I (u/mmattbtw) uses in this guide, I am not responsible for anything going on with the development and progress of any of these programs.**

First I have the emote pop ups on my screen using [Triggerfyre](https://overlays.thefyrewire.com/widgets/triggerfyre/) (you could also use [Mix It Up](https://mixitupapp.com/) however for my stream I used Triggerfyre.) 

1. To set it up, sign into [Triggerfyre](https://overlays.thefyrewire.com/widgets/triggerfyre/) and join thefyrewire's Discord (to abide with r/Twitch's rules, I can not link the server.) Once in there, follow the instructions in #updates, and then click on the header in #triggerfyre-beta. There you will find the instructions on how to setup the SE Overlay. 
2. Once you do that in SE and add the SE overlay into OBS (doesn't matter if it's Streamlabs OBS, or OBS Studio, should still work)
3. Then head to your [Twitch Dashboard](https://twitch.tv/dashboard) then navigate to Community > Channel Points > Manage Rewards & Challenges. (note you do have to be at least a Twitch Affiliate to gain access to channel points at the moment.)
4. Once there, scroll down and click "Add New Custom Reward". There, for my use of Triggerfyre, I have emotes that pop up on my screen, so in the name I would put the emote's name, then add a cost, icon, etc.
5. Once you are done setting that up on Twitch, you can head back over to your [Triggerfyre Dashboard](https://overlays.thefyrewire.com/widgets/triggerfyre/) and add an image. There you would put a command name, add the image, size, position, duration, etc. 
6. Now make sure you click the dollar sign icon ($) and then add in your Channel Point reward name (case sensitive). 
7. After that, refresh your SE Overlay and you should be done!


The second Channel Point reward that I have on my stream is automated Twitch things using [Mix It Up](https://mixitupapp.com/). So things like putting the chat in Subscriber Only mode for a set amount of time, getting VIP in the channel, modding someone, unmodding someone, clearing the chat room, timing people out, ads, shout outs, chat messages, and even clips! However, for the sake of how long it would be to explain all of that, I am going to explain how to do something like automated Subscriber Only mode with Channel Points.

1. Download [Mix It Up](https://mixitupapp.com/) and set it up with a bot account and a streamer account.
2. Click the three lines on the top left, then click Channel Points.
3. Then head to your [Twitch Dashboard](https://twitch.tv/dashboard) then navigate to Community > Channel Points > Manage Rewards & Challenges. (just like before!)
4. Once there, scroll down and click "Add New Custom Reward" (or for this purpose, Twitch already has a preset Channel Point reward for Emote Only Chat but we can change it to say "Subscriber Only Chat", so you can add that by clicking "Visit the Collection", then scrolling down to the "Twitch Related" section, click "Show More", then add the "Emote Only Chat" one, after that edit it to say "Subscriber Only Chat") Once created, adjust price, icon, name, etc.
5. Head back to your Mix It Up app, and click the "Add Command" button, then click "Advanced Command".
6. Under "Reward Name" copy and paste your exact Twitch Channel Point reward name (case sensitive).
7. Next to where it says "Action:" click the drop down. 
8. Here you will see all sorts of actions! ([More information here on the Mix it Up wiki!](https://github.com/SaviorXTanren/mixer-mixitup/wiki/Actions))
9. Since we are doing Subscriber Only Chat, we are going to need a "Chat Message", so add that.
10. Again, since we are doing a Subscriber Only Chat reward, type in "/subscribers"
11. Click the Floppy Disc Icon to save!

After that, if you just want it to turn on Subscriber Only Chat and thats it, well you are done! (if you want it to turn off subscriber only chat after a certain amount of time, see these steps.

1. Add a Wait action, and say how many seconds you want Sub Only chat to be on.
2. Add another chat message action, then type in "/subscribersoff"

Finished!)

So in the end, it look something similar to this (I added extra chat messages, and a really long wait time) https://i.imgur.com/l7ZnYTc.png

Another Channel Point reward in my stream is "Tweets something on Matt's account!". I know, scary. But within moderation, is pretty cool. I would recommend making this reward a lot, and I mean **A LOT** of Channel Points, you don't want some random troll to follow you, get 300 Channel Points, then tweet something bad on your account. Again, be careful with this one, and **I WOULD NOT RECOMMEND USING THIS ON A WELL KNOWN ACCOUNT, MAYBE USE A SECOND TWITTER ACCOUNT**. Anyhow, disclaimer out of the way, let me show you how to make this!

1. This uses the Mix it Up app again, so open that thing back up!
2. Click the three lines in the top right of the app, then click "Services". Here you see a bunch of things you can connect to Mix it Up and play with, however we are going to focus on Twitter.
3. Click the Twitter section, then connect the Twitter account you want the reward to post from.
4. Head back to the Twitch Dashboard and make the reward with "Require Viewer to Enter Text" checked. [If you missed it, head to your [Twitch Dashboard](https://twitch.tv/dashboard) then navigate to Community > Channel Points > Manage Rewards & Challenges. (note you do have to be at least a Twitch Affiliate to gain access to channel points at the moment.). Once there, scroll down and click "Add New Custom Reward". Then add a cost, name, icon, etc.]
5. Go back to Mix it Up, and head back to the Channel Points tab.
6. Add the reward (case sensitive name!!!) then this time, add a "Twitter" action.
7. For the type click on the drop down, then click (Send Tweet).
8. After this we are going to use some of the [Channel Point Special Identifiers](https://github.com/SaviorXTanren/mixer-mixitup/wiki/Channel-Points).
9. In the "Tweet Message" box, for the bare minimum type "$message" in the box and nothing else, however in my opinion, to play it safe, add who it was sent by and how. so something like "$message [sent via channel points, $username]". ($message shows the message that they put in the message box on Twitch, then the username shows what username redeemed it.)
10. Done!

In the end, it should look something like this https://i.imgur.com/ogiJnC9.png .

Make sure your community knows the bot can't do @mentions on tweets (I would recommend putting that in the channel point reward description).

Now for the final channel point reward, lets make a Text to Speech reward using Mix It Up.


1. Open up Mix it Up and go to the Services tab.
2. Click Overlay **Make sure Mix it Up is running before OBS, so the Overlay will work**.
3. Copy the " http://localhost:8111/overlay " onto a Browser Source into OBS.
4. Go back to Mix it Up, type in the name of the Browser Source that was in OBS, into Mix it Up, then click Connect.
5. Go back to the Twitch Dashboard and make the TTS reward with "Require Viewer to Enter Text" checked.
6. In Mix it Up, go to the Channel Points section, add a reward (case sensitive name D:<<<<).
7. Add a [Text to Speech](https://github.com/SaviorXTanren/mixer-mixitup/wiki/Actions#text-to-speech) action.
8. Adjust the Text to Speech settings as you want, then type "$message" into the Speech Message box. (if you want you can also include $username to include the person who sent it)
9. Save the reward
10. Refresh the browser source
11. Done!

In the end, it should look something like this https://i.imgur.com/Z4Bi8zb.png


Of course this isn't all you can do with these tools, you can do a lot more and add your own flavor to the rewards. These tools are very powerful, so use them wisely. 

**HUUUUUGE SHOUT OUT TO THE DEVELOPERS OF THESE PROGRAMS**


Program | Developer | Program Link
-------|---------|------------
Triggerfyre | [thefyrewire](https://www.twitch.tv/thefyrewire) | https://overlays.thefyrewire.com/widgets/triggerfyre/
Mix It Up | [Mix it Up Twitch Page](https://www.twitch.tv/mixitupapp) | https://mixitupapp.com/

Huge thank you for reading.

Here are some useful links for Mix it Up:

Wiki: https://github.com/SaviorXTanren/mixer-mixitup/wiki

YouTube:  https://www.youtube.com/channel/UCcY0vKI9yqcMTgh8OzSnRSA

Feature Backlog: https://trello.com/b/piWuuW4Y/feature-backlog

Any help I would Direct to these places for these programs.


Program | Support Place
-------|-------------
Triggerfyre | [Discord Server](https://discord.thefyrewire.com/)
Mix it Up | [Get in Touch](https://mixitupapp.com/#contact)

I will also try to help as many people as I can in the comments, such as if you are having problem with something that I could fix, or if you want to see how I setup some other things, just let me know!
