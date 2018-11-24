

# Overview
Existing content lived in Confluence Cloud
We want to get this content into this site i.e. from Confluence to MarkDown to our site.

# Export content from Confluence

ref: https://www.npmjs.com/package/confluence-to-github-markdown


From Confluence:
1. Go to the space and choose Space tools > Content Tools on the sidebar.
2. Choose Export. This option will only be visible if you have the 'Export Space' permission.
3. Select HTML then choose Next.
4. Decide whether you need to customise the export:
    1. Custom to select a subset of pages to export
    2. Specified page or group of pages can be selected
5. This takes a few minutes and produces a zip e.g. 6 pages took 12 minutes to create export zip
6. Unzip zip to ~/openstemkids/conf/OP/ 
    ```
    ls OP/
    12 -rw-rw-r-- 1 node node  9392 Nov 23 14:25 Ozobot-Basics---Space_595787844.html
    12 -rw-rw-r-- 1 node node 11072 Nov 23 14:25 Ozobot-Dance-Off_594968676.html
    8 -rw-rw-r-- 1 node node  4115 Nov 23 14:25 Ozobot-Groove_594903065.html
    8 -rw-rw-r-- 1 node node  4332 Nov 23 14:25 Ozobot-WebGames_595034216.html
    4 drwxrwxr-x 4 node node  4096 Nov 23 14:25 attachments
    4 drwxrwxr-x 3 node node  4096 Nov 23 14:25 images
    4 -rw-rw-r-- 1 node node  3129 Nov 23 14:25 index.html
    ```




# Convert content to Markdown
We'll use existing Node docker container for this. 

From host:

```
docker pull node

sudo docker run --rm -it -v ~/openstemkids/:/tmp node  bash #share dir from host, and run shell on container

```


From Docker Node Container:
```
//install pandoc deb
apt-get update
apt install pandoc 

//install npm pandoc and confluence-to-github-markdown 
npm install node-pandoc
npm install -g confluence-to-github-markdown 

cd /tmp/conf/OP
confluence-to-github-markdown //convert to Markdown

ls Markdown/    
OP-OpenSTEMKids.md  OpenSTEMKids-:-About-Ozobot.md  OpenSTEMKids-:-Ozobot-Basics---Space.md  OpenSTEMKids-:-Ozobot-Dance-Off.md  OpenSTEMKids-:-Ozobot-Groove.md  OpenSTEMKids-:-Ozobot-WebGames.md


```


## Fix Youtube links

The generated markdown looks like this e.g.
```
1.  <a href="https://www.youtube.com/watch?v=CUZ7QSI2Gfg" class="external-link">https://www.youtube.com/watch?v=CUZ7QSI2Gfg </a><span class="watch-title" title="Herrington Elementary uses Ozobots to teach coding">Herrington Elementary uses Ozobots to teach coding</span>
```

we want it to look like this e.g.
```
[![Herrington Elementary uses Ozobots to teach coding](http://img.youtube.com/vi/CUZ7QSI2Gfg/0.jpg)](http://www.youtube.com/watch?v=CUZ7QSI2Gfg)

```
where http://img.youtube.com/vi/LINK/ contains 0.jpg, 1.jpg,...


# Import Markdown to our site