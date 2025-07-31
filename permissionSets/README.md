# ⚠️ Important

> This bot **does not include assignments**.

To activate this project you need to follow 3 steps:

---

## 1. **Build a BigQuery**

### 1.1 Create BigQuery Project

1. Create a BigQuery
2. Create a project
3. Create a dataset

### 1.2 Upload the Tables

#### 1.2.1 Create `permissionSets` table

* Go to `./schema.json`
* Copy all the JSON
* In BigQuery, click on your dataset and select: **Create table**

**Fill the rows:**

* **Table**: name of the table (`permissionSets`)
* **Schema**: click on "Edit as text"
* Paste the JSON
* Click **Create Table**

#### 1.2.2 Create `permissionSetTags` table

* In BigQuery, click on your dataset and select: **Create table**

**Fill the rows:**

* **Create table from**: Upload
* **Select file**: select the file `./permissionSetTags`
* **File format**: Avro
* **Table**: name of the table (`permissionSetTags`)
* Click **Create Table**

---

## 2. **Make**

### 2.1 Sign up

* Sign up to [Make](https://www.make.com/en/pricing) and select the **Enterprise** plan (only this plan supports AI Agent)

### 2.2 Build Automation Scenario

1. In Scenarios, click: **Create a new scenario**
2. At the bottom, click on **More** and then **Import Blueprint**
3. Import the file: `./automation.json`
4. In the first module, click on the clock and change it to **On Demand**
5. In Module 1 and Module 3, enter the URL and token to your Git (where the XML files are located)
6. In the BigQuery module, connect your BigQuery account
7. Select your project, dataset, and table
8. Click **Save** and **Run**

### 2.3 Build BigQuery Tool Scenario

1. In Scenarios, click: **Create a new scenario**
2. At the bottom, click on **More** and then **Import Blueprint**
3. Import the file: `./bigQuery_tool.json`
4. In the first module, click on the clock and change it to **On Demand**
5. In the BigQuery module, connect your BigQuery account
6. Select your project, dataset, and table
7. Click **Save**

---

## 3. **Run the AI Agent**

### 3.1 Create Agent

1. In the sidebar on Make, select **AI Agents** and click **Create Agent**
2. Create an OpenAI connection
3. **Model**: GPT-4o mini (or your preferred model)
4. Go to the file `./prompt` and copy the entire prompt
5. Paste the prompt into the **System Prompt**

### 3.2 Connect BigQuery Tool

1. In the UI, go to **System Tools** and click **Add**
2. Choose the **bigQuery\_tool** scenario and give it a description

### 3.3 Update Project Path

In the system prompt you will see this line:

```text
your-project-name.your-DataSet.permissionSets
```

Replace:

* `your-project-name` with the name of your project
* `your-DataSet` with the name of your dataset

---

🎉 **Now you can ask the agent anything. Enjoy!**

---