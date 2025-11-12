## Description
Deployment of a static site on Backblaze B2 as part of the Distributed Programming Cloud Hello World project.
The site is hosted in a public bucket, allowing access via a direct URL.

---

##  Project Information
- Provider: Backblaze B2 (object storage)
- GitHub Repository: https://github.com/jatulcanaza/cloud-hello-world
- Public URL: `https://f005.backblazeb2.com/file/hello-b2/index.html`
- DockerHub (evidence):[https://hub.docker.com/r/aceofglass14/hello-multicloud/tags](https://hub.docker.com/layers/aceofglass14/hello-multicloud/backblaze/images/sha256-f8bfd3835d817baaa7915489294bac6602db2da2c85f9fe6e40e896a31afcac5) (`backblaze`)
---

## Deployment
1. Create a public bucket in Backblaze B2 (e.g., `hello-b2`).
2. Upload the site files, respecting the structure:

index.html
css/
styles.css
img/
logo.png
...

3. Verify that the MIME type of the files is correct:
- `.css` → `text/css`
- `.jpg` / `.png` → `image/jpeg` or `image/png`
4. Access the site using the public URL:
https://f005.backblazeb2.com/file/hello-b2/index.html

---

##Docker image (evidence)
```bash
docker build -t aceofglass14/hello-multicloud:backblaze .
docker push aceofglass14/hello-multicloud:backblaze


## Evidence

### Successful deployment on Netlify
!Deployment Panel(img/deploy.png)

### Site up and running
!Browser displaying Hello World(img/browser.png)

### Docker image uploaded
!DockerHub Evidence(img/dockerhub.png)
