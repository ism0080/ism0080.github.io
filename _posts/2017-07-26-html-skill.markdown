---
layout: post
title:  "HTML"
date:   2017-07-26 21:35:00 +0000
categories: jekyll update
---
The [website][website] brief was: \\
"You are required to build a website for your client, Hubert Humperdinck, who is an art collector with a vast collection he wishes to share with the world via the World Wide Web. Hubert has decided that you will create a website for one artist in his collection."

It also needed to be responsive through the use of media queries so that any device could easily view the website.
{% highlight css %}
@media only screen and (max-width: 81em) {
    body {
        width: 95%;
    }
	
	footer {
		width: 100%;
	}
}
{% endhighlight %}

[website]: /HTML/great-art