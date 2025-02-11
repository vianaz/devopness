---
title: Delete a Server provisioned by Devopness
intro: Learn how to delete a server provisioned by Devopness on a cloud provider
links:
    overview:
    quickstart:
    previous:
    next:
    guides:
    related:
    featured:
required_permissions:
    - server:delete
---

{% danger %}

**DANGER**: This action will delete all server data on the cloud provider

{% enddanger %}

1. On Devopness, navigate to a project then select an environment
1. Find the `Servers` card
1. Click the `View` in the `Servers` card, to see a list of existing `Servers`
1. In the list of servers, find the server you want to delete and click `DETAILS`
1. On the upper-right corner of the server details view, click `...`
1. Use the drop-down menu to choose `DELETE`
1. Follow the prompts then click `DELETE`
1. Wait for the `server:remove` action to be completed
    > If this action fails, maybe your server status is different from "stopped", if this is the case follow the guide {% mentionPost "/docs/servers/stop-server" %}
1. Follow the guide {% mentionPost "/docs/servers/get-server-status" %}
    > The server status will be "deleted"
