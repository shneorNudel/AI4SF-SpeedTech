
To activate this project you need to follow 3 steps:

# 1. Build a BigQuery

## Create BigQuery Project

1. Create a BigQuery
2. Create a project
3. Create a dataset

### Upload the Tables

2. Create custom metadata type custom fields table:
* go to the `./schema - Workflow.json` *holding the table's columns*
* copy all the JSON
* go to datasest, click create table
* enter table name `workflow` (or whatever else you want)
* under 'Scehma' turn on "edit" *configuring the table's columns*
* paste the JSON you've copied and click on 'create'

3. Create global value sets table:
* go to the `./schema - CustomLabels.json` *holding the table's columns*
* copy all the JSON
* go to dataset, click create table
* enter table name `customLabels` (or whatever else you want)
* under 'Scehma' turn on "edit". *configuring the table's columns*
* paste the JSON you've copied and click on 'create'

#### Create Tags Description Tables:

**Create CMDT Tags Description Table:**

* In BigQuery, click on your dataset and select: **Create table**
**Create table from**: Upload
**Select file**: select the file `./workflow_tags_description`
**File format**: Avro
**Table**: 'name of the table (`workflow_tags_description`, or whatever else you want)'
* Click **Create Table**

**Create GlobalValueSets Tags Description Table:**

* In BigQuery, click on your dataset and select: **Create table**
**Create table from**: Upload
**Select file**: select the file `./custom_labels_tags_description`
**File format**: Avro
**Table**: 'name of the table (`custom_labels_tags_description`, or whatever else you want)'
* Click **Create Table**

---

## 2. Make

### Sign up

* Sign up to [Make](https://www.make.com/en/pricing) and select the **Enterprise** plan (only this plan supports AI Agent)

### Build Automation Scenario 
*explanation: the automation is for mapping the data tables in bigquery with the org's information from git. in case you have your information stored elsewhere, or your folder configuration is different than the one cased in this automation, you may change it/build one of yours, and this automation can be used as a base. otherwise, it can be used as is.*

**Create The CMDT Automation Scenerio:**

1. In Scenarios, click: **Create a new scenario**
2. At the bottom, click on **More** and then **Import Blueprint**
3. Import the file: `./automation Workflow.json`
4. In the first module, click on the clock and change it to **On Demand** 
5. In Module 1 and Module 3, enter the URL and token to your Git (where the XML files are located - look at "explanation" above, if your files or not stored in git).
6. In the BigQuery module, connect your BigQuery account
7. Select your project, dataset, and table
8. Click **Save** and **Run**

**Create A New Scenerio And Repeat All The Steps For The `./automation CustomLabels.json` File**

### Build BigQuery Tool Scenario

1. In Scenarios, click: **Create a new scenario**
2. At the bottom, click on **More** and then **Import Blueprint**
3. Import the file: `./bigQuery_tool.json`
4. In the first module, click on the clock and change it to **On Demand**
5. In the BigQuery module, connect your BigQuery account
6. Select your project and data set, and turn the table map to "on".
7. Click **Save**

---

## **Run the AI Agent**

### 3. Create Agent

1. In the sidebar on Make, select **AI Agents** and click **Create Agent**
2. Create an OpenAI connection: go to OpenAI and create an API Key and copy and paste it in the relevent field.
**Model**: GPT-4o mini(or your preferred model)
* name the OpenAi connection
* click: **save**
3. Go to the file `./prompt` and copy the entire prompt
4. Paste the prompt into the **System Prompt**
5. Fill the templates in the prompt with the relevant data. 
A template will look like this:  <insert the_data_you_Should_to_fill_here>

### Connect BigQuery Tool

1. In the UI, go to **System Tools** and click **Add**
2. Choose the **bigQuery_tool** scenario(which we imported in the previous part) and give it a description(to the ai, that will know what the tool should be used for)

---

**Now you can ask the agent anything. Enjoy!**

---