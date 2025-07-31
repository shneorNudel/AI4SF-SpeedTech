בשמחה! הנה גרסה משופרת, מעוצבת ומושכת יותר של קובץ ה־README שלך – באנגלית בלבד, עם ניסוחים רהוטים, מבנה ברור, וסגנון מקצועי שמתאים לפרויקט טכנולוגי שיתופי:

---

# 🚀 AI4SF-SpeedTech Setup Guide

> ⚠️ **Note:**
> This bot **does not include any assignments**. It provides the foundation for working with Salesforce Permission Sets using AI + BigQuery.

---

## 📌 Overview

To get this project up and running, complete the following **3 steps**:

1. ✅ Set up your BigQuery environment
2. 🔄 Build automation scenarios with [Make](https://www.make.com/)
3. 🧠 Deploy and connect your AI Agent

Let’s go!

---

## 🏗️ Step 1: Set Up BigQuery

### 📁 1.1 Create a BigQuery Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new BigQuery **project**
3. Inside the project, create a **dataset**

---

### 📂 1.2 Upload the Required Tables

#### 🔹 Create `permissionSets` Table

1. Open the file `./schema.json`
2. Copy the entire JSON content
3. In BigQuery:

   * Click on your dataset → **Create table**
   * **Table name**: `permissionSets`
   * Under **Schema**, click **Edit as text**
   * Paste the JSON
   * Click **Create Table**

---

#### 🔸 Create `permissionSetTags` Table

1. Again, click on **Create table**
2. Fill in the fields:

   * **Create table from**: Upload
   * **File**: Select `./permissionSetTags`
   * **File format**: Avro
   * **Table name**: `permissionSetTags`
   * Click **Create Table**

---

## ⚙️ Step 2: Automate with Make

### 📝 2.1 Sign Up for Make

* Register at [Make.com](https://www.make.com/en/pricing)
* Select the **Enterprise** plan (required for AI Agents)

---

### 🔧 2.2 Create Main Automation Scenario

1. Go to **Scenarios** → **Create a new scenario**
2. Click **More → Import Blueprint**
3. Import `./automation.json`
4. In the first module, click the clock icon and change to **On Demand**
5. In Module 1 and 3, input:

   * The URL to your Git repo (where XMLs are stored)
   * Your access token
6. In the BigQuery module:

   * Connect your BigQuery account
   * Choose the correct project, dataset, and table
7. Click **Save** and **Run**

---

### 🛠️ 2.3 Create BigQuery Tool Scenario

1. Repeat the process to create a new scenario
2. Import `./bigQuery_tool.json`
3. Change the clock to **On Demand**
4. Connect your BigQuery account
5. Select the relevant project, dataset, and table
6. Click **Save**

---

## 🤖 Step 3: Deploy the AI Agent

### 🧠 3.1 Create the Agent

1. In Make, go to **AI Agents** → **Create Agent**
2. Set up a connection with your **OpenAI API key**
3. Choose a model — recommended: `GPT-4o mini` (or higher)
4. Open the file `./prompt` and copy the full content
5. Paste it into the **System Prompt** field

---

### 🔗 3.2 Link to BigQuery Scenario

1. Go to the **System Tools** tab → click **Add**
2. Select the `bigQuery_tool` scenario
3. Give it a descriptive name

---

### 🛠️ 3.3 Update the Prompt Path

In the System Prompt you’ll see:

```text
your-project-name.your-DataSet.permissionSets
```

Replace:

* `your-project-name` → with your actual BigQuery project ID
* `your-DataSet` → with your actual dataset name

---

## 🎉 That’s it!

Your agent is now ready to answer questions about Salesforce Permission Sets using real-time data from BigQuery.

You can now:

* Ask about specific permission sets
* Query tag definitions
* Retrieve full XML when needed

Enjoy building with AI! 🤖✨

---

אם תרצה, אוכל גם להמיר את זה לקובץ `README.md` ולהכין אותו לקלונינג מ־GitHub.
