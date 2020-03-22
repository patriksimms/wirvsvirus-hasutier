<img src="https://i.imgur.com/fAzskNO.png">
<h1>#WirVsVirus Hackathon März 2020</h1>

<h2>Running the App locally</h2>
<p>Benötigte Tools für das lokale ausführen</p>
<ul>
<li>docker (docker-compose)</li>
</ul>

<p>Erstes Ausführen</p>

```bash
$ docker-compose up --build
```

<p>Ab dem 2 starten und solange es keine Änderungen an der package.json gibt</p>

```bash
$ docker-compose up -d
```

<h2>Running the App in Google Cloud</h2>
<p>Die aktuelle Version der Website läuft in der Google Cloud. Konkret wird eine 
Compute Instanz n1 ausgeführt via docker-compose mit einem angepassten docker-compose.prod.yml Um eine neuer Version zu 
deployen müssen folgende actions vorgenommen werden:</p>

```bash
$ git pull
$ docker run --rm \
      -v /var/run/docker.sock:/var/run/docker.sock \
      -v "$PWD:$PWD" \
      -w="$PWD" \
      docker/compose:1.24.0 up -f docker-compose.prod.yml --build
```

<h4>Techstack</h4>
<ul>
<li>Nestjs</li>
<li>Materalize</li>
<li>jquery</li>
<li>sqlite</li>
<li>mysql (Google cloud SQL)</li>
</ul>

<p>Dieses Projekt ist im Rahmen des Hackathons entstanden. Hier ist unsere DevPost Seite</p>
<a href="https://devpost.com/software/045_haustierpflegevermittlung"> https://devpost.com/software/045_haustierpflegevermittlung</a>

