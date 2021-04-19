function(properties, context) {
  let message_list = properties.message_list.get(0, properties.message_list.length());
  let thread_messages = [];
  for (let i=0; i<properties.message_list.length(); i++) {
    let thread_ts = message_list[i].get("_p_thread_ts");
    if (thread_ts) {
      let thread_msg = {
        _p_text: message_list[i].get("_p_text"),
        _p_thread_ts: thread_ts,
        _p_reply_count: message_list[i].get("_p_reply_count"),
        
        _p_blocks: [],
        _p_elements: [],
        _p_options: [],
        _p_reply_users: [],
        _p_reactions: [],
        _p_users: [],
        _p_attachments: [],
        _p_actions: [],
        _p_mrkdwn_in: []
      };
      thread_messages.push(thread_msg);
      
      //return {text_out: message_list[i].get("_p_text")};
      //return {text_out: Object.keys(thread_msg).toString()};
    }
  };
  let messages = {
    _p_messages: thread_messages.slice()
  };
  //return {text_out: Object.keys(messages).toString()};
  //return {text_out: JSON.stringify(messages.listProperties())};

  return {"thread_messages": messages};
  
}