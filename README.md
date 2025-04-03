# ProgettoShop

Un'applicazione per la gestione di uno shop online di articoli elettronici.

## 📌 Descrizione

**ProgettoShop** è una piattaforma di e-commerce sviluppata con un'architettura **front-end** e **back-end** separate.  
L'obiettivo è offrire un'interfaccia intuitiva per gli utenti e una gestione semplice dei prodotti per gli amministratori.

## 🛠️ Tecnologie utilizzate

- **Front-end**: TypeScript, HTML, CSS  
- **Back-end**: Java con **Spring Boot**  
- **Database**: **PostgreSQL**  
- **Gestione pacchetti**: NPM (per il front-end), Maven/Gradle (per il back-end)  

## 📁 Struttura del progetto

- **ShopFR/** → Contiene il codice del front-end  
- **ShopBK/** → Contiene il codice del back-end  

## 🚀 Installazione e Avvio

### 1️⃣ Clonare il repository

```sh
git clone https://github.com/l3gix/ProgettoShop.git
cd ProgettoShop
```

### 2️⃣ Configurare il Database PostgreSQL

Assicurati di avere PostgreSQL installato e in esecuzione.  
Crea un database chiamato **progettoshop** e configura le credenziali nel file `application.properties` o `application.yml` del back-end.

```properties
# src/main/resources/application.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/progettoshop
spring.datasource.username=tuo_utente
spring.datasource.password=tua_password
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
```

Se hai Docker, puoi avviare PostgreSQL rapidamente con:

```sh
docker run --name progettoshop-db -e POSTGRES_USER=tuo_utente -e POSTGRES_PASSWORD=tua_password -e POSTGRES_DB=progettoshop -p 5432:5432 -d postgres
```

### 3️⃣ Avviare il Back-end (Spring Boot)

```sh
cd ShopBK
mvn clean install
mvn spring-boot:run
```

_Oppure, se usi Gradle:_

```sh
gradle build
gradle bootRun
```

Il server sarà disponibile all'indirizzo `http://localhost:8080`.

### 4️⃣ Avviare il Front-end

```sh
cd ../ShopFR
npm install
npm start
```

L'app sarà accessibile all'indirizzo `http://localhost:3000` (o la porta configurata).

## 📌 Contribuire

1. **Forka** il progetto  
2. **Crea una branch** (`git checkout -b feature-nuova`)  
3. **Apporta le modifiche**  
4. **Committa le modifiche** (`git commit -m "Aggiunta nuova feature"`)  
5. **Push** (`git push origin feature-nuova`)  
6. Apri una **Pull Request** 🚀  

## 📜 Licenza

Distribuito sotto la licenza **MIT**. Vedi il file `LICENSE` per ulteriori dettagli.

---

💡 _Sentiti libero di modificare il file per adattarlo meglio al tuo progetto!_ 🚀  
