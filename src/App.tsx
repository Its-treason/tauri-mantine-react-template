import { useState } from 'react';
import { Button, Stack, Text, TextInput, Title } from '@mantine/core';
import { invoke } from '@tauri-apps/api/core';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <Stack p="md" maw={400}>
      <Title order={1}>Welcome to Tauri + React + Mantine</Title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <Stack>
          <TextInput
            id="greet-input"
            label="Name"
            placeholder="Enter a name..."
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <Button type="submit">Greet</Button>
        </Stack>
      </form>
      {greetMsg && <Text>{greetMsg}</Text>}
    </Stack>
  );
}

export default App;
