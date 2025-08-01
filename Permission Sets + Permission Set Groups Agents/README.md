---

# 🤖 AI4SF – Permission Sets & Groups Agent

---

## 🔍 Overview

This project enables a smart AI agent to answer real-time questions about Salesforce **Permission Sets** and **Permission Set Groups**, using data from **BigQuery**.

### Steps to get started:

1. 🏠 Set up your BigQuery environment
2. 📅 Build automation scenarios with [Make](https://www.make.com/)
3. 🤖 Deploy and connect the AI Agent

---

## 📊 Step 1: Set Up BigQuery

### 1.1 Create a BigQuery Project

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new **BigQuery project**
3. Inside the project, create a **dataset**

---

### 1.2 Upload the Required Tables

Create the following **4 tables**:

#### 🔹 `permissionSets`

* File: `./PS_Schema.json`
   * Copy the entire JSON content
* In BigQuery:

  * Click your dataset → **Create table**
  * **Table name**: `permissionSets`
  * Schema: **Edit as text** → Paste JSON → **Create Table**

#### 🔹 `permissionSetGroups`

   * File: `./Groups_Schema.json`
   * Same process as above
   * **Table name**: `permissionSetGroups`


#### 🔹 `permissionSetTags`

* File: `./permissionSetTags` (Avro)
* In BigQuery:

  * **Create table from**: Upload
  * **File**: Select `./permissionSetTags`
  * **File format**: Avro
  * **Table name**: `permissionSetTags`
  * Click **Create Table**


#### 🔹 `permissionSetGroupTags`

* File: `./permissionSetGroupTags` (Avro)
* Follow same steps
* **Table name**: `permissionSetGroupTags`

---

## ⚙️ Step 2: Automate with Make

### 2.1 Sign Up for Make

* Go to [Make.com](https://www.make.com/en/pricing)
* Choose the **Enterprise** plan (AI Agents require it)

---

### 2.2 Create Automation Scenarios

You’ll create 2 automation scenarios: one for each data type.

#### 🔁 Permission Sets Automation

1. Go to **Scenarios** → **Create a new scenario**
2. Click **More** → **Import Blueprint**
3. Import `./PS_Automation.json`
4. Set the trigger to **On Demand** (clock icon)
5. In Module 1 & 3:

   * Git repo URL (where XMLs are stored)
   * Access token
6. In BigQuery module:

   * Connect account
   * Select your **project**, **dataset**, and **table** (permissionSets)
7. Click **Save** & **Run**

#### 🔁 Permission Set Groups Automation

* Same as above, using `./Groups_Automation.json`
* Use table: `permissionSetGroups`

---

### 2.3 Create BigQuery Tool Scenario

1. Create a new scenario
2. Import: `./bigQuery_tool.json`
3. Set trigger to **On Demand**
4. Connect BigQuery
5. Select your **project** and **dataset**, and **click Map** to select the table (don’t type it)
6. Click **Save**

---

## 🤖 Step 3: Deploy the AI Agent

### 3.1 Create the Agent

1. In Make: **AI Agents** → **Create Agent**
2. Connect your **OpenAI API key**
3. Choose model: `GPT-4o mini` (or better)
4. Open `./PS_Prompt` → Copy content → Paste into **System Prompt**

### 3.2 Link BigQuery Tool

1. Under **System Tools** → Click **Add**
2. Select the `bigQuery_tool` scenario

### 3.3 Update the Prompt Path

In the prompt, locate this lines (you have 7 lines):

```text
your-project-name.your-DataSet.permissionSets
```

Replace:

* `your-project-name` → your BigQuery **project ID**
* `your-DataSet` → your **dataset name**

---

### 📃 Deploy Group Agent

Repeat steps **3.1 – 3.3** using:

* Prompt file: `./Groups_Prompt`
* Update path to:

```text
your-project-name.your-DataSet.permissionSetGroups
```

(you have 8 liens with path)
---

## 🌟 You're Ready!

Now your AI Agent can:

* 🔍 Search and explain **permission sets** and **groups**
* 🔖 Understand tag definitions
* 📄 Return full XML from BigQuery and more!

Enjoy building smart tools with AI! 🤖✨

---