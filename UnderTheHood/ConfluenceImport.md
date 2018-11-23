

# Overview
Existing content lived in Confluence Cloud
We want to get this content into this site i.e. from Confluence to MarkDown to our site.

# Export content from Confluence

ref: https://www.npmjs.com/package/confluence-to-github-markdown


From Confluence:
1. Go to the space and choose Space tools > Content Tools on the sidebar.
2. Choose Export. This option will only be visible if you have the 'Export Space' permission.
    1. https://crashedmind.atlassian.net/wiki/spaces/doexportspace.action?key=OP 
3. Select HTML then choose Next.
4. Decide whether you need to customise the export:
    1. Custom to select a subset of pages to export
    2. Specified page or group of pages can be selected
5. This takes a few minutes and produces a zip e.g. 6 pages took 12 minutes to create export zip
6. Copy zip to ~/openstemkids/conf/OP


# Convert content to Markdown
We'll use existing Node docker container for this. 

From host:

```
docker pull node

sudo docker run --rm -it -v ~/openstemkids/:/tmp node  bash #share dir from host, and run shell on container

```


From Docker Node Container
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





# Import Markdown to our site