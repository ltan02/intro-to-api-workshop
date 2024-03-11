import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RandomQuote from "@/pages/RandomQuote";
import RandomSavedQuote from "./pages/RandomSavedQuote";

function App() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <div className="absolute top-8 right-10">
                <Switch
                    onClick={() => {
                        theme === "dark" ? setTheme("light") : setTheme("dark");
                    }}
                />
            </div>
            <Tabs defaultValue="randomQuote" className="items-center justify-center flex flex-col">
                <TabsList className="absolute top-8">
                    <TabsTrigger value="randomQuote">Random Quote</TabsTrigger>
                    <TabsTrigger value="randomSavedQuote">Random Saved Quote</TabsTrigger>
                </TabsList>
                <TabsContent value="randomQuote">
                    <RandomQuote />
                </TabsContent>
                <TabsContent value="randomSavedQuote">
                    <RandomSavedQuote />
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default App;
