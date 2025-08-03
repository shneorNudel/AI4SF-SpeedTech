# AI Agent for Salesforce Metadata

## What Is This Agent?

This repository contains the blueprint for building an **AI Agent** designed to answer questions about **Salesforce organization metadata**, such as object fields, workflows, approval processes, etc.

### Who Is It For?

It is intended for **company employees working with Salesforce**, helping them:
- Quickly **understand what specific metadata fields mean**
- **Search** and **locate metadata** across a Salesforce org
- **Answer questions** or even **derive conclusions** based on Salesforce metadata

The agent works by integrating structured Salesforce metadata from XML/JSON into a searchable BigQuery database, and then pairing it with an AI agent connected to that data. 

---

## How to Build an AI Agent from Scratch

Below is a full, step-by-step guide to build the agent and understand the automation and logic involved.

---

### Step 1: Choose a Metadata Type

Pick a Salesforce metadata topic, such as:
- Fields
- Workflows
- Approval Processes
- Etc.

> Metadata is typically exported in either **XML** or **JSON** format.

---

### Step 2: Map All Relevant Tags or Keys

You’ll need to **map out all the tags (for XML) or keys (for JSON)** relevant to the selected metadata type.

#### How to Map:
1. Open an Excel sheet (or any table platform).
2. Create a **“Tag” column** that lists all the tags/subtags found across the XML files (e.g., `fullName`, `type`, `label`, etc.).
3. Filter out only **important** tags to become standalone **columns** in the main table.
4. Create a second column called **"Description"** and fill it with explanations of what each tag represents.
   - Use the [Salesforce Metadata API docs](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm)
   - If you removed child/grandchild tags, **mention them in the parent tag’s description**, like:  
     `valueSet.valueSettings - Description of the grandchild tag.`

> You’ll find examples of these tables in each agent's folder.

---

### Step 3: Create a BigQuery Table

- Each **column** in your BigQuery table corresponds to a tag you selected in the Excel sheet.
- This is your **main data table**, where all the actual metadata records will go.

---

### 📘 Step 4: Create a Description Table

Also create a second table that contains:
- Column 1: `Tag`
- Column 2: `Description` (includes info on removed subtags)

This gives the AI **context about each column** in the main data table and enhances its ability to explain the data.

> This table can be created in Excel and uploaded to BigQuery via AVRO format.

---

### Step 5: Automate the Data Ingestion

Use **Make.com** or similar automation to:
- Parse the XML/JSON data
- Extract all relevant values
- Upload them to the appropriate BigQuery table

> 📝 **Note:**  
> If a column in your main table represents a tag that includes child or grandchild tags, the **value inserted into that column will include the entire XML/JSON section for that parent**, including all nested children. This allows the agent to retain structural context even when a tag isn’t broken out into separate columns.

---

### Step 6: Understand the Automation Flow

The Make automation typically does the following:

1. **URL Request (Git)**  
   Connects to the Git folder using Git API credentials and the correct path.
   
2. **Iterator**  
   Loops through all metadata files (e.g., ones ending with `field-meta.xml` for Fields).
   
3. **Second URL Request**  
   Fetches each filtered file directly via its path.

4. **Parse XML Module**  
   Breaks the XML file into its component tags.

5. **Iterator (Parsed Data)**  
   Loops through each tag parsed from XML.

6. **BigQuery Upload Module**  
   - Connects to the relevant project/dataset/table
   - Maps each parsed tag to its correct BigQuery column  
   - Uses Make syntax like `{{6.fullName}}` to refer to module outputs

> If the table already has data, either **truncate it with SQL** or **create a new empty table with the same schema** before running the automation.

> **Important:**  
> If your setup does **not use Git**, or if your **column mapping is different** from what's provided in this repo, you’ll need to **adapt the automation accordingly**:
> - Replace the Git modules with a source that fits your data storage (e.g., cloud drive, API calls, etc.)
> - Adjust the tag-to-column mapping based on the **tags you selected** when creating your BigQuery schema
> - Ensure your **Parser module (XML or JSON)** outputs are correctly mapped to your columns in the upload step

This process can be adapted to other platforms like **n8n**, **Zapier**, or a custom script depending on your stack.

---

### Step 7: Build the BigQuery Tool for the Agent

This tool allows the AI agent to:
- Access both the main metadata table and the description table
- Query relevant info using natural language

> Instructions and files for this step exist in each agent folder (`README` included).

---

### Step 8: Create the AI Agent

- You can use Make’s native agent feature (requires highest subscription tier)  
- Or use other platforms like **n8n** or **Langchain**

The agent must:
- Connect to the BigQuery tool created above
- Use a predefined **prompt** that guides it in answering user questions accurately
- Retrieve schema info from the description table to improve contextual responses

> A complete example prompt is included in each agent folder.

---

## Example Directory Structure

<insert Git Repositroy Directory Stracture> (optional addition)

---

## Notes & Tips

- **Always update your mapping tables** when new tags appear in your Salesforce metadata.
- Ensure **accurate naming and spelling** for BigQuery columns – they must exactly match what you write in Make.
- If your data isn’t stored in Git, you’ll need to **modify the automation** to pull data from your source (like Salesforce directly or cloud storage).

---

## Need Help?

Check each `agent` folder for step-by-step examples specific to that metadata type. Every folder includes:
- Mapped tables
- Ready-to-use automations
- Agent configuration guides

---

## Final Thoughts

With this system, your organization gains:
- Better data visibility
- Smarter decision-making
- Reduced dependency on Salesforce admins for metadata queries

Enjoy building and using the agents!