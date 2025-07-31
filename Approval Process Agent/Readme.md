# 🤖 Salesforce Approval Processes AI Agent

Welcome to the **Salesforce Approval Processes AI Agent** project!  
This agent helps you explore and understand Salesforce **approval flows and metadata** using AI — powered by **BigQuery** and **Make** automation.

---

## 📚 Table of Contents

- [📁 Project Structure](#-project-structure)
- [🧰 Requirements](#-requirements)
- [🛠 How to Build the Agent](#-how-to-build-the-agent)
- [🧠 Agent Architecture (Mermaid Diagram)](#-agent-architecture-mermaid-diagram)
- [📌 Notes & Tips](#-notes--tips)

---

## 📁 Project Structure

```
├── AI4SF - Get Approval Processes Metadata From Github.blueprint.json
├── AI4SF - Get BigQuery Data for AI Agent.blueprint.json
├── BigQuery_Approval_Processes_Table_Schema.json
├── approval_processes_tags_explained.avro
├── extractObject.js
├── PROMPT_approval_processes.txt
```

---

## 🧰 Requirements

- ✅ Google Cloud **BigQuery** account
- ✅ **Make.com** Enterprise account
- ✅ **Git repository** containing your Salesforce metadata
- ✅ Required credentials:
  - 🔑 API URL to your Git repository
  - 🔑 API token
  - 🔑 Connection to BigQuery (service account or OAuth)

---

## 🛠 How to Build the Agent

### 1. Set Up BigQuery Tables

#### A. Create the `approval_processes` table

- Open BigQuery and create a new **dataset**
- Inside the dataset, create a new **empty table** named:  
  ➤ `approval_processes`
- Under **Schema**, choose “Edit as text” and paste the content of:  
  ➤ `BigQuery_Approval_Processes_Table_Schema.json`

#### B. Create the `approval_processes_tags_explained` table

- Create a new table → select **Upload**
- Upload the file:  
  ➤ `approval_processes_tags_explained.avro`
- Format: **AVRO**
- Table name:  
  ➤ `approval_processes_tags_explained`

---

### 2. Import the ETL Scenario in Make

- Create a new scenario in Make
- Import:  
  ➤ `AI4SF - Get Approval Processes Metadata From Github.blueprint.json`

- Go to the **Functions** section → Create a new function named:  
  ➤ `extractObject`  
  Paste the content from `extractObject.js`

- Connect the scenario modules according to the instructions:
  - Module 1: GitHub connection
  - Module 3: Parsing logic
  - Final module: BigQuery upload

- Set the scenario to run **“On Demand”**
- Run once to populate BigQuery with data

---

### 3. Configure the Agent

- Import the helper scenario:  
  ➤ `AI4SF - Get BigQuery Data for AI Agent.blueprint.json`

- Connect your BigQuery dataset  
  When asked to select a table, choose **Map** and leave it blank

- Create the agent (ChatGPT custom tool or equivalent):
  - Paste the contents of:  
    ➤ `PROMPT_approval_processes.txt`
  - Connect the helper Make automation (via API or Make connection)

---

### 4. Use the Agent!

That’s it! The agent is now ready to process metadata, interpret tags, and help you analyze Salesforce approval flows in plain language.

---



## 📌 Notes & Tips

- 🧪 This agent is **still under development** — responses may sometimes be incomplete or imperfect.
- 🧠 The most important part is the **prompt** — experiment and iterate to get the best results.
- 💬 Feedback is welcome — feel free to fork, contribute, or open issues.
