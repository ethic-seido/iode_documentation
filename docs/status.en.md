---
icon: material/list-status
description: Monitor public ES/IODE service availability and interpret the status page.
---
# Service **Status**

The status page helps users quickly check whether ES/IODE public services are operating normally, whether an incident is in progress, or whether maintenance has been published. It is useful when a search does not behave as expected, when an AI assistant appears unavailable, or before rerunning an important query.

```text
Status: https://esiode.statuspage.io/
```

## Monitored components

The public status page reports the state of exposed components, including **Web** and **AI**. The Web component relates to site access and browser-visible workflows. The AI component relates to features that depend on artificial intelligence processing, such as assistants, analyses, or generation tasks.

An AI degradation may affect an advanced feature without preventing consultation of public pages. Conversely, a Web incident may make general access unstable even if compute services remain available.

## Reading an incident

When an incident is published, check the date, affected component, impact level, and follow-up messages. For scientific work, avoid drawing conclusions from missing results during an incident window: service disruption may affect search, content refresh, or assisted features.

## Recommendations for teams

If ES/IODE is used for monitoring, literature review, or writing preparation, record the date and time of important searches. During an incident, rerun critical queries after recovery and mention the interruption in working notes when it may affect reproducibility.
