import { useState, useEffect } from "react";
import axios from "axios";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import shuffleIcon from "@/assets/shuffle.svg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Quote } from "@/types/quotes";
import { useToast } from "@/components/ui/use-toast";

export default function RandomQuote() {
    const { toast } = useToast();
    const [quote, setQuote] = useState<Quote | null>(null);
    const [saved, setSaved] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchRandomQuote = async () => {
        setIsLoading(true);
        const response = await axios.get("https://api.quotable.io/random");

        const fetchedQuote: Quote = {
            id: response.data._id,
            content: response.data.content,
            author: response.data.author,
        };

        setQuote(fetchedQuote);
        setIsLoading(false);
    };

    const saveQuote = async () => {
        if (!saved) {
            toast({
                title: "Implement Me!",
                description: "Failed to save quote",
            });
        } else {
            toast({
                title: "Implement Me!",
                description: "Failed to delete quote",
            });
        }

        setSaved((prev) => !prev);
    };

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <Card className="relative p-12 rounded-lg w-3/5 flex flex-col items-center justify-center gap-y-6 md:w-4/5">
                {isLoading ? (
                    <>
                        <Skeleton className="w-[80%] h-[36px]" />
                        <Skeleton className="w-20 h-[20px]" />
                    </>
                ) : (
                    <>
                        <h1 className="text-4xl text-center">{quote?.content}</h1>
                        <h2 className="text-xl italic">{quote?.author}</h2>
                        <button className="absolute bottom-4 right-4 p-2" onClick={saveQuote}>
                            {saved ? (
                                <HeartFilledIcon className="w-8 h-8" color="#E81C4C" />
                            ) : (
                                <HeartIcon className="w-8 h-8" />
                            )}
                        </button>
                    </>
                )}
            </Card>
            <Button
                className="mt-10 rounded-full w-[70px] h-[70px] flex items-center justify-center"
                onClick={() => {
                    fetchRandomQuote();
                    setSaved(false);
                }}
            >
                <img src={shuffleIcon} alt="Shuffle" className="w-7 h-7" />
            </Button>
        </div>
    );
}
